const arr = new Uint16Array(2);
arr[0] = 16;
arr[1] = 17;
const buff1 = Buffer.from(arr);
const buff2 = Buffer.from(arr.buffer);
arr[1] = 18;
console.log(buff1, buff2);