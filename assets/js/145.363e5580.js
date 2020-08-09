(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{575:function(t,e,s){"use strict";s.r(e);var v=s(55),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[t._v("#")]),t._v(" TLS")]),t._v(" "),s("p",[t._v("TLS 协议位于传输层之上，应用层之下。首次进行 TLS 协议传输需要两个 RTT ，接下来可以通过 Session Resumption 减少到一个 RTT。")]),t._v(" "),s("p",[t._v("在 TLS 中使用了两种加密技术，分别为：对称加密和非对称加密。")]),t._v(" "),s("ul",[s("li",[t._v("对称加密：对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。")]),t._v(" "),s("li",[t._v("非对称加密：有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。")])]),t._v(" "),s("p",[t._v("TLS 握手过程如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/12/1635260126b3a10c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),s("ul",[s("li",[t._v("客户端发送一个随机值，需要的协议和加密方式")]),t._v(" "),s("li",[t._v("服务端收到客户端的随机值，自己也产生一个随机值，并根据客户端需求的协议和加密方式来使用对应的方式，发送自己的证书（如果需要验证客户端证书需要说明）")]),t._v(" "),s("li",[t._v("客户端收到服务端的证书并验证是否有效，验证通过会再生成一个随机值，通过服务端证书的公钥去加密这个随机值并发送给服务端，如果服务端需要验证客户端证书的话会附带证书")]),t._v(" "),s("li",[t._v("服务端收到加密过的随机值并使用私钥解密获得第三个随机值，这时候两端都拥有了三个随机值，可以通过这三个随机值按照之前约定的加密方式生成密钥，接下来的通信就使用对称加密通过该密钥来加密解密")])]),t._v(" "),s("p",[t._v("通过以上步骤可知，在 TLS 握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信。")]),t._v(" "),s("blockquote",[s("p",[t._v("以上说明的都是 TLS 1.2 协议的握手情况，在 1.3 协议中，首次建立连接只需要一个 RTT，后面恢复连接不需要 RTT 了。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);