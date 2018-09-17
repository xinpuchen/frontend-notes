/**
 * 小明同学在参加一场考试，考试时间2个小时。试卷上一共有n道题目，小明要在规定时间内，完成一定数量的题目。
 * 考试中不限制试题作答顺序，对于 第i道 题目，小明有三种不同的策略可以选择:
 * 
 * (1)直接跳过这道题目，不花费时间，本题得0分。
 * (2)只做一部分题目，花费pi分钟的时间，本题可以得到ai分。
 * (3)做完整个题目，花费qi分钟的时间，本题可以得到bi分。
 * 
 * 小明想知道，他最多能得到多少分。
 * 
 * 输入
 * 第一行输入一个n数表示题目的数量。
 * 接下来n行，每行四个数 pi，ai，qi，bi。(1≤n≤100，1≤pi≤qi≤120，0≤ai≤bi≤1000 )。
 * 
 * 输出
 * 输出一个数，小明的最高得分。
 * 
 * 样例输入
 * 4
 * 20 20 100 60
 * 50 30 80 55
 * 100 60 110 88
 * 5 3 10 6
 * 样例输出
 * 94
 */

let num = 4,
		arr = [
				[
						20, 20, 100, 60
				],
				[
						50, 30, 80, 55
				],
				[
						100, 60, 110, 88
				],
				[5, 3, 10, 6]
		],
		array = [],
		arrFormat = (i) => {
				let e = arr[i]
				array[i] = [
						[
								0, 0
						],
						[
								e[0], e[1]
						],
						[e[2], e[3]]
				]

		},
		findRount = (t = 0, time = 120, score = 0) => {
				if (t >= num) 
						return score;
				const element = array[t],
						scoreArr = [];
				for (let y = 0; y < 3; y++) {
						let tempTime = time - element[y][0],
								tempScore = score + element[y][1];
						if (tempTime >= 0) {
								scoreArr[y] = findRount(t + 1, tempTime, tempScore)
						} else {
								scoreArr[y] = score;
						}
				}
				return Math.max(...scoreArr);
		}

		for (let index = 0; index < num; index++) {
				console.log(index, num, arr[index]);
				arrFormat(index);
		}