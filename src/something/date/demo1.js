//把时间日期转换为字符串
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var data = {};
var date = new Date();

// 当前月份第一天
data.nowtimestart = new Date(date.getFullYear(), date.getMonth(), 1).Format("yyyy-MM-dd 00:00:00");
// 当前月份最后一天
data.nowtimeend = new Date(date.getFullYear(), date.getMonth() + 1, 0).Format("yyyy-MM-dd 23:59:59");


// var myDate=new Date();
// console.log(myDate);

console.log(data);