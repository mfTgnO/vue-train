// test1();
test2();

/**
* Callbacks
* https://www.learn-js.org/en/Callbacks
*
* Callbacks in JavaScript are functions that are passed as arguments to other functions.
* This is a very important feature of asynchronous programming, and it enables the function
* that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.
*
* This code waits 5 seconds and prints out "Done!" when the 5 seconds are up.
* Note that this code will not work in the interpreter because it is not designed for handling callbacks.
* */
function test1() {
    var callback = function () {
        console.log("Done!");
    };
    setTimeout(callback, 5000);
}

/**
* It is also possible to define callbacks as anonymous functions, like so:
* */
function test2() {
    setTimeout(function () {
        console.log("Done!");
    }, 5000);
}