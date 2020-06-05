(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{463:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dom-操作为什么耗时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作为什么耗时"}},[t._v("#")]),t._v(" DOM 操作为什么耗时")]),t._v(" "),a("p",[t._v("无论是对于刚刚开始学习，还是有所基础的前端学习者来说，都听过这么一句话，少用 JS 进行 DOM 操作，性能不好，耗时并且影响用户体验")]),t._v(" "),a("h2",{attrs:{id:"dom-操作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作原理"}},[t._v("#")]),t._v(" DOM 操作原理")]),t._v(" "),a("blockquote",[a("p",[t._v("DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML 交互的 API 文档。DOM 是载入到浏览器中的文档模型，它用节点树的形式来表现文档，每个节点代表文档的构成部分（例如： element——页面元素、字符串或注释等等）。 ——MDN")])]),t._v(" "),a("p",[t._v("DOM 其实是方便 HTML 组织元素结点的一种抽象对象，而对 DOM 的操作，指的就是我们日常对页面元素进行的操作")]),t._v(" "),a("p",[t._v("对 DOM 的操作其实就跟放大象到冰箱里一样，拿出来，改改改，放回去，并且放回去的操作浏览器帮你做了。(当然也可以自己做，见后文)")]),t._v(" "),a("p",[t._v("其实这类简单的操作并不会给浏览器带来多大的负担，所以说，DOM 操作并不耗时")]),t._v(" "),a("p",[t._v("那么你会问：这么说我听了这么久的耗时说法是错的了？")]),t._v(" "),a("p",[t._v("当然，事出有因，只是表述的时候有所省略了。真正影响我们操作体验的是，我们将变化后的 DOM 结点，放回去，引发的浏览器的"),a("code",[t._v("重排")]),t._v("和"),a("code",[t._v("重绘")])]),t._v(" "),a("p",[t._v("而且，这其中最为重要的，是"),a("strong",[t._v("浏览器的渲染机制")]),t._v("，在渲染时，会"),a("code",[t._v("阻塞JS")]),t._v("的进程`，避免出现渲染错误，这也是为什么我们要将 JS 文件，放在底部执行的原因")]),t._v(" "),a("h3",{attrs:{id:"重排和重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排和重绘"}},[t._v("#")]),t._v(" 重排和重绘")]),t._v(" "),a("ul",[a("li",[t._v("重排 reflow：部分 "),a("strong",[t._v("渲染树需要重新分析")]),t._v(" 并且 "),a("strong",[t._v("节点尺寸需要重新计算")])]),t._v(" "),a("li",[t._v("重绘 repaint：由于节点的 "),a("strong",[t._v("几何属性")]),t._v(" 发生改变或者由于 "),a("strong",[t._v("样式")]),t._v(" 发生改变,屏幕上的部分内容需要更新")])]),t._v(" "),a("h4",{attrs:{id:"触发重绘的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发重绘的操作"}},[t._v("#")]),t._v(" 触发重绘的操作")]),t._v(" "),a("p",[t._v("改变 width height、offset、visibility、outline、背景色值")]),t._v(" "),a("p",[t._v("重绘不一定重排")]),t._v(" "),a("h4",{attrs:{id:"触发重排的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发重排的操作"}},[t._v("#")]),t._v(" 触发重排的操作")]),t._v(" "),a("ol",[a("li",[t._v("DOM 元素的几何属性变化")]),t._v(" "),a("li",[t._v("DOM 树结构变化")]),t._v(" "),a("li",[t._v("获取某些属性（offsetTop...)(省略优化，直接重排）")])]),t._v(" "),a("h3",{attrs:{id:"耗时情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#耗时情况"}},[t._v("#")]),t._v(" 耗时情况")]),t._v(" "),a("p",[t._v("说了这么多，我们来看看，到底在什么情况下，我们会感受到 DOM 操作的缓慢")]),t._v(" "),a("p",[t._v("下面是一个对类为 main 的 div 进行填充的操作")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("DOM"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" times "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" times"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" subDiv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        subDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<div>Hello ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("</div>")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        div"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subDiv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("我使用了尽可能让 DOM 操作慢的代码编写方式，为了让效果更加明显")]),t._v(" "),a("h4",{attrs:{id:"插入-10-个-div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入-10-个-div"}},[t._v("#")]),t._v(" 插入 10 个 div")]),t._v(" "),a("p",[t._v("让 times = 10,我们可以在 console 里看到时间是")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  timer: 0.39599609375ms\n")])])]),a("h4",{attrs:{id:"插入-100-个-div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入-100-个-div"}},[t._v("#")]),t._v(" 插入 100 个 div")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  timer: 22.204833984375ms\n")])])]),a("h4",{attrs:{id:"插入-1000-个-div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入-1000-个-div"}},[t._v("#")]),t._v(" 插入 1000 个 div")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  timer: 1176.9072265625ms\n")])])]),a("hr"),t._v(" "),a("p",[t._v("我们可以从上面的测试中看到，当我们只在同一时刻操作少量的 DOM 结点时，效果并不明显，直到 1000 这个数量级，我们肉眼才会有可见的延迟")]),t._v(" "),a("p",[a("strong",[t._v("所以，当我们只是编写简单页面时，完全可以不用考虑 DOM 操作延时对我们的影响")]),t._v("\n当然，也是因为我们测试使用的例子较为简单，真正在实际的 HTML 页面中，div 元素内可能还会有较多的子 DOM 结点，所以延迟会更加明显")]),t._v(" "),a("h2",{attrs:{id:"dom-操作优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-操作优化"}},[t._v("#")]),t._v(" DOM 操作优化")]),t._v(" "),a("p",[t._v("那么在之后的学习中，随着业务的越来越复杂，我们必不可少的会学习到，如何进行 DOM 优化，下面是几种简单，常用的优化方法")]),t._v(" "),a("h3",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("又称事件代理，详情见 JS 模块 [事件委托]")]),t._v(" "),a("h3",{attrs:{id:"virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" virtual dom")]),t._v(" "),a("p",[t._v("虚拟 dom，详情见前端框架模块 [虚拟 dom]")]),t._v(" "),a("h3",{attrs:{id:"对-api-进行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-api-进行优化"}},[t._v("#")]),t._v(" 对 API 进行优化")]),t._v(" "),a("ul",[a("li",[t._v("减少 DOM 访问次数")]),t._v(" "),a("li",[t._v("多次访问同一 DOM，应该用局部变量缓存该 DOM")]),t._v(" "),a("li",[t._v("尽可能使用 querySelector，而不是使用获取 HTML 集合的 API")]),t._v(" "),a("li",[t._v("注意重排和重绘")]),t._v(" "),a("li",[t._v("使用事件委托，减少绑定事件的数量")])]),t._v(" "),a("h3",{attrs:{id:"window-requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-requestanimationframe"}},[t._v("#")]),t._v(" window.requestAnimationFrame()")]),t._v(" "),a("blockquote",[a("p",[t._v("window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用 ——MDN")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Write")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  element1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Read")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Write")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  element2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);