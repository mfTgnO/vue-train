/**
 * Promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * To learn about the way promises work and how you can use them, we advise you to read Using promises first.
 */
// test1();
// test2();
// test3();
// test4();
// test5();
test6();

/**
 * Promise.all()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 *
 * The Promise.all() method takes an iterable of promises as an input, and returns a single Promise
 * that resolves to an array of the results of the input promises. This returned promise will resolve
 * when all of the input's promises have resolved, or if the input iterable contains no promises. It
 * rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and
 * will reject with this first rejection message / error.
 *
 * Syntax
 * Promise.all(iterable);
 *
 * Parameters
 * iterable
 * An iterable object such as an Array.
 *
 * Return value
 * An already resolved Promise if the iterable passed is empty.
 *
 * An asynchronously resolved Promise if the iterable passed contains no promises.
 * Note, Google Chrome 58 returns an already resolved promise in this case.
 *
 * A pending Promise in all other cases. This returned promise is then resolved/rejected
 * asynchronously (as soon as the stack is empty) when all the promises in the given iterable
 * have resolved, or if any of the promises reject. See the example about "Asynchronicity or
 * synchronicity of Promise.all" below. Returned values will be in order of the Promises passed,
 * regardless of completion order.
 */
function test1() {
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(value => {
        console.log(value);
    });
    // expected output: Array [3, 42, "foo"]
}

/**
 * Examples
 * Using Promise.all
 */
function test2() {
    test2_1();
    // test2_2();
}

/**
 * Promise.all waits for all fulfillments (or the first rejection).
 */
function test2_1() {
    var p1 = Promise.resolve(3);
    var p2 = 1337;
    var p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 100);
    });

    Promise.all([p1, p2, p3]).then(value => {
        console.log(value);
    });
    // [ 3, 1337, 'foo' ]
}

/**
 * If the iterable contains non-promise values, they will be ignored, but still counted in the
 * returned promise array value (if the promise is fulfilled):
 */
function test2_2() {
    // this will be counted as if the iterable passed is empty, so it gets fulfilled
    var p1 = Promise.all([1, 2, 3]);
    // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
    var p2 = Promise.all([1, 2, 3, Promise.resolve(4)]);
    // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
    var p3 = Promise.all([1, 2, 3, Promise.reject(5)]);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        console.log(p1);
        console.log(p2);
        console.log(p3);
    });

    // Promise { [ 1, 2, 3 ] }
    // Promise { [ 1, 2, 3, 4 ] }
    // Promise { <rejected> 5 }
}

/**
 * Asynchronicity or synchronicity of Promise.all
 */
function test3() {
    // test3_1();
    // test3_2();
    test3_3();
}

/**
 * This following example demonstrates the asynchronicity (or synchronicity, if the iterable passed is empty) of Promise.all:
 */
function test3_1() {
    // we are passing as argument an array of promises that are already resolved,
    // to trigger Promise.all as soon as possible
    var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

    var p = Promise.all(resolvedPromisesArray);
    // immediately logging the value of p
    console.log(p);

    // using setTimeout we can execute code after the stack is empty
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
    });

    // logs, in order:
    // Promise { <pending> }
    // the stack is now empty
    // Promise { [ 33, 44 ] }
}

/**
 * The same thing happens if Promise.all rejects:
 */
function test3_2() {
    var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
    var p = Promise.all(mixedPromisesArray);
    console.log(p);
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p);
    });
    // logs
    // Promise { <state>: "pending" }
    // the stack is now empty
    // Promise { <state>: "rejected", <reason>: 44 }
}

/**
 * But, Promise.all resolves synchronously if and only if the iterable passed is empty:
 */
function test3_3() {
    var p = Promise.all([]);
    var p2 = Promise.all([1337], "hi");
    console.log(p);
    console.log(p2);
    setTimeout(function () {
        console.log('the stack is now empty');
        console.log(p2);
    });
    // Promise { [] }
    // Promise { <pending> }
    // the stack is now empty
    // Promise { [ 1337 ] }
}

/**
 * Promise.all fail-fast behaviour
 */
function test4() {
    // test4_1();
    test4_2();
}

/**
 * Promise.all is rejected if any of the elements are rejected. For example,
 * if you pass in four promises that resolve after a timeout and one promise
 * that rejects immediately, then Promise.all will reject immediately.
 */
function test4_1() {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('one'), 1000);
    });
    var p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('two'), 2000);
    });
    var p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('three'), 3000);
    });
    var p4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('four'), 4000);
    });
    var p5 = new Promise((resolve, reject) => {
        reject(new Error("reject"));
    });

    // Using .catch:
    Promise.all([p1, p2, p3, p4, p5]).then(values => {
        console.log(values)
    }).catch(error => {
        console.error(error.message);
    });
    //From console:
    //"reject"
}

/**
 * It is possible to change this behaviour by handling possible rejections:
 */
function test4_2() {
    var p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('p1_delayed_resolution'), 1000);
    });

    var p2 = new Promise((resolve, reject) => {
        reject(new Error('p2_immediate_rejection'));
    });

    Promise.all([
        p1.catch(error => {
            return error;
        }),
        p2.catch(error => {
            return error;
        })
    ]).then(values => {
        console.log(values[0]);// "p1_delayed_resolution"
        console.error(values[1]);// "Error: p2_immediate_rejection"
    });
}

/**
 * Promise.allSettled()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
 *
 * Syntax
 * Promise.allSettled(iterable);
 *
 * Parameters
 * iterable
 * An iterable object, such as an Array, in which each member is a Promise.
 *
 * Return value
 * A pending Promise that will be asynchronously fulfilled once every promise in the specified collection of
 * promises has completed, either by successfully being fulfilled or by being rejected. At that time, the returned
 * promise's handler is passed as input an array containing the outcome of each promise in the original set of promises.
 *
 * However, if and only if an empty iterable is passed as an argument, Promise.allSettled() returns a Promise
 * object that has already been resolved as an empty array.
 *
 * For each outcome object, a status string is present. If the status is fulfilled, then a value is present.
 * If the status is rejected, then a reason is present. The value (or reason) reflects what value each promise
 * was fulfilled (or rejected) with.
 */
function test5() {
    // test5_1();
    test5_2();
}

/**
 * The Promise.allSettled() method returns a promise that resolves after all of the given promises
 * have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
 *
 * It is typically used when you have multiple asynchronous tasks that are not dependent on one another
 * to complete successfully, or you'd always like to know the result of each promise.
 *
 * In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent
 * on each other / if you'd like to immediately reject upon any of them rejecting.
 */
function test5_1() {
    var promise1 = Promise.resolve(3);
    var promise2 = new Promise((resolve, reject) => {
        setTimeout(reject, 100, 'foo')
    });
    var promises = [promise1, promise2];

    Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));
    // expected output:
    // "fulfilled"
    // "rejected"
}

/**
 * Examples
 * Using Promise.allSettled
 */
function test5_2() {
    Promise.allSettled([
        Promise.resolve(33),
        new Promise(resolve => setTimeout(() => resolve(66), 0)),
        99,
        Promise.reject(new Error('an error'))
    ]).then(values => console.log(values));

    // [
    //   {status: "fulfilled", value: 33},
    //   {status: "fulfilled", value: 66},
    //   {status: "fulfilled", value: 99},
    //   {status: "rejected",  reason: Error: an error}
    // ]
}

/**
 * Promise.any()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
 *
 * Syntax
 * Promise.any(iterable);
 *
 * Parameters
 * iterable
 * An iterable object, such as an Array.
 *
 * Return value
 * An already rejected Promise if the iterable passed is empty.
 * An asynchronously resolved Promise if the iterable passed contains no promises.
 * A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously
 * (as soon as the stack is empty) when any of the promises in the given iterable resolve, or if all the
 * promises have rejected.
 */
function test6() {
    test6_1();
}

/**
 * Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the
 * iterable fulfills, returns a single promise that resolves with the value from that promise.
 * If no promises in the iterable fulfill (if all of the given promises are rejected), then the
 * returned promise is rejected with an AggregateError, a new subclass of Error that groups together
 * individual errors. Essentially, this method is the opposite of Promise.all().
 */
function test6_1() {
    /*const promise1 = Promise.reject(0);
    const promise2 = new Promise(resolve => {
        setTimeout(resolve, 100, 'quick')
    });
    const promise3 = new Promise(resolve => {
        setTimeout(resolve, 500, 'slow')
    });
    const promises = [promise1, promise2, promise3];

    Promise.any(promises).then(value => console.log(value));*/


//    ============
    const promise1 = Promise.reject(0);
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

    const promises = [promise1, promise2, promise3];

    Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"
}