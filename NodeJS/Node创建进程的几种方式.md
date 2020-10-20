# Node 创建进程的几种方式

## 关于 Node 的进程与线程

- node 遵循的是单线程单进程的模式，node 的单线程是指 js 的引擎只有一个实例，且在主线程中执行
- node 以事件驱动的方式处理 IO 等异步操作
- node 的单线程模式，只维持一个主线程，大大减少了线程间切换的开销
- node 的单线程使得在主线程不能进行 CPU 密集型操作，否则会阻塞主线程
- 对于 CPU 密集型操作，在 node 中通过 child_process 可以创建独立的子进程，父子进程通过 IPC 通信，子进程可以是外部应用也可以是 node 子程序，子进程执行后可以将结果返回给父进程
- 此外，node 的单线程，以单一进程运行，因此无法利用多核 CPU 以及其他资源，为了调度多核 CPU 等资源，node 还提供了 cluster 模块，利用多核 CPU 的资源，使得可以通过一串 node 子进程去处理负载任务，同时保证一定的负载均衡型。

## node 中的单线程和单进程

提到 node，我们就可以立刻想到单线程、异步 IO、事件驱动等字眼。首先要明确的是 node 真的是单线程的吗？如果是单线程的，那么异步 IO，以及定时事件（setTimeout、setInterval 等）又是在哪里被执行的？

严格来说，node 并不是单线程的，node 中存在着多种线程，包括：

- js 引擎执行的线程
- 定时器线程(setTimeout, setInterval)
- 异步 http 线程(ajax)

我们平时所说的单线程是指 node 中只有一个 js 引擎在主线程上运行。其他异步 IO 和事件驱动相关的线程通过 `libuv` 来实现内部的线程池和线程调度。

`libuv` 中存在了一个 Event Loop，通过 Event Loop 来切换实现类似于多线程的效果，简单的来讲 Event Loop 就是维持一个执行栈和一个事件队列，当前执行栈中如果发现异步 IO 以及定时器等函数，就会把这些异步回调函数放入到事件队列中，当前执行栈执行完成后，从事件队列中，按照一定的顺序执行事件队列中的异步回调函数。

## node 中的 child_process 模块

node 是单进程的，必然存在一个问题，就是无法充分利用 cpu 等资源。node 提供了 child_process 模块来实现子进程，从而实现一个广义上的多进程的模式。通过 child_process 模块，可以实现 1 个主进程，多个子进程的模式，主进程称为 master 进程，子进程又称工作进程。在子进程中不仅可以调用其他 node 程序，也可以执行非 node 程序以及 shell 命令等等，执行完子进程后，以流或者回调的形式返回

### child_process 模块提供的 API

child_process 提供了 4 个方法，用于新建子进程，这 4 个方法分别为 spawn、execFile、exec 和 fork。所有的方法都是异步的

- spawn ： 子进程中执行的是非 node 程序，提供一组参数后，执行的结果以流的形式返回
- execFile：子进程中执行的是非 node 程序，提供一组参数后，执行的结果以回调的形式返回
- exec：子进程执行的是非 node 程序，传入一串 shell 命令，执行后结果以回调的形式返回
- fork：子进程执行的是 node 程序，提供一组参数后，执行的结果以流的形式返回，与 spawn 不同，fork 生成的子进程只能执行 node 应用

exec、execFile、spawn 和 fork 执行的子进程都是默认异步的，子进程的运行不会阻塞主进程。除此之外，child_process 模块同样也提供了 execFileSync、spawnSync 和 execSync 来实现同步的方式执行子进程

## node 中的 cluster 模块

cluster 意为集成，集成了两个方面：

1. 集成了 child_process.fork 方法创建 node 子进程的方式
2. 集成了根据多核 CPU 创建子进程后，自动控制负载均衡的方式

我们将 master 称为主进程，而 worker 进程称为工作进程，利用 cluster 模块，使用 node 封装好的 API、IPC 通道和调度机，可以非常简单的创建包括一个 master 进程下 HTTP 代理服务器 + 多个 worker 进程多个 HTTP 应用服务器的架构
