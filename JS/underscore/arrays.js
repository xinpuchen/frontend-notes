const _ = require("./underscore");

// Arrays

/**
 * first && last
 * 顾名思义，这两个函数分别取第一个和最后一个元素
 */
const arr = [2, 4, 6, 8];
console.log(_.first(arr));
console.log(_.last(arr));

/**
 * flatten
 * flatten()接收一个Array，无论这个Array里面嵌套了多少个Array，flatten()最后都把它们变成一个一维数组
 */
console.log(_.flatten([1, [2], [3, [[4], [5]]]]));

/**
 * zip / unzip
 * zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。unzip()则是反过来
 * 例如，你有一个Array保存了名字，另一个Array保存了分数，现在，要把名字和分数给对上，用zip()轻松实现
 */
const names = ["Adam", "Lisa", "Bart"],
  scores = [85, 92, 59];
console.log(_.zip(names, scores));
const namesAndScores = [["Adam", 85], ["Lisa", 92], ["Bart", 59]];
console.log(..._.unzip(namesAndScores));

/**
 * object
 * 有时候你会想，与其用zip()，为啥不把名字和分数直接对应成Object呢
 */
console.log(_.object(names, scores));

/**
 * range
 * range()让你快速生成一个序列，不再需要用for循环实现了
 */
console.log(..._.range(10));
console.log(..._.range(1, 10));
console.log(..._.range(0, 30, 5));
console.log(..._.range(0, -10, -1));
