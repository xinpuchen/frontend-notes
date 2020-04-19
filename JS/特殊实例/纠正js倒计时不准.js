const startTime = new Date().getTime();
let count1 = 0;
let count2 = 0;

setInterval(function() {
  let i = 0;
  while (i++ < 1000000);
}, 0);

setInterval(function() {
  count1++;
  const offset = new Date().getTime() - (startTime + count1 * 1000);
  document.querySelector('#test1').innerHTML = `test1: ${offset}`;
}, 1000);

function fixed() {
  count2++;
  const offset = new Date().getTime() - (startTime + count2 * 1000);
  let nextTime = 1000 - offset;
  if (nextTime < 0) nextTime = 0;
  document.querySelector('#test2').innerHTML = `test2: ${offset}`;
  setTimeout(fixed, nextTime);
}

setTimeout(fixed, 1000);
