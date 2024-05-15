const multiply = (a, b) => a * b;
let n = multiply(5, 8);
console.log(n);

const fs = require('fs');
console.log(typeof fs);

fs.writeFile('./hello.text', 'Hello!', function() {
  console.log('done creating file');
});

let daysOfWeek = require('./days-of-week');
let day = daysOfWeek.getWeekday(5);
console.log(day);