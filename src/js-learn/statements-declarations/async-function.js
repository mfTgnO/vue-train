/**
 * async function
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * An async function is a function declared with the async keyword. Async functions are instances
 * of the AsyncFunction constructor, and the await keyword is permitted within them. The async and
 * await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
 * avoiding the need to explicitly configure promise chains.
 *
 * Syntax
 * async function name([param[, param[, ...param]]]) {
 *    statements
 * }
 *
 * Parameters
 * name
 * The function’s name.
 *
 * param
 * The name of an argument to be passed to the function.
 *
 * statements
 * The statements comprising the body of the function.  The await mechanism may be used.
 *
 * Return value
 * A Promise which will be resolved with the value returned by the async function, or rejected with an exception thrown from, or uncaught within, the async function.
 */
test1();

/**
 * Async functions may also be defined as expressions.
 */
function test1() {
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
            }, 2000);
        });
    }

    async function asyncCall() {
        console.log('calling');
        var result = await resolveAfter2Seconds();
        console.log(result);
    }

    asyncCall();
}