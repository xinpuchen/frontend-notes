(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{528:function(t,e,s){"use strict";s.r(e);var r=s(55),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ast-遍历思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ast-遍历思路"}},[t._v("#")]),t._v(" AST 遍历思路")]),t._v(" "),s("p",[t._v("前端领域的编译工具有挺多，它们都是基于 "),s("code",[t._v("AST")]),t._v("，而操作 "),s("code",[t._v("AST")]),t._v(" 就需要遍历来查找。")]),t._v(" "),s("p",[s("code",[t._v("eslint、babel、estraverse、postcss、typescript、compiler")]),t._v(" 这些编译工具的遍历 AST 的实现我们都过了一遍，虽然有的用递归、有的用循环，有的是面向对象、有的是函数，有的是抽离 visitorKeys、有的是写死在代码里，但思路都是一样的。")]),t._v(" "),s("p",[t._v("所以，我们来正式的下个结论："),s("strong",[t._v("编译工具的遍历实现思路只有一种，就是找到每种 AST 的可遍历的 keys，深度优先的遍历。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);