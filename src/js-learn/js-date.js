// test1();
test2();

/**
 * Date
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
function test1() {
    var date = new Date();
    console.log(date);

    var date2 = Date.now();
    console.log(date2);
}

function test2() {
    var date = new Date().toLocaleString();
    console.log(date);
}