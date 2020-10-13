# Tree 文件结构命令

## 前言

很多时候我们都要引用目录结构，例如写文档的时候，如果手动在制作的话，非常浪费时间，这不是我们程序员的明智之举，于是有了 tree 这个工具。tree 这个工具可以很轻松就生成下面这中目录结构。非✔️不可。

## 安装
`brew install tree`

## 常用命令
`tree` 的命令有很多，但是我们只需掌握常用的那几个即可。

- 生成所有文件结构
`tree`
`tree -a`

- 只显示目录
`tree -d`

- 显示目录层级
`tree -L <层级数>`

- 过滤文件夹
`tree -I <文件夹名>`