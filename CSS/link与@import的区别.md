# link 与 @import 的区别

- 老祖宗的差别。link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。
- 加载顺序的差别。link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。
- 兼容性的差别。link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。
- 使用 dom 控制样式时的差别。link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持
