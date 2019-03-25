# 浏览器的实现原理与 API

![index](浏览器的实现原理与API.png)

## 实现原理

> 从浏览器设计出发,按照解析、构建 DOM 树、计算 CSS、渲染、合成和绘制的流程来理解浏览器的工作原理

![浏览器请求网页流程图](浏览器请求网页流程图.jpg)

1. 浏览器首先使用 HTTP 协议或者 HTTPS 协议,向服务端请求页面；
2. 把请求回来的 HTML 代码经过解析,构建成 DOM 树；
3. 计算 DOM 树上的 CSS 属性；
4. 最后根据 CSS 属性对元素逐个进行渲染,得到内存中的位图；
5. 一个可选的步骤是对位图进行合成,这会极大地增加后续绘制的速度；
6. 合成之后,再绘制到界面上。

### 解析

#### HTTP

##### HTTP 协议

> 从 HTTP 请求回来开始,这个过程并非一般想象中的一步做完再做下一步,而是一条流水线。

&emsp;&emsp;从 HTTP 请求回来,就产生了流式的数据,后续的 DOM 树构建、CSS 计算、渲染、合成、绘制,都是尽可能地流式处理前一步的产出: 即不需要等到上一步骤完全结束,就开始处理上一步的输出,这样我们在浏览网页时,才会看到逐步出现的页面。

&emsp;&emsp;浏览器首先要做的事就是根据 URL 把数据取回来,取回数据使用的是 HTTP 协议(实际上这个过程之前还有 DNS 查询,不过这里就不详细展开了。)

1. [HTTP1.1 rfc2616](https://tools.ietf.org/html/rfc2616)
2. [HTTP1.1 rfc7234](https://tools.ietf.org/html/rfc7234)

&emsp;&emsp;HTTP 协议是基于 TCP 协议出现的,对 TCP 协议来说,TCP 协议是一条双向的通讯通道,HTTP 在 TCP 的基础上,规定了 Request-Response 的模式。这个模式决定了通讯必定是由浏览器端首先发起的。

&emsp;&emsp;大部分情况下,浏览器的实现者只需要用一个 TCP 库,甚至一个现成的 HTTP 库就可以搞定浏览器的网络通讯部分。HTTP 是纯粹的文本协议,它是规定了使用 TCP 协议来传输文本格式的一个应用层协议。

- 在 TCP 通道中传输的,完全是文本。
- 在请求部分,第一行被称作 request line,它分为三个部分,HTTP Method,也就是请求的“方法”,请求的路径和请求的协议和版本。
- 在响应部分,第一行被称作 response line,它也分为三个部分,协议和版本、状态码和状态文本。
- 紧随在 request line 或者 response line 之后,是请求头 / 响应头,这些头由若干行组成,每行是用冒号分隔的名称和值。
- 在头之后,以一个空行(两个换行符)为分隔,是请求体 / 响应体,请求体可能包含文件或者表单数据,响应体则是 html 代码。

##### HTTP 格式

- Request
  - request line
    - method
      - GET: 浏览器通过地址栏访问页面都是 GET 方法
      - POST: 表单提交产生 POST 方法
      - HEAD: 跟 GET 类似,只返回请求头,多数由 JavaScript 发起
      - PUT: 添加资源 (非强制约束)
      - DELETE: 删除资源 (非强制约束)
      - CONNECT: 现在多用于 HTTPS 和 WebSocket
      - OPTIONS, TRACE: 一般用于调试,多数线上服务都不支持
    - path
    - version
  - head
  - body
- Response
  - response line
    - version
    - status code (状态码)
    - status text (状态文本)
  - head
  - body

###### 状态码和状态文本

- 1xx: 临时回应,表示客户端请继续。(1xx 的状态被浏览器 http 库直接处理掉了,不会让上层应用知晓)
- 2xx: 请求成功。
  - 200: 请求成功。
- 3xx: 表示请求的目标有变化,希望客户端进一步处理。
  - 301: 永久性跳转。
  - 302: 临时性跳转。
  - 304: 跟客户端缓存没有更新。
- 4xx: 客户端请求错误。
  - 403: 无权限。
  - 404: 表示请求的页面不存在。
  - 418: It’s a teapot. 这是一个彩蛋,来自 ietf 的一个愚人节玩笑。([超文本咖啡壶控制协议](https://tools.ietf.org/html/rfc2324))
- 5xx: 服务端请求错误。
  - 500: 服务端错误。
  - 503: 服务端暂时性错误,可以一会再试。

###### HTTP Head (HTTP 头)

> HTTP 头可以看作一个键值对。
>
> 原则上,HTTP 头也是一种数据,我们可以自由定义 HTTP 头和值。不过在 HTTP 规范中,规定了一些特殊的 HTTP 头,我们现在就来了解一下它们。
>
> 在 HTTP 标准中,有完整的请求 / 响应头规定。

- Request Header

| Request Header  | 规定                                                 |
| --------------- | ---------------------------------------------------- |
| Accept          | 浏览器端接受的格式                                   |
| Accept-Encoding | 浏览器端接受的编码方式                               |
| Accept-Language | 浏览器端接受的语言,用于服务端判断多语言              |
| Cache-Control   | 控制缓存有效性                                       |
| Connection      | 连接方式,如果是 keep-alive,且服务端支持,则回复用连接 |
| Host            | HTTP 访问使用的域名                                  |
| If-Modified-Since            | 上次访问时的更改时间,如果服务器端认为此时间后自己没有更新,则会给出304响应                                  |
| If-None-Match            | 上次访问时使用的E-Tag,通常是页面的信息摘要,这个比更改时间更准确一些                                  |
| User-Agent            | 客户端标识,因为一些历史原因,这是一笔糊涂账,多数浏览器的这个字段都十分复杂,区别十分微妙                                  |
| Cookie            | 客户端存储的cookie字符串                                  |

- Response Header

| Response Header  | 规定                                                 |
| --------------- | ---------------------------------------------------- |
| Cache-Control          | 缓存控制,用于通知各级缓存保存的时间,例如max-age=0,标识不要控制缓存                                   |
| Connection          | 链接内容,Keep-Alive表示复用连接                                   |
| Control-Encoding          | 内容编码方式,通常是gzip                                   |
| Control-Length          | 内容的长度,有利于浏览器判断内容是否已经结束                                 |
| Control-Type          | 内容类型,所有请求网页的都是text/html                                   |
| Date          | 当前的服务器日期                                   |
| ETag          | 页面的信息摘要,用于判断下次请求是否需要重新连接到服务器取回页面                                   |
| Expires          | 过期时间,用于判断下次请求是否需要到服务端取回页面                                   |
| Keep-Alive          | 保持连接不断时需要的一些信息,如timeout=5,max=100                                   |
| Last-Modified          | 页面上次修改的时间                                   |
| Server          | 服务端软件的类型                                   |
| Set-Cookie          | 设置cookie,可以存在多个                                   |
| Via          | 服务端的请求链路,对一些调试场景至关重要的一个头                                   |

###### HTTP Request Body

> HTTP 请求的 body 主要用于提交表单场景。实际上,http 请求的 body 是比较自由的,只要浏览器端发送的 body 服务端认可就可以了。

常见的 body 格式是:

- application/json
- application/x-www-form-urlencoded 使用 html 的 form 标签提交产生的 html 请求的默认类型
- multipart/form-data 文件上传默认类型
- text/xml

###### [HTTPS](https://tools.ietf.org/html/rfc2818)

> 在 HTTP 协议的基础上,HTTPS 和 HTTP2 规定了更复杂的内容,但是它基本保持了 HTTP 的设计思想,即: 使用上的 Request-Response 模式。

&emsp;&emsp;HTTPS 是使用加密通道来传输 HTTP 的内容。但是 HTTPS 首先与服务端建立一条 TLS 加密通道。TLS 构建于 TCP 协议之上,它实际上是对传输的内容做一次加密,所以从传输内容上看,HTTPS 跟 HTTP 没有任何区别。

###### [HTTP 2](https://tools.ietf.org/html/rfc7540)

> HTTP 2 是 HTTP 1.1 的升级版本

&emsp;&emsp;HTTP 2.0 最大的改进有两点,一是支持服务端推送,二是支持 TCP 连接复用。

&emsp;&emsp;服务端推送能够在客户端发送第一个请求到服务端时,提前把一部分内容推送给客户端,放入缓存当中,这可以避免客户端请求顺序带来的并行度不高,从而导致的性能问题。

&emsp;&emsp;连接复用,则使用同一个 TCP 连接来传输多个 HTTP 请求,避免了 TCP 连接建立时的三次握手开销,和初建 TCP 连接时传输窗口小的问题。

> Note: 其实很多优化涉及更下层的协议。IP 层的分包情况,和物理层的建连时间是需要被考虑的。

### 构建 DOM 树

### 计算 CSS

### 渲染、合成和绘制

## API

> API 的主要介绍: 事件、DOM、CSSOM 几个部分,它们分别覆盖了交互、语义和可见效果

### DOM

### CSSOM

### 事件

### API 总集合
