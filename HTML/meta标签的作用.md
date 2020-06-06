# meta 标签的作用

- 常用于定义页面的说明，关键 字，最后修改日期，和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页 面），搜索引擎和其它网络服务
- meta 里的数据是供机器解读的，告诉机器该如何解析这个页面
- 还有一个用途是可以添加服务器发送到浏览器的 http 头部内容

## 实际用法

```html
<meta http-equiv="charset" content="iso-8859-1" />
<meta http-equiv="expires" content="31 Dec 2008" />
```

将会在浏览器头部添加这些

```
charset:iso-8859-1
expires:31 Dec 2008
```

## 常用 meta

- charset: 声明文档使用的编码，通常为 utf-8

### name + content 属性

```html
<!-- 网页作者 -->
<meta name="author" content="开源技术团队" />
<!-- 网页地址 -->
<meta name="website" content="https://xinpuchen.top" />
<!-- 网页版权信息 -->
<meta name="copyright" content="2018-2019 demo.com" />
<!-- 网页关键字, 用于SEO -->
<meta name="keywords" content="meta,html" />
<!-- 网页描述 -->
<meta name="description" content="网页描述" />
<!-- 搜索引擎索引方式，一般为all，不用深究 -->
<meta name="robots" content="all" />
<!-- 移动端常用视口设置 -->
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=no"
/>
```

- viewport 参数详解：
- width：宽度（数值 / device-width）（默认为 980 像素）
- height：高度（数值 / device-height）
- initial-scale：初始的缩放比例 （范围从>0 到 10）
- minimum-scale：允许用户缩放到的最小比例
- maximum-scale：允许用户缩放到的最大比例
- user-scalable：用户是否可以手动缩 (no,yes)
