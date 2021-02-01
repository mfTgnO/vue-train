/**
 * Set
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 *
 * Description
 * Set objects are collections of values. You can iterate through the elements of a set in insertion order.
 * A value in the Set may only occur once; it is unique in the Set's collection.
 *
 * Value equality
 * Because each value in the Set has to be unique, the value equality will be checked.
 * In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the === operator.
 * Specifically, for Sets, +0 (which is strictly equal to -0) and -0 were different values. However, this was changed in the ECMAScript 2015 specification.
 * See "Key equality for -0 and 0" in the browser compatibility table for details.
 *
 * NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).
 */

// test1();
test2();
// test3();
// test4();
// test5();
// test6();
// test7();
// test8();
// test9();

/**
 * Set.prototype.size
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
 *
 * The size accessor property returns the number of (unique) elements in a Set object.
 */
function test1() {
    const set = new Set();
    const object1 = {};
    console.log(set.size);

    set.add(42);
    set.add('forty two');
    set.add('forty two');
    set.add(object1);

    console.log(set);
    console.log("---------------");
    console.log(set.size);
}

/**
 * Set.prototype.add()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
 *
 * The add() method appends a new element with a specified value to the end of a Set object.
 */
function test2() {
    const set = new Set();
    set.add(42);
    set.add(42);
    set.add(13);
    set.add(5).add('some text'); // chainable

    console.log(set);

    for (const item of set) {
        console.log(item);
    }
}

/**
 * Set.prototype.clear()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear
 *
 * The clear() method removes all elements from a Set object.
 */
function test3() {
    var set = new Set();
    set.add(123);
    set.add('hello');

    console.log(set.size);
    set.has(123);
    set.has('hello');

    set.clear();

    console.log(set.size);
    set.has(123);
    set.has('hello');
}

/**
 * Set.prototype.delete()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
 *
 * The delete() method removes the specified element from a Set object.
 */
function test4() {
    var set = new Set();
    set.add({x: 10, y: 20}).add({x: 30, y: 40});

    // Delete any point with `x > 10`.
    set.forEach(point => {
        if (point.x > 10) {
            set.delete(point);
        }
    });

    console.log(set.size);
    for (const item of set) {
        console.log(item);
    }
}

/**
 * Set.prototype.has()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
 *
 * The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.
 */
function test5() {
    // test5_1();
    // test5_2();
    test5_3();
}

function test5_1() {
    const set = new Set([1, 2, 3, 4, 5]);
    console.log(set.has(1));
    console.log(set.has(5));
    console.log(set.has(6));
}

function test5_2() {
    var set = new Set();
    set.add('foo');

    console.log(set.has('foo'));// returns true
    console.log(set.has('bar'));// returns false
}

function test5_3() {
    var set = new Set();
    var obj1 = {'key': 1};
    set.add(obj1);

    console.log(set.has(obj1));// returns true
    console.log(set.has({'key': 1}));// returns false because they are different object references

    console.log(set.size);
    set.add({'key': 1});// now set1 contains 2 entries
    console.log(set.size);
}

/**
 * Set.prototype[@@iterator]()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator
 *
 * The initial value of the @@iterator property is the same function object as the initial value of the values property.
 */
function test6() {
    // test6_1();
    // test6_2();
    test6_3();
}

function test6_1() {
    var set = new Set();
    set.add(42);
    set.add('forty two');

    var iterator1 = set[Symbol.iterator]();
    console.log(iterator1.next().value);
    console.log(iterator1.next().value);
}

/**
 * Using [@@iterator]()
 */
function test6_2() {
    const mySet = new Set();
    mySet.add('0');
    mySet.add(1);
    mySet.add({});

    const setIter = mySet[Symbol.iterator]();

    console.log(setIter.next().value); // "0"
    console.log(setIter.next().value); // 1
    console.log(setIter.next().value); // Object
}

/**
 * Using [@@iterator]() with for..of
 */
function test6_3() {
    const mySet = new Set();
    mySet.add('0');
    mySet.add(1);
    mySet.add({});

    for (const v of mySet) {
        console.log(v);
    }
}

/**
 * Set.prototype.values()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values
 *
 * The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.
 * The keys() method is an alias for this method (for similarity with Map objects); it behaves exactly the same and returns values of Set elements.
 */
function test7() {
    const set1 = new Set();
    set1.add(42);
    set1.add('forty two');

    var iterator1 = set1.values();
    console.log(iterator1.next().value);
    console.log(iterator1.next().value);
}

/**
 * Set.prototype.entries()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries
 *
 * The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object,
 * in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object,
 * each entry has the same value for its key and value here, so that an array [value, value] is returned.
 *
 * Return value
 * A new Iterator object that contains an array of [value, value] for each element in the given Set, in insertion order.
 */
function test8() {
    const set1 = new Set();
    set1.add(42);
    set1.add('forty two');

    var iterator1 = set1.entries();
    for (const entry of iterator1) {
        console.log(entry);
    }
}

/**
 * Set.prototype.forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach
 *
 * The forEach() method executes a provided function once for each value in the Set object, in insertion order.
 *
 * Syntax
 * mySet.forEach(callback[, thisArg])
 *
 * Parameters
 * callback
 * Function to execute for each element, taking three arguments:
 *      currentValue, currentKey
 *          The current element being processed in the Set. As there are no keys in Set, the value is passed for both arguments.
 *      set
 *          The Set object which forEach() was called upon.
 *
 * thisArg
 * Value to use as this when executing callback.
 */
function test9() {
    function logSetElements(value1, value2, set) {
        console.log(`s[${value1}] = ${value2}`);
    }

    new Set(['foo', 'bar', undefined]).forEach(logSetElements);

    // expected output: "s[foo] = foo"
    // expected output: "s[bar] = bar"
    // expected output: "s[undefined] = undefined"
}