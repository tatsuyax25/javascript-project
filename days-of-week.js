// days-of-week.js
console.log(module);

exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports.getWeekday = function (dayNo) {
  if (dayNo < 0 || dayNo > 6) dayNo = 0;
  return exports.weekdays[dayNo];
}