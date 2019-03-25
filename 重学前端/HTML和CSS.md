# HTML 和 CSS 整理

![index](HTML和CSS.png)

## HTML

HTML 可以按照功能和语言来划分它的知识，HTML 的知识主要由标签来承担，所以我们首先会把标签做一些分类。诸如 title、meta、style、link、base 这些，它们用来描述文档的一些基本信息。还有一类是诸如 section、nav 的标签，它们在视觉表现上跟 div 没有区别，但是各有各的适用场景，我们把它们称作是语义类标签。另外一类是 img、video、audio 之类的替换型媒体类标签，用来引入外部内容，平常开发中也很常用。再有就是表单类的，比如 input、button。

### 元素

#### 文档元信息

> 通常是出现在 head 标签中的元素，包括了描述文档自身的一些信息

#### 语义相关内容

> 拓展了纯文本，表达文章结构，不同语言要素的标签

#### 链接

> 提供到文档内核文档外的链接

#### 替换型元素

> 引用声音、图片、视频等外部元素替换自身的一类标签

#### 表单

> 用于填写和提交信息的一类标签

#### 表格

> 表头、表尾、单元格等表格的结构

#### 总集

### 语言

#### 实体

#### 命名空间

### 补充标准

## CSS

同样也是按照语言和功能来划分，语言部分从大到小有各种语法结构，比如@rule、选择器、单位等等；功能的部分大致可以分为布局、绘制和交互类。

在布局类我们常用的布局有: 正常流和弹性布局；绘制类则分成图形相关和文字相关的绘制；最后则是动画和其他的交互。

### 语法

#### @rule 规则

- [@charset](https://www.w3.org/TR/css-syntax-3/) 用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。

```css
@charset "utf-8";
```

- [@import](https://www.w3.org/TR/css-cascade-4/) 用于引入一个 CSS 文件，除了 @charset 规则不会被引入，@import 可以引入另一个文件的全部内容。(支持 supports 和 media query 形式)

```css
  @import "mystyle.css";
  @import url("mystyle.css");
---
  @import [ <url> | <string> ]
          [ supports( [ <supports-condition> | <declaration> ] ) ]?
          <media-query-list>? ;
```

- [@media](https://www.w3.org/TR/css3-conditional/) media query 使用的规则，它能够对设备的类型进行一些判断。在 media 的区块内，是普通规则列表。

```css
@media print {
  body {
    font-size: 10pt;
  }
}
```

- [@page](https://www.w3.org/TR/css-page-3/) 用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

```css
@page {
  size: 8.5in 11in;
  margin: 10%;

  @top-left {
    content: 'Hamlet';
  }
  @top-right {
    content: 'Page ' counter(page);
  }
}
```

- [@counter-style](https://www.w3.org/TR/css-counter-styles-3) 产生一种数据，用于定义列表项的表现。

```css
@counter-style triangle {
  system: cyclic;
  symbols: ‣;
  suffix: ' ';
}
```

- [@keyframes](https://www.w3.org/TR/css-animations-1/) 产生一种数据，用于定义动画关键帧。

```css
@keyframes diagonal-slide {
  from {
    left: 0;
    top: 0;
  }
  to {
    left: 100px;
    top: 100px;
  }
}
```

- [@fontface](https://www.w3.org/TR/css-fonts-3/) 用于定义一种字体，icon font 技术就是利用这个特性来实现的。

```css
@font-face {
  font-family: Gentium;
  src: url(http://example.com/fonts/Gentium.woff);
}

p {
  font-family: Gentium, serif;
}
```

- [@supports](https://www.w3.org/TR/css3-conditional/) 检查环境的特性，它与 media 比较类似。
- [@namespace](https://www.w3.org/TR/css-namespaces-3/) 用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间。
- @viewport 用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被 html 的 meta 代替。
- 其他 (不太推荐)
  - @color-profile 是 SVG1.0 引入的 CSS 特性，但是实现状况不怎么好。
  - @document 还没讨论清楚，被推迟到了 CSS4 中。
  - @font-feature-values 。todo 查一下。

#### 普通规则

> 关键词索引: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index

##### [选择器 complex-selector](https://www.w3.org/TR/selectors-4/)

![css-selector-gamma](CSS选择器语法结构分析示例图.png)

- 选择符 combinator
  - `空格`: 后代选择器
  - `>`: 子元素选择器
  - `+`: 相邻兄弟选择器
  - `~`: 后续兄弟选择器
  - `||`: [列组选择器 Column combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator) (实验内容)
- 复合选择器 compound-selector
  - 类型选择器 type-selector
  - 子选择器 subclass-selector
    - id
    - class
    - 属性 attribute
    - 伪类 pseudo-class
  - 伪元素 pseudo-element

##### 声明: 属性和值

> 声明部分是一个由“属性: 值”组成的序列。

- **属性** 是由中划线、下划线、字母等组成的标识符，CSS 还支持使用反斜杠转义。我们需要注意的是: 属性不允许使用连续的两个中划线开头，这样的属性会被认为是 CSS 变量。
  > 在[CSS Variables 标准](https://www.w3.org/TR/css-variables/)中，以双中划线开头的属性被当作变量，与之配合的则是 var 函数:

```css
:root {
  --main-color: #06c;
  --accent-color: #006;
}
/* The rest of the CSS file */
#foo h1 {
  color: var(--main-color);
}
```

- **值** 的部分，主要[在标准 CSS Values and Unit](https://www.w3.org/TR/css-values-4/)，根据每个 CSS 属性可以取到不同的值，这里的值可能是字符串、标识符。

  > CSS 属性值可能是以下类型。

  - **CSS 范围的关键字**: initial，unset，inherit，任何属性都可以的关键字。
  - **字符串**: 比如 content 属性。
  - **URL**: 使用 url() 函数的 URL 值。
  - **整数 / 实数**: 比如 flex 属性。
  - **维度**: 单位的整数 / 实数，比如 width 属性。
  - **百分比**: 大部分维度都支持。
  - **颜色**: 比如 background-color 属性。
  - **图片**: 比如 background-image 属性。
  - **2D 位置**: 比如 background-position 属性。
  - **函数**: 来自函数的值，比如 transform 属性。
    > CSS 支持一批特定的计算型函数:
  - **calc()** 函数是基本的表达式计算，它支持加减乘除四则运算。在针对维度进行计算时，calc() 函数允许不同单位混合运算，这非常的有用。
  - **max()** 表示取两数中较大的一个
  - **min()** 表示取两数之中较小的一个
  - **clamp()** 给一个值限定一个范围，超出范围外则使用范围的最大或者最小值
  - **toggle()** ([不建议使用，在任何浏览器中都不生效](<http://caibaojian.com/css3/values/functional/toggle().htm>))函数在规则选中多于一个元素时生效，它会在几个值之间来回切换，比如我们要让一个列表项的样式圆点和方点间隔出现，可以使用下面代码:

  ```css
  ul {
    list-style-type: toggle(circle, square);
  }
  ```

  - **attr()** 函数允许 CSS 接受属性值的控制。

### 功能

#### 布局

##### 正常流

##### 弹性布局

#### 绘制

##### 颜色和形状

##### 文字相关

#### 交互

##### 动画

##### 其他交互
