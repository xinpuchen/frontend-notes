/**
 * 一个UTF8字符的长度可能是1到4个字节。其编码规则如下：
 * 
 * 对于1字节长的UTF-8字符，第一个bt是0，后面的bt都是它的unicode码；
 * 对于n字节长的UTF-8字符，前n个bits都是1，第n+1bit是0，接下来的n-1个字节的前两个bits都是10。
 * 
 * 例如：
 * Char.number range    | UTF-8 octet sequence
 * （hexadecimal)       |   (binary)
 * 0000 0000~0000 007F  | 0xxxxxxx
 * 0000 0080~0000 07FF  | 110xxxxx  10xxxxxx
 * 0000 0800~0000 FFFF  | 1110xxxx  10xxxxxx  10xxxxxx
 * 0001 0000~0010 FFFF  | 11110xxx  10xxxxxx  10xxxxxx 10xxxxxx
 * 给定一个整数数组表示的数据，判断其是否是合法的UTF-8编码。
 * 
 * 注意：每个整数只有最低8位用于存储数据。即：输入的每个整数代表一个byte
 */