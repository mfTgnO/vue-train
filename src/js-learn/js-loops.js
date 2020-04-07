// test1();
// test2();
test3();

/*
* Loops
* https://www.learn-js.org/en/Loops
*
* The for statement
* JavaScript has two methods for running the same code several times.
* It is mainly used for iterating over arrays or objects. Let's see an example:
*
* The for statement in JavaScript has the same syntax as in Java and C. It has three parts:
*
* Initialization - Initializes the iterator variable i. In this example, we initialize i to 0.
* Condition - As long as the condition is met, the loop continues to execute. In this example, we check that i is less than 3.
* Increment - A directive which increments the iterator. In our case, we increment it by 1 on every loop.
* */
function test1() {
    var i;
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
}

/*
* The while statement
* The while statement is a more simple version of the for statement which checks if an
* expression evaluates to true and runs as long as it says true.
* */
function test2() {
    var i = 99;
    while (i > 0) {
        console.log(i + " bottles of beer on the wall");
        i--;
    }
}

/*
* break and continue statements
* The break statement allows to stop the execution of a loop.
* For example, we can create a loop that loops forever using while(true) and use the break statement
* to break inside the loop instead by checking that a certain condition was met.
* */
function test3() {
    var i = 99;
    while (true) {
        console.log(i + " bottles of beer on the wall");
        i--;
        if (i == 0) {
            break;
        }
    }

    // The continue statement skips the rest of the loop and jumps back to the beginning of the loop. 
    // For example, if we would want to print only odd numbers using a for statement, we can do the following:
    for (let i = 0; i < 100; i++) {
        // check that the number is even
        if (i % 2 == 0) {
            continue;
        }
        // if we got here, then i is odd.
        console.log(i + " is an odd number.");
    }
}