# Vim

## .vimrc 配置

- set nocompatible " 关闭 vi 兼容模式 
- syntax on " 自动语法高亮 
- colorscheme default " 设定配色方案 
- set number " 显示行号 
- set cursorline " 突出显示当前行 
- set ruler " 打开状态栏标尺 
- set shiftwidth=4 " 设定 << 和 >> 命令移动时的宽度为 4 
- set softtabstop=4 " 使得按退格键时可以一次删掉 4 个空格 
- set tabstop=4 " 设定 tab 长度为 4 
- set nobackup " 覆盖文件时不备份 
- set autochdir " 自动切换当前目录为当前文件所在的目录 
- filetype plugin indent on " 开启插件 
- set backupcopy=yes " 设置备份时的行为为覆盖 
- set ignorecase smartcase " 搜索时忽略大小写，但在有一个或以上大写字母时仍保持对大小写敏感 
- set nowrapscan " 禁止在搜索到文件两端时重新搜索 
- set incsearch " 输入搜索内容时就显示搜索结果 
- set hlsearch " 搜索时高亮显示被找到的文本 
- set noerrorbells " 关闭错误信息响铃 
- set novisualbell " 关闭使用可视响铃代替呼叫 
- set t_vb= " 置空错误铃声的终端代码 
- " set showmatch " 插入括号时，短暂地跳转到匹配的对应括号 
- " set matchtime=2 " 短暂跳转到匹配括号的时间 
- set magic " 设置魔术 
- set hidden " 允许在有未保存的修改时切换缓冲区，此时的修改由 vim 负责- 保存 
- set guioptions-=T " 隐藏工具栏 
- set guioptions-=m " 隐藏菜单栏 
- set smartindent " 开启新行时使用智能自动缩进 
- set backspace=indent,eol,start 
- " 不设定在插入状态无法用退格键和 Delete 键删除回车符 
- set cmdheight=1 " 设定命令行的行数为 1 
- set laststatus=2 " 显示状态栏 (默认值为 1, 无法显示状态栏) 
- set statusline=\ %<%F[%1*%M%*%n%R%H]%=\ %y\ %0(%{&- fileformat}\ %{&encoding}\ %c:%l/%L%)\ 
- " 设置在状态行显示的信息 
- set foldenable " 开始折叠 
- set foldmethod=syntax " 设置语法折叠 
- set foldcolumn=0 " 设置折叠区域的宽度
- set history=1000 " 设置缓存条数
- set nonumber " 设置行数
- set showcmd " 输入的命令显示出来，看的清楚些
- set wildmenu " 使回格键（backspace）正常处理indent, eol, start等
- set scrolloff=5 " 为C程序提供自动缩进
- set lbr "
- set autoindent " autoindent
- set expandtab " 不要用空格代替制表符


## 光标移动

| h | l | j | k | ^/0 | & |
| -- | -- | -- | -- | -- | -- |
| 左移 | 右移 | 下移 | 上移 | 移动到行首/包含缩紧空格 | 移动到行尾 |

## 单词和字符串移动

| w/W | b/B | e/E | ge |
| -- | -- | -- | -- |
| 正向移动到下一个单词开头 | 反向移动 | 正向移动下一个单词结尾 | 反向 |

## 缩进

| >> / :> | m,n> / :m>(n-m+1) | m>n 等价于命令： m,m+n-1> |
| ----- | ----- | ----- |
| 右缩进 | m 到 n 行缩进 | m 行开始共 n 行缩进一次 |

## 删除、复制与粘贴 - 基本操作

| 按键操作 | 定义 |
| ------ | ---- |
| d = delete = cut | 剪切 |
| y = yank 约等于 copy | 类似于复制 |
| p/P = put = 约等于 paste | 粘贴到光标后/光标前 |
| u = undo | 撤销之前操作 |
| ctrl-r = redo | 重做/恢复之前的操作 |
| yw | 复制当前光标单词 |
| y2w | 复制正向两个单词 |
| p/P = put 约等于 paste | 粘贴到光标后/光标前 |
| yy 类似于 dd | 复制当前光标整行 |


## 组合删除

| 按键操作 | 定义 |
| ------ | ---- |
| x/X | 删除光标下/前单个单词 |
| dw（d=delete w=word）| 删除一个单词（必须在词首）|
| d{hjkl} | 删除到上下左右一个操作前的字符 |
| d$ = D | 删除光标到行尾的字符 |
| d^ | 删除光标到行首的字符 |

## 组合删除

| 按键操作 | 定义 |
| ------ | ---- |
| dd | 删除当前整行 |
| {n}dd | 删除当前整行 |
| 5dw | 删除正向单词五次 |
| 3w | 正向移动单词三次 |
| D3w | 正向删除3w动作 |
| 2d3w | 正向删除3w动作两次 |
