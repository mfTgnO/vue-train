/*
* JavaScript Date 对象
* https://www.runoob.com/jsref/jsref-obj-date.html
* */
var date = new Date();
// eslint-disable-next-line no-console
console.log(date);
var currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0);
console.log(currentDate);