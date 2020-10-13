# BFC 与 IFC

## BFC 是什么

**块格式化上下文（Block Formatting Context，BFC）** 是 Web 页面的可视化 CSS 渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

## 如何创建 BFC

- 根元素()
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）等等。

## BFC 的特性

### 1.同一个 BFC 下外边距会发生折叠

可以理解为一种规范，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

### 2.BFC 可以包含浮动的元素（清除浮动）

```html
<!-- 这时，浮动DIV脱离了父DIV -->
<div style="border: 1px;">
  <div style="float: left; width: 100px; height: 100px;"></div>
</div>
<!-- 触发BFC，让父元素包含浮动元素 -->
<div style="border: 1px;overflow: hidden;">
  <div style="float: left; width: 100px; height: 100px;"></div>
</div>
```

### 3.BFC 可以阻止元素被浮动元素覆盖

原理同上，被覆盖的元素会成为新的 BFC，不会被浮动元素覆盖，可用来实现两列布局

```html
<div
  class="gege"
  style="width: 100px;
  min-height: 600px;
  background:red;
  float: left;
  margin-right: 20px;"
>
  gege
</div>
<div
  class="didi"
  style="margin:20px;
  min-height: 600px;
  background: green;
  display: flow-root;"
>
  didi
</div>
```

## IFC

inline formatting context
