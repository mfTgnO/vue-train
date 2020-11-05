/**
 * Promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 * The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * To learn about the way promises work and how you can use them, we advise you to read Using promises first.
 */
// test1();
test2();

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
    // test2_1();
    test2_2();
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
    })
}

/**
 * If the iterable contains non-promise values, they will be ignored, but still counted in the
 * returned promise array value (if the promise is fulfilled):
 */
function test2_2() {
    // this will be counted as if the iterable passed is empty, so it gets fulfilled
    var p1 = Promise.all([1,2,3]);
    // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
    var p2 = Promise.all([1,2,3,Promise.resolve(4)]);
    // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
    var p3 = Promise.all([1,2,3,Promise.reject(5)]);

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