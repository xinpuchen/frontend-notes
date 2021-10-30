module.exports = {
  title: 'Frontend-notes',
  description: '记录知识点滴，构建完整知识体系',
  base: '/frontend-notes/',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' },
    ],
  ],
  themeConfig: {
    sidebarDepth: 0,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '算法练习', link: 'https://xinpuchen.github.io/awesome-coding/' },
      { text: '博客', link: 'https://xinpuchen.github.io' },
      { text: 'github', link: 'https://github.com/xinpuchen/frontend-notes' },
    ],
    sidebar: [
      {
        title: 'HTML',
        children: [
          'HTML/标准模式与混杂模式',
          'HTML/HTML5新标准',
          'HTML/HTML5与HTML4的区别',
          'HTML/meta标签的作用',
          'HTML/行内元素与块级元素',
          'HTML/src和href的区别',
          'HTML/script标签defer与async',
          'HTML/DOM操作耗时的原因及其优化',
        ],
      },
      {
        title: 'CSS',
        children: [
          'CSS/盒模型',
          'CSS/BFC与IFC',
          'CSS/长度单位小结',
          'CSS/伪类-伪元素',
          'CSS/position详解',
          'CSS/浮动清除方法',
          'CSS/link与@import的区别',
          'CSS/隐藏页面元素的五种方法',
          'CSS/优雅降级与渐进增强',
          'CSS/div水平垂直居中方法',
          'CSS/保持宽高比例',
          'CSS/三栏布局-中间自适应',
          'CSS/flex详解',
          'CSS/CSS3新标准',
          'CSS/transition和animate的区别',
          'CSS/translate-transform-transition的区别',
          'CSS/媒体查询',
          'CSS/移动端屏幕尺寸适配方案',
          'CSS/小知识点',
          {
            title: '特殊实例',
            children: [
              'CSS/特殊实例/斑马表格',
              'CSS/特殊实例/圆环进度条',
              'CSS/特殊实例/品字布局',
              'CSS/特殊实例/圣杯布局',
              'CSS/特殊实例/transition实现轮播图',
            ],
          },
        ],
      },
      {
        title: 'JavaScript',
        children: [
          {
            title: '执行上下文',
            children: [
              'JavaScript/执行上下文/作用域',
              'JavaScript/执行上下文/执行上下文栈',
              'JavaScript/执行上下文/变量对象',
              'JavaScript/执行上下文/作用域链',
              'JavaScript/执行上下文/从ECMAScript规范解读this',
            ],
          },
          'JavaScript/JS原型链',
          'JavaScript/Ajax详解',
          'JavaScript/常见字符串处理',
          'JavaScript/数组的原生方法',
          'JavaScript/正则对象原生方法',
          'JavaScript/遍历的几种方式',
          'JavaScript/new的作用',
          'JavaScript/typeof详解',
          'JavaScript/Object.defineProperty详解',
          'JavaScript/浏览器中的事件循环机制',
          'JavaScript/内存泄漏',
          'JavaScript/JS深浅拷贝',
          'JavaScript/ES6新语法',
          'JavaScript/ES7装饰器',
          'JavaScript/箭头函数',
          'JavaScript/JS严格模式',
          'JavaScript/JS实现继承',
          'JavaScript/JS模块化规范',
          'JavaScript/JS链式调用',
          'JavaScript/监听数组变化',
          'JavaScript/事件传递机制',
          'JavaScript/事件委托',
          'JavaScript/JS实现发布订阅',
          'JavaScript/小知识点',
          {
            title: '特殊实例',
            children: [
              'JavaScript/特殊实例/2D平扫全景的H5实现',
              'JavaScript/特殊实例/JS实现持续动画',
              'JavaScript/特殊实例/JS实现计时器',
              'JavaScript/特殊实例/insertAfter方法的实现',
              'JavaScript/特殊实例/拖拽效果的实现',
              'JavaScript/特殊实例/模拟实现右键点击',
              'JavaScript/特殊实例/纠正js倒计时不准',
              'JavaScript/特殊实例/实现LazyMan',
              'JavaScript/特殊实例/实现表格排序',
              'JavaScript/特殊实例/自动搜索完成控件',
              'JavaScript/特殊实例/文件上传',
              'JavaScript/特殊实例/模拟url下载文件和添加鉴权',
              'JavaScript/特殊实例/复制文本实现',
            ],
          },
        ],
      },
      {
        title: '网络协议',
        children: [
          '网络协议/互联网运行原理',
          {
            title: 'HTTP',
            children: [
              '网络协议/HTTP/HTTP版本',
              '网络协议/HTTP/HTTP请求方法',
              '网络协议/HTTP/HTTP状态码',
            ],
          },
          {
            title: 'TCP',
            children: [
              '网络协议/TCP/TCP与UDP',
              '网络协议/TCP/TCP三次握手四次挥手',
              '网络协议/TCP/TCP拥塞控制',
            ]
          },
        ],
      },
      {
        title: '浏览器',
        children: [
          '浏览器/主流浏览器及内核',
          '浏览器/关于浏览器存储的讨论与实践',
          '浏览器/前端渲染VS后端渲染',
          '浏览器/浏览器缓存',
          '浏览器/浏览器页面渲染过程',
          '浏览器/重绘和回流',
          '浏览器/输入URL到页面加载全过程',
          '浏览器/跨域总结',
        ],
      },
      {
        title: '前端框架',
        children: [
          '前端框架/前端框架演进',
          '前端框架/MVC与MVVM',
          '前端框架/技术选型',
          '前端框架/数据绑定',
          '前端框架/virtual-dom解析',
          '前端框架/diff算法',
          '前端框架/前端路由与后端路由',
          '前端框架/Vue与React的区别',
          {
            title: 'React',
            children: [
              '前端框架/React/React生命周期',
              '前端框架/React/React-setState详解',
              '前端框架/React/Ref操作DOM',
              '前端框架/React/React-高阶组件',
              '前端框架/React/React-Fiber详解',
              '前端框架/React/React-Hooks详解',
              '前端框架/React/React常见问题',
              '前端框架/React/React-Router-History详解',
              '前端框架/React/Flux-Redux演变历程',
              '前端框架/React/Redux中间件',
            ],
          },
          {
            title: 'Vue',
            children: [
              '前端框架/Vue/Vue相对原生JS的优点',
              '前端框架/Vue/Vue的生命周期',
              '前端框架/Vue/Vue组件间通信',
              '前端框架/Vue/Vue中的数据劫持',
              '前端框架/Vue/双向绑定',
              '前端框架/Vue/Vue-router原理',
              '前端框架/Vue/Vue小知识点',
              '前端框架/Vue/Vuex简析',
            ],
          },
        ],
      },
      {
        title: '前端工程化',
        children: [
          {
            title: '构建',
            children: [
              '前端工程化/构建/前端构建工具选型',
              '前端工程化/构建/前端构建工具优缺点',
              '前端工程化/构建/webpack入门',
              '前端工程化/构建/webpack的loader和plugin解析',
              '前端工程化/构建/构建输出格式',
              '前端工程化/构建/tree-sharking详解',
              '前端工程化/构建/AST遍历思路',
            ],
          },
          {
            title: '缓存',
            children: [
              '前端工程化/缓存/Redis缓存常见问题',
              '前端工程化/缓存/CDN原理'
            ],
          },
          {
            title: '测试',
            children: ['前端工程化/测试/测试金字塔'],
          },
          {
            title: '监控',
            children: ['前端工程化/监控/错误监控原理'],
          },
        ],
      },
      {
        title: '前端安全',
        children: [
          '前端安全/能不能说说XSS攻击',
          '前端安全/能不能说说CSRF攻击',
          '前端安全/HTTPS为什么让数据传输更安全',
        ],
      },
      {
        title: '性能优化',
        children: [
          '性能优化/前端性能优化',
          '性能优化/白屏问题和FOUC',
          '性能优化/精准时间获取',
        ],
      },
      {
        title: 'NodeJS',
        children: [
          'NodeJS/Koa中间件原理',
          'NodeJS/Node创建进程的几种方式',
          'NodeJS/Node事件循环',
        ]
      }
    ],
  },
};
