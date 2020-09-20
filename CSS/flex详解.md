## flex 详解

#### 容器的属性

- 首先添加： {display: flex;}
- flex-direction: row / row-reverse / column / column-reverse
- flex-wrap: nowrap / wrap / wrap-reverse
- flex-flow: row || nowrap / flex-direction || flex-wrap
- justify-content: flex-start / flex-end / center / space-between / space-around
- align-items: flex-start / flex-end / enter / baseline / stretch
- align-content: flex-start / flex-end / center / space-between / space-around / stretch

#### 项目的属性

- order: 定义项目的排列顺序，数值越小，排列越靠前，默认为 0。
- flex-grow: 定义项目的放大属性，默认为 0，即存在剩余空间也不放大。
- flex-shrink: 定义项目的缩小属性，默认为 1，即空间不足时缩小。
- flex-basis: 定义在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。
- flex: 是 flex-grow, flex-shrink 和 flex-basis 属性的简写，默认值为 0 1 auto。后两个属性可选，该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
- align-self: 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 的属性，默认值为 auto，表示继承父元素的 align-items 的属性，如果没有父元素，则等同于 stretch。
