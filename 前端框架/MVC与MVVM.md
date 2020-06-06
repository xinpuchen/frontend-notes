# MVC 与 MVVM

## MVC

- View 负责渲染用户界面，应该避免在 View 中涉及业务逻辑
- Controller 负责接收用户输入，根据用户输入调用 Model 逻辑，将产生的结果交给 View 部分，让 View 渲染出必要的输出
- Model 负责管理数据，大部分业务逻辑也应该放在 Model

**缺点：** 由于在实现的过程中，往往出现 View 与 Model 不经过 Controller 通信的现象，造成数据流混乱，难以维护和增加功能

## MVVM

组成部分 Model、View、ViewModel

建立了数据和视图之间的绑定，简化前端代码

- View：UI 界面
- ViewModel：它是 View 的抽象，负责 View 与 Model 之间信息转换，将 View 的 Command 传送到 Model；
- Model：数据访问层

？不适合 SEO？
