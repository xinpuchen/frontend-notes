# Vue / React 的区别

## 相似点

- 都为视图层框架，其他的功能如路由、状态管理等是框架分离的组件
- 都是用了 virtual dom，支持 ssr
- 都鼓励组件化，提高组件复用率
- 都有’props’的概念，props 在组件中是一个特殊的属性，允许父组件往子组件传送数据

## 不同点

### React

- 单项数据流
- React 推广了 Virtual DOM，并创造了新的语法——JSX，JSX 允许开发者在 JavaScript 中书写 HTML
- props 对于子组件来说是必须的，因为它依赖一个“单一数据源”作为它的“状态”
- React 与 Vue 最大的不同是模板的编写
- 在 React 中你需要使用 setState()方法去更新状态
- React 一样由如 Facebook 这类大公司维护

### Vue

- 数据双向绑定，表单支持双向绑定开发更方便
- Vue 使用模板系统而不是 JSX，使其对现有应用的升级更加容易,这是因为模板用的就是普通的 HTML，通过 Vue 来整合现有的系统是比较容易的，不需要整体重构
- 在 Vue 中，数据由 data 属性在 Vue 对象中进行管理

### 区别

- 改变数据方式不同，setState 有使用坑
- props Vue 可变，React 不可变
- 判断是否需要更新 React 可以通过钩子函数判断，Vue 使用依赖追踪，修改了什么才渲染什么
- React 16 以后 有些钩子函数会执行多次
- React 需要使用 JSX，需要 Babel 编译。Vue 虽然可以使用模板，但是也可以通过直接编写 render 函数不需要编译就能运行。
- 生态 React 相对较好
