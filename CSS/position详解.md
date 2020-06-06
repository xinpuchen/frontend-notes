# CSS 中 position 详解

## 取值与描述

| 值       | 描述                                                                                  |
| -------- | ------------------------------------------------------------------------------------- |
| inherit  | 继承父属性的 position 值                                                              |
| static   | 默认值。元素出现在正常的流中，忽略 top, left, bottom, right 和 z-index 声明           |
| fixed    | 生成固定定位的元素，相对于 window 进行定位，left 等声明有效                           |
| absolute | 生成绝对定位的元素，相对于不是 static 的第一个父元素进行定位，如 top，left 等声明有效 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位，left 等声明有效，对 table 系列元素无效  |
| sticky   | 新特性，粘性效果，页面滑动到“临界点”之前表现为 relative, 到达“临界点”时表现为 fixed   |
