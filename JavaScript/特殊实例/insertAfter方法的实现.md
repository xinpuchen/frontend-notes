# insertAfter 方法的实现

## insertAfter(newnode,existingnode)方法的实现

- DOM 提供了一个方法，叫做 insertBefore(),其作用是在已有节点之前插入新的子节点。遗憾的是，DOM 并没有提供一个 insertAfter()的方法—即在一个节点之后插入一个节点。

## node.insertBefore(newnode,existingnode)

| 参数         | 类型      | 描述                               |
| ------------ | --------- | ---------------------------------- |
| newnode      | Node 对象 | 必选。需要插入的节点对象。         |
| existingnode | Node 对象 | 必选。在其之前插入新节点的子节点。 |

```js
function insertAfter(insert_element, target_element) {
  var parent = target_element.parentNode;
  //最后一个子节点 lastElementChild兼容其他浏览器,  lastChild兼容ie678;
  var last_element = parent.lastElementChild || parent.lastChild;
  var target_sibling =
    target_element.nextElementSibling || target_element.nextSibling;
  if (last_element == target_element) {
    parent.appendChild(insert_element);
  } else {
    parent.insertBefore(insert_element, target_sibling);
  }
}
```

## Hint：

- 函数有两个参数，newElement,targetElement。分别是将被插入的新元素，和目标元素
- 我们将目标元素的父元素(parentNode)保存在 变量 parent 中
- 如果目标元素是父元素(parentNode)的最后一个子元素，
- 就用 appendChild 方法把新元素追加到 parent 元素上，这样新元素就恰好插入到 目标元素之后
- 如果目标元素不是父元素(parentNode)的最后一个子元素，用 insertBefore 方法把新元素插入到目标元素的下一个兄弟元素(targetElement.nextSibling)之前。
