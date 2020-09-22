# 基于 virtual dom 的 diff 算法

在如 React、Vue 等的现代前端框架中，virtual dom(后面简称 v-dom)扮演着一个举足轻重的角色，而其之精粹————diff 算法，便是今天的主人公

在 HTML 中，所有的元素在其上表现为一个 DOM 结点，而在 JS 对其进行操作的时候，会产生大量的牺牲，影响网页性能，所以，我们要在完成需求的前提下，尽量减少对 DOM 节点的操作次数，这是前端优化方面的一个关键要素，而 v-dom 的 diff 算法，则是一名大救星

在面试当中，面试官也会在考察框架知识时，v-dom 的 diff 算法作为框架的经典元素之一，也不可或缺的会考察与之相关的一些知识，看看面试者对框架的使用和理解的深浅程度

所以说，无论从前端优化还是前端面试的角度来说，v-dom 与其 diff 算法，都是前端领域十分重要的一个知识点，那么来看看，他们到底是什么

## 什么是 v-dom

由于对原生 DOM 的操作十分耗时，所以 facebook 的大佬们想到，使用原生的 JS 对象，来存储实际在 HTML 中保存的 DOM 对象，这样，当我们需要操作原生 DOM 的时候，直接操作 JS 对象，并将其与操作前的 JS 对象进行比对(diff 算法)，将不同的部分进行应用,就可以最小化对前端资源的消耗，达到优化的目的了

我们都知道，DOM 结点在 HTML 中是以树的形式存储的，v-dom 中最为核心的算法，就是比较两棵树的 diff 算法了，那么我们来看看，如果用经典二叉树中的 diff 算法，如何来做，以及它的优化版本

## 二叉树的 diff 算法

传统的 diff 算法的思路如下，将新旧两棵树的结点进行一一对比，然后判断结点的更新状态，是删除，更新还是增加，时间复杂度为 o(n^2)

## 时间复杂度是 o(n^2)还是 o(n^3)？

如果只是单纯的进行结点比对的话，时间复杂度应该为 o(n^2)，但是网上流传的传统 diff 算法，复杂度为 o(n^3)，我猜测是在比对基础上，寻找最优的移动位置

那么显而易见，无论是 o(n^2)还是 o(n^3)，对于交互性极强，功能复杂的一些前端页面来说，这样高昂的时间代价是不可接受的，那么，facebook 的大佬们，他们想到了啥

时间复杂度为 o(n)，没错，大佬们的操作，就是这么秀。

当然，世界是平衡的，有舍才有得，基于 v-dom 的 diff 算法这么优秀，当然是付出了一些可以接受的代价，并且随之而来的是，换取的更大的优化空间

## react diff 详解

reconciliation 调和，是 react 中最为核心的模块，它指的是将 virtual dom 树转换成真实 dom 树所耗费的最少操作。他需要进行 diff->patch 这两个过程。diff 是计算 virtual dom 树转换成另一棵树进行的最少操作，而 patch 是将差异更新到真实的 dom 节点

### diff

- tree diff 只对树进行同层对比，不去比较跨层的节点
- component diff 因为 react 通过组件化开发，在对比组件差异上也采用上述算法。即，同一层只要出现不是同一类型的组件，就替换该组件的所有子节点。对于同一类型的组件，则通过 shouldComponentUpdate 去判断是否需要通过 diff 进行分析。shouldComponentUpdate 默认为 true
  1. 如果组件类型相同，则比较同组件下的元素，可通过 shouldComponentUpdate()判断
  2. 如果组件类型不同，则删除原有结点，新增整个组件下的子节点
- element diff 同一层的结点，通过 Key 区分，当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除），同一层的结点，为了防止出现，移动一个元素的相对位置，引发所有元素重新插入的低效情况，允许开发者对同一层级的同组子节点，添加唯一 key 进行区分

### patch

- 如果出现旧节点集合中有与当前指针所指新节点 A 相同的节点，则通过对比节点位置进行判断操作，对比 mountIndex 和 lastIndex：
- 如果 mountIndex >= lastIndex：不做移动操作。并把 lastIndex 更新为 mountIndex。
- 如果 mountIndex < lastIndex：移动。
- 如果新节点集合中有旧节点集合中不存在的节点，添加，更新 lastIndex。
- 最后遍历旧节点集合，如果存在新节点集合上不存在的点，则将其删除。
- 至于为什么要比较 mountIndex 和 lastIndex，是因为要保证当前要进行移动操作的节点一定要比 lastIndex 小，一是为了节约性能，二是为了使节点排序更有条理，如果不进行比较，看见有相同的节点就移动，整个队列就乱了套了

## vue diff 详解

### patchVnode

- 找到对应的真实 dom，称为 el
- 判断 Vnode 和 oldVnode 是否指向同一个对象，如果是，那么直接 return
- 如果他们都有文本节点并且不相等，那么将 el 的文本节点设置为 Vnode 的文本节点。
- 如果 oldVnode 有子节点而 Vnode 没有，则删除 el 的子节点
- 如果 oldVnode 没有子节点而 Vnode 有，则将 Vnode 的子节点真实化之后添加到 el
- 如果两者都有子节点，则执行 updateChildren 函数比较子节点，这一步很重要

### updateChildren

- 将 Vnode 的子节点 Vch 和 oldVnode 的子节点 oldCh 提取出来
- oldCh 和 vCh 各有两个头尾的变量 StartIdx 和 EndIdx，它们的 2 个变量相互比较，一共有 4 种比较方式
- 当其中两个能匹配上，那么真实 dom 中的相应节点会移到 Vnode 相应的位置
  1.  如果是 oldS 和 E 匹配上了，那么真实 dom 中的第一个节点会移到最后
  2.  如果是 oldE 和 S 匹配上了，那么真实 dom 中的最后一个节点会移到最前，匹配上的两个指针向中间移动
- 在 4 种比较都没匹配的情况下
  1.  如果新旧子节点都存在 key，那么会根据 oldChild 的 key 生成一张 hash 表，用 S 的 key 与 hash 表做匹配，匹配成功就判断 S 和匹配节点是否为 sameNode，如果是，就在真实 dom 中将匹配成功的节点移到最前面，否则，将 S 生成对应的节点插入到 dom 中对应的 oldS 位置，S 指针向中间移动，被匹配 old 中的节点置为 null
  2.  如果没有 key,则直接将 S 生成新的节点插入真实 DOM
- 在比较的过程中，变量会往中间靠，一旦 StartIdx > EndIdx 表明 oldCh 和 vCh 至少有一个已经遍历完了，就会结束比较
- 匹配过程的结束条件有两个
  1.  oldS > oldE 表示 oldCh 先遍历完，那么就将多余的 vCh 根据 index 添加到 dom 中去
  2.  S > E 表示 vCh 先遍历完，那么就在真实 dom 中将区间为[oldS, oldE]的多余节点删掉

## 结语

v-dom 在提出后，有前端方面的优化注入了新的活力，作为前端学习者之一，理解，融会贯通，开发新的思路，是永远不会结束的学习之旅，stay hungry, stay foolish

### 参考文章

> [react diff 原理](http://imweb.io/topic/579e33d693d9938132cc8d94)

> [详解 vue 的 diff 算法](https://juejin.im/post/6844903607913938951#heading-1)
