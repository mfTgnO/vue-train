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
// test2();
// test3();
// test4();
// test5();
// test6();
// test7();
// test8();
// test9();
test10();

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

/**
 * Map.prototype.clear()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
 *
 * The clear() method removes all elements from a Map object.
 */
function test3() {
    var map = new Map();
    map.set('foo', 1);
    map.set('bar', 2);

    console.log(map.size);
    // expected output: 2

    map.clear();

    console.log(map.size);
    // expected output: 0
}

/**
 * Map.prototype.delete()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
 *
 * The delete() method removes the specified element from a Map object by key.
 *
 * Syntax
 * myMap.delete(key);
 *
 * Parameters
 * key
 * The key of the element to remove from the Map object.
 *
 * Return value
 * true if an element in the Map object existed and has been removed, or false if the element does not exist.
 */
function test4() {
    var map = new Map();
    map.set('foo', 1);

    console.log(map.delete('foo'));
    // expected output: true
    console.log(map.has('foo'));
    // expected output: false
    console.log(map.delete('foo'));
    // expected output: false
}

/**
 * Map.prototype.has()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
 *
 * The has() method returns a boolean indicating whether an element with the specified key exists or not.
 */
function test5() {
    var map = new Map();
    map.set('foo', 'bar');

    console.log(map.has('foo'));
    // expected output: true
    console.log(map.has('fzz'));
    // expected output: false
}

/**
 * Map.prototype.entries()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
 *
 * The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
 */
function test6() {
    var map = new Map();
    map.set(1, 'foo');
    map.set(2, 'bar');

    var iterator = map.entries();

    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

/**
 * Map.prototype.forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
 *
 * The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
 *
 * Syntax
 * myMap.forEach(callback([value][,key][,map])[, thisArg])
 *
 * Parameters
 * callback
 * Function to execute for each entry of myMap. It takes the following arguments:
 *      value Optional
 *          Value of each iteration.
 *      key Optional
 *          Key of each iteration.
 *      map Optional
 *          The map being iterated (myMap in the above Syntax box).
 *
 * thisArg Optional
 * Value to use as this when executing callback.
 *
 * Description
 * The forEach method executes the provided callback once for each key of the map which actually exist.
 * It is not invoked for keys which have been deleted. However, it is executed for values which are present but have the value undefined.
 *
 * callback is invoked with three arguments:
 *
 * the entry's value
 * the entry's key
 * the Map object being traversed
 * If a thisArg parameter is provided to forEach, it will be passed to callback when invoked,
 * for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.
 * The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.
 *
 * Each value is visited once, except in the case when it was deleted and re-added before forEach has finished.
 * callback is not invoked for values deleted before being visited. New values added before forEach has finished will be visited.
 *
 * forEach executes the callback function once for each element in the Map object. It does not return a value.
 */
function test7() {
    function logMapElements(value, key, map) {
        console.log(`m[${key}] = ${value}`);
    }

    new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
        .forEach(logMapElements);

    // expected output: "m[foo] = 3"
    // expected output: "m[bar] = [object Object]"
    // expected output: "m[baz] = undefined"
}

/**
 * Map.prototype.keys()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
 *
 * The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order
 *
 * Syntax
 * myMap.keys()
 *
 * Return value
 * A new Map iterator object.
 */
function test8() {
    var map = new Map();
    map.set(1, 'foo');
    map.set(2, 'bar');

    var iterator = map.keys();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

/**
 * Map.prototype.values()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
 *
 * The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
 *
 * Syntax
 * myMap.values()
 *
 * Return value
 * A new Map iterator object.
 */
function test9() {
    var map = new Map();
    map.set(1, 'foo');
    map.set(2, 'bar');

    var iterator = map.values();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

/**
 * Map.prototype[@@iterator]()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator
 *
 * The initial value of the @@iterator property is the same function object as the initial value of the entries method.
 */
function test10() {
    // test10_1();
    // test10_2();
    test10_3();
}

function test10_1() {
    var map = new Map();
    map.set(1, 'foo');
    map.set(2, 'bar');

    var iterator = map[Symbol.iterator]();
    for (const item of iterator) {
        console.log(item);
    }
}

/**
 * Using [@@iterator]()
 */
function test10_2() {
    const myMap = new Map();
    myMap.set('0', 'foo');
    myMap.set(1, 'bar');
    myMap.set({}, 'baz');

    const mapIter = myMap[Symbol.iterator]();

    console.log(mapIter.next().value); // ["0", "foo"]
    console.log(mapIter.next().value); // [1, "bar"]
    console.log(mapIter.next().value); // [Object, "baz"]
}

/**
 * Using [@@iterator]() with for..of
 */
function test10_3() {
    const myMap = new Map()
    myMap.set('0', 'foo')
    myMap.set(1, 'bar')
    myMap.set({}, 'baz')

    for (const entry of myMap) {
        console.log(entry)
    }
    // ["0", "foo"]
    // [1, "bar"]
    // [{}, "baz"]

    for (const [key, value] of myMap) {
        console.log(`${key}: ${value}`)
    }
    // 0: foo
    // 1: bar
    // [Object]: baz
}