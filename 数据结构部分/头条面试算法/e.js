
const M = readline();
let arr =[];
for(let i=0; i<M; i++){
    arr[i] = readline().split(' ');
}
const search = (x, y, array, m = M) => {
    if (array[x][y]) {
        array[x][y] = 0;
        if (x + 1 < m && array[x + 1][y]) {
            search(x + 1, y, array);
        }
        if (x - 1 >= 0 && array[x - 1][y]) {
            search(x - 1, y, array);
        }
        if (y + 1 < m && array[x][y + 1]) {
            search(x, y + 1, array);
        }
        if (y - 1 >= 0 && array[x][y - 1]) {
            search(x, y - 1, array);
        }
        return 1;
    }
    return 0;
};
const main = (ARRAY) => {
    let array = ARRAY.map(e => e.map(e => e)),
        num = 0;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length; y++) {
            if (array[x][y]) {
                num += search(x, y, array);
            }
        }
    }
    return num;
};

print(main(arr));

const M = readline();
let arr =[];
for(let i=0; i<M; i++){
    arr[i] = readline().split(' ');
}
const search = (x, y, array, m = M) => {
    if (array[x][y]) {
        array[x][y] = 0;
        if (x + 1 < m && array[x + 1][y]) {
            search(x + 1, y, array);
        }
        if (x - 1 >= 0 && array[x - 1][y]) {
            search(x - 1, y, array);
        }
        if (y + 1 < m && array[x][y + 1]) {
            search(x, y + 1, array);
        }
        if (y - 1 >= 0 && array[x][y - 1]) {
            search(x, y - 1, array);
        }
        return 1;
    }
    return 0;
};
const main = (ARRAY) => {
    let array = ARRAY.map(e => e.map(e => e)),
        num = 0;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array.length; y++) {
            if (array[x][y]) {
                num += search(x, y, array);
            }
        }
    }
    return num;
};

print(main(arr));