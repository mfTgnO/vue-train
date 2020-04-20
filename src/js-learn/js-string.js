// test1();
test2();

// test3();

/**
 * replace
 */
function test1() {
    var str = 'ABCD';
    var replace = str.replace('B', 'X');
    console.log(replace);
    replace = str.replace('C', '');
    console.log(replace);
}

/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/indexof
 */
function test2() {
    var str1 = 'ABCD';
    console.log(str1.indexOf('B'));
    console.log(str1.indexOf('H'));

    var str2 = 'ABCDABCD';
    console.log(str2.indexOf('B', 1));
    console.log(str2.indexOf('B', 2));
}

/**
 * substring
 */
function test3() {
    // var url = '../../../doctor_train/ui/module/schoolMain.htm';
    var url = 'http://localhost:8081/doctor_train/ui/module/schoolMain.htm';
    var domain = url.substring(0, url.indexOf('/' + url.split('/')[3] + '/'));
    var url_ = url.substring(url.indexOf('/' + url.split('/')[3] + '/'), url.length);

    console.log(url);
    console.log(domain);
    console.log(url_);
}