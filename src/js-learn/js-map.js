/**
 * Map
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 *
 * The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 *
 * Description
 * A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.
 *
 * Key equality
 * Key equality is based on the sameValueZero algorithm.
 * NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.
 * In the current ECMAScript specification, -0 and +0 are considered equal, although this was not so in earlier drafts.
 * See "Value equality for -0 and 0" in the Browser compatibility table for details.
 *
 * Objects vs. Maps
 * Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.
 * For this reason (and because there were no built-in alternatives), Objects have been used as Maps historically.
 *
 * However, there are important differences that make Map preferable in certain cases:
 */
// test1();
test2();

/**
 * Map.prototype.set()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
 *
 * The set() method adds or updates an element with a specified key and a value to a Map object.
 *
 * Syntax
 * myMap.set(key, value)
 */
function test1() {
    // test1_1();
    test1_2();

}

function test1_1() {
    var map = new Map();
    map.set('bar', 'foo');

    console.log(map.get("bar"));
    console.log(map.get("baz"));
}

function test1_2() {
    var map = new Map();
    map.set('a', 1).set('b', 2).set('c', 3);

    console.log(map.get("a"));
    console.log(map.get("b"));
    console.log(map.get("c"));
}

/**
 * Map.prototype.get()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get
 *
 * The get() method returns a specified element from a Map object.
 * If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made
 * to that object will effectively modify it inside the Map object.
 *
 * Syntax
 * myMap.get(key)
 *
 * Parameters
 * key
 * The key of the element to return from the Map object.
 *
 * Return value
 * The element associated with the specified key, or undefined if the key can't be found in the Map object.
 */
function test2() {
    var map = new Map();
    map.set('bar', 'foo');

    console.log(map.get('bar'));
}