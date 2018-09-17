# 以下哪些正则表达式满足 regexp.test(abc) === true?

|  值   | 正则              |
| :---: | :---------------- |
| true  | /[defgh]\*/       |
| true  | /[ab]{2}[*defgh]/ |
| false | /...(?=.)/        |
| true  | /^abc$/           |
