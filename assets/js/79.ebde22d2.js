(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{511:function(v,_,t){"use strict";t.r(_);var r=t(55),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[v._v("#")]),v._v(" 文件权限")]),v._v(" "),t("h2",{attrs:{id:"权限解析-字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限解析-字符"}},[v._v("#")]),v._v(" 权限解析 - 字符")]),v._v(" "),t("p",[v._v("以 “-rwxrwxrwx” 为例：")]),v._v(" "),t("ul",[t("li",[v._v("第一个符号代表文件类型")]),v._v(" "),t("li",[v._v("“-” 符号表示该文件是非目录类")]),v._v(" "),t("li",[v._v("“d” 符号表示目录类型；（ 末尾的 @ 符号表示文件拓展属性，属于文件系统的一个功能。）")])]),v._v(" "),t("p",[v._v("后面九个字母分为三组：")]),v._v(" "),t("ul",[t("li",[v._v("从前到后每组分别对应所属用户（user）")]),v._v(" "),t("li",[v._v("所属用户所在组（group）")]),v._v(" "),t("li",[v._v("其他用户（other）对该文件的访问权限")])]),v._v(" "),t("p",[v._v("每组中的三个字符 “rwx” 分别表示：")]),v._v(" "),t("ul",[t("li",[v._v("对应用户对该文件拥有的可读／可写／可执行权限")]),v._v(" "),t("li",[v._v("没有相应权限则使用 “-” 符号替代。")])]),v._v(" "),t("p",[v._v("根据上面查看权限部分的介绍，修改权限也应包括访问用户、添加或取消操作、具体权限和访问文件，即：")]),v._v(" "),t("p",[v._v("chmod 用户+操作+权限 文件")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("用户部分：使用字母 u 表示文件拥有者（user），g 表示拥有者所在群组（group），o 表示其他用户（other），a 表示全部用户（all，包含前面三种用户范围）；")])]),v._v(" "),t("li",[t("p",[v._v("操作部分：“+” 符号表示增加权限，“-” 符号表示取消权限，“=” 符号表示赋值权限；")])]),v._v(" "),t("li",[t("p",[v._v("权限部分：“r” 符号表示可读（read），“w” 表示可写（write），“x” 表示可执行权限（execute）；")])])]),v._v(" "),t("h2",{attrs:{id:"权限解析-数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限解析-数字"}},[v._v("#")]),v._v(" 权限解析 - 数字")]),v._v(" "),t("p",[v._v("即，1 表示可执行，2 表示可写，4 表示可读。每种类型数字相加所得到的值表示交叉部分的公共类型。")]),v._v(" "),t("p",[v._v("这样的话，使用三个数字便可以分别代表三种不同用户类型的权限修改结果。比如，修改所有用户的访问权限均为可读可写可执行（rwx）的话，这样使用即可：")]),v._v(" "),t("p",[v._v("chmod 777 startup.sh")]),v._v(" "),t("p",[v._v("三个数字从前到后分别表示 u、g、o 三种用户类型的访问权限，使用时按需修改。")]),v._v(" "),t("p",[v._v("补充一点，有时候需要递归修改目录文件及其子目录中的文件类型，可以使用 -R 选项。")])])}),[],!1,null,null,null);_.default=a.exports}}]);