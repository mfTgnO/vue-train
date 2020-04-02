/*
* Scheduling: setTimeout and setInterval
* https://javascript.info/settimeout-setinterval
*
* setTimeout allows us to run a function once after the interval of time.
* setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
* */
// test1();
// test2();
// test3();
// test4();
// test5();
test6();

// setTimeout
function test1() {
    function sayHi() {
        console.log('Hello');
    }

// For instance, this code calls sayHi() after one second:
    setTimeout(sayHi, 1000);
}

// With arguments:
function test2() {
    function sayHi(phrase, who) {
        console.log(phrase + ', ' + who);
    }

    setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
}

// But using strings is not recommended, use arrow functions instead of them, like this:
function test3() {
    setTimeout(() => console.log('Hello'), 1000);
}

// Pass a function, but don’t run it
// Novice developers sometimes make a mistake by adding brackets () after the function:
function test4() {
    function sayHi() {
        console.log('Hello');
    }

    // wrong!
    setTimeout(sayHi(), 1000);
}

// That doesn’t work, because setTimeout expects a reference to a function. And here sayHi() runs the function,
// and the result of its execution is passed to setTimeout. In our case the result of sayHi() is
// undefined (the function returns nothing), so nothing is scheduled.

// Canceling with clearTimeout
// A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
// The syntax to cancel:

// let timerId = setTimeout(...);
// clearTimeout(timerId);
function test5() {
    let timerId = setTimeout(() => console.log("never happens"), 1000);
    console.log(timerId)// timer identifier

    clearTimeout(timerId);
    console.log(timerId)// same identifier (doesn't become null after canceling)
}

// setInterval
// The setInterval method has the same syntax as setTimeout:
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

// To stop further calls, we should call clearInterval(timerId).

// The following example will show the message every 2 seconds. After 5 seconds, the output is stopped:
function test6() {
    // repeat with the interval of 2 seconds
    let timerId = setInterval(() => console.log('tick'), 2000);

    // after 5 seconds stop
    setTimeout(() => {
        clearInterval(timerId);
        console.log('stop');
    }, 5000);
}

// Nested setTimeout
function test7() {
    /** instead of:
     let timerId = setInterval(() => alert('tick'), 2000);
     */

    let timerId = setTimeout(function tick() {
        alert('tick');
        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);
}