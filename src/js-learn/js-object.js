// test2();
// test3();
// test4();
// test5();
// test6();
test7();

/**
 * Objects
 * JavaScript is a functional language, and for object oriented programming it uses
 * both objects and functions, but objects are usually used as a data structure,
 * similar to a dictionary in Python or a map in Java. In this tutorial, we will
 * learn how to use objects as a data structure. The advanced tutorials explain
 * more about object oriented JavaScript.
 * To initialize an object, use curly braces:
 * */
function test1() {
    var emptyObject = {};
    var personObject = {
        firstName: "John",
        lastName: "Smith"
    }
}

/**
 * Member addressing
 * Members of objects can be addressed using the brackets operator [], very much like arrays,
 * but just like many other object oriented languages, the period . operator can also be used.
 * They are very similar, except for the fact that brackets return a member by using a string,
 * in contrast to the period operator, which requires the member to be a simple word (the word
 * should not contain spaces, start with a number or use illegal characters).
 *
 * For example, we can continue to fill the person object with more details:
 * */
function test2() {
    var personObject = {
        firstName: "John",
        lastName: "Smith"
    };
    personObject.age = 23;
    personObject["salary"] = 14000;

    // Iteration
    // Iterating over members of a dictionary is not a trivial task, since iterating over objects
    // can also yield members who don't actually belong to an object. Therefore, we must use the
    // hasOwnProperty method to check that the member in fact belongs to the object.
    for (var member in personObject) {
        if (personObject.hasOwnProperty(member)) {
            console.log("the member " + member + " of personObject is " + personObject[member]);
        }
    }
}

/**
 * How to loop through object in JavaScript
 * https://reactgo.com/javascript-loop-through-object/
 */
function test3() {
    const obj = {
        id: 1,
        name: "gowtham",
        active: true
    };

    method1(obj);

    // method2(obj);

    /**
     * For in loop
     * for in loop helps us to get the object key on each iteration by using that we can access the object value.
     */
    function method1(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // console.log(`${key} : ${obj[key]}`);
                // console.log(`${key}`);
                console.log(`${key}`);
            }
        }
    }

    /**
     * Object.entries
     * The Object.entries() method returns the array with arrays which are [key,value] pairs of the given object.
     */
    function method2(obj) {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}:${value}`)
        });
    }
}

/**
 * Object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 *
 * The Object class represents one of JavaScript's data types. It is used to store various keyed collections
 * and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
 *
 * Description
 * Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype,
 * although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true
 * (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).
 *
 * Changes to the Object prototype object are seen by all objects through prototype chaining, unless the properties and methods subject
 * to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous
 * mechanism to override or extend object behavior.
 *
 * The Object constructor creates an object wrapper for the given value.
 *
 * If the value is null or undefined, it will create and return an empty object.
 * Otherwise, it will return an object of a Type that corresponds to the given value.
 * If the value is an object already, it will return the value.
 * When called in a non-constructor context, Object behaves identically to new Object().
 *
 * See also the object initializer / literal syntax.
 *
 * Object() constructor
 * The Object constructor creates an object wrapper for the given value.
 *      1.If the value is null or undefined, it will create and return an empty object.
 *      2.Otherwise, it will return an object of a Type that corresponds to the given value.
 *      3.If the value is an object already, it will return the value.
 *
 * When called in a non-constructor context, Object behaves identically to new Object().
 *
 * Syntax
 *      new Object()
 *      new Object(value)
 *
 * Parameters
 * value
 *      Any value.
 */
function test4() {
    test4_1();
    // test4_2();
}

/**
 * Creating a new Object
 */
function test4_1() {
    var o = new Object();
    console.log(o);
    // {}

    o.foo = 42;
    console.log(o);
    // { foo: 42 }
}

/**
 * Using Object given undefined and null types
 * The following examples store an empty Object object in o:
 */
function test4_2() {
    var o1 = new Object();
    console.log(o1);
    // {}

    var o2 = new Object(undefined);
    console.log(o2);
    // {}

    var o3 = new Object(null);
    console.log(o3);
    // {}
}

/**
 * Object.prototype.constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 *
 * The constructor property returns a reference to the Object constructor function that created the instance object.
 * Note that the value of this property is a reference to the function itself, not a string containing the function's name.
 *
 * The value is only read-only for primitive values such as 1, true, and "test".
 *
 * Description
 * All objects (with the exception of objects created with Object.create(null)) will have a constructor property.
 * Objects created without the explicit use of a constructor function (such as object- and array-literals) will have
 * a constructor property that points to the Fundamental Object constructor type for that object.
 */
function test5() {
    // test5_1();
    // test5_2();
    test5_3();
}

function test5_1() {
    let o1 = {};
    console.log(o1.constructor === Object);
    // true

    var o2 = new Object();
    console.log(o2.constructor === Object);
    // true

    let o3 = [];
    console.log(o3.constructor === Array);
    // true

    var o4 = new Array();
    console.log(o4.constructor === Array);
    // true

    var o5 = new Number(3);
    console.log(o5.constructor === Number);
    // true
}

/**
 * Displaying the constructor of an object
 *
 * The following example creates a constructor (Tree) and an object of that type (theTree).
 * The example then displays the constructor property for the object theTree.
 */
function test5_2() {
    function Tree(name) {
        this.name = name;
    }

    var tree = new Tree('Redwood');
    console.log('theTree.constructor is ' + tree.constructor);
}

/**
 * Changing the constructor of an object
 *
 * The following example shows how to modify the constructor value of generic objects. Only true, 1,
 * and "test" will not be affected (as they have read-only native constructors).
 *
 * This example shows that it is not always safe to rely on the constructor property of an object.
 */
function test5_3() {
    function Type() {

    }

    let types = [
        new Array(),
        [],
        new Boolean(),
        true,
        new Date(),
        new Error(),
        new Function(),
        function () {
        },
        Math,
        new Number(),
        1,
        new Object(),
        {},
        new RegExp(),
        /(?:)/,
        new String(),
        'test'
    ];

    for (let i = 0; i < types.length; i++) {
        types[i].constructor = Type;
        types[i] = [types[i].constructor, types[i] instanceof Type, types[i].toString()];
    }

    console.log(types.join('\n'));
}

/**
 * Object.assign()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 *
 * The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
 *
 * Syntax
 * Object.assign(target, ...sources)
 *
 * Parameters
 *      target
 *      The target object — what to apply the sources’ properties to, which is returned after it is modified.
 *
 *      sources
 *      The source object(s) — objects containing the properties you want to apply.
 *
 * Return value
 * The target object.
 *
 * Description
 * Properties in the target object are overwritten by properties in the sources if they have the same key.
 * Later sources' properties overwrite earlier ones.
 *
 * The Object.assign() method only copies enumerable and own properties from a source object to a target object.
 * It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it
 * assigns properties, versus copying or defining new properties. This may make it unsuitable for merging new
 * properties into a prototype if the merge sources contain getters.
 *
 * For copying property definitions (including their enumerability) into prototypes, use Object.getOwnPropertyDescriptor()
 * and Object.defineProperty() instead.
 *
 * Both String and Symbol properties are copied.
 *
 * In case of an error, for example if a property is non-writable, a TypeError is raised, and the target object
 * is changed if any properties are added before the error is raised.
 *
 * Note: Object.assign() does not throw on null or undefined sources.
 */
function test6() {
    // test6_1();
    // test6_2();
    // test6_3();
    // test6_4();
    // test6_5();
    // test6_6();
    // test6_7();
    // test6_8();
    // test6_9();
    test6_10();
}

function test6_1() {
    const target = {a: 1, b: 2};
    const source = {b: 4, c: 5}

    var returnedTarget = Object.assign(target, source);

    console.log(target);
    // { a: 1, b: 4, c: 5 }

    console.log(returnedTarget);
    // { a: 1, b: 4, c: 5 }
}

/**
 * Cloning an object
 */
function test6_2() {
    const obj = {a: 1};
    var copy = Object.assign({}, obj);
    console.log(copy);
    // { a: 1 }
}

/**
 * Warning for Deep Clone
 *
 * For deep cloning, we need to use alternatives, because Object.assign() copies property values.
 * If the source value is a reference to an object, it only copies the reference value.
 */
function test6_3() {
    'use strict';

    let obj1 = {a: 0, b: {c: 0}};
    var obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2));
    // {"a":0,"b":{"c":0}}

    obj1.a = 1;
    console.log(JSON.stringify(obj1));
    // {"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));
    // {"a":0,"b":{"c":0}}

    obj2.a = 2;
    console.log(JSON.stringify(obj1));
    // {"a":1,"b":{"c":0}}
    console.log(JSON.stringify(obj2));
    // {"a":2,"b":{"c":0}}

    obj2.b.c = 3;
    console.log(JSON.stringify(obj1));
    // {"a":1,"b":{"c":3}}
    console.log(JSON.stringify(obj2));
    // {"a":2,"b":{"c":3}}

    // Deep Clone
    obj1 = {a: 0, b: {c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3));
    // {"a":0,"b":{"c":0}}

}

/**
 * Merging objects
 */
function test6_4() {
    const o1 = {a: 1};
    const o2 = {b: 2};
    const o3 = {c: 3};

    const obj = Object.assign(o1, o2, o3);
    console.log(obj);
    // { a: 1, b: 2, c: 3 }
    console.log(o1);
    // { a: 1, b: 2, c: 3 }
}

/**
 * Merging objects with same properties
 * The properties are overwritten by other objects that have the same properties later in the parameters order.
 */
function test6_5() {
    const o1 = {a: 1, b: 1, c: 1};
    const o2 = {b: 2, c: 2};
    const o3 = {c: 3};

    var obj = Object.assign({}, o1, o2, o3);
    console.log(obj);
    // { a: 1, b: 2, c: 3 }
}

/**
 * Copying symbol-typed properties
 */
function test6_6() {
    const o1 = {a: 1};
    const o2 = {[Symbol('foo')]: 2};

    const obj = Object.assign({}, o1, o2);
    console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
    var ownPropertySymbols = Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
    console.log(ownPropertySymbols);
}

/**
 * Properties on the prototype chain and non-enumerable properties cannot be copied
 */
function test6_7() {
    const obj = Object.create({foo: 1}, { // foo is on obj's prototype chain.
        bar: {
            value: 2  // bar is a non-enumerable property.
        },
        baz: {
            value: 3,
            enumerable: true  // baz is an own enumerable property.
        }
    });

    console.log(obj);
    const copy = Object.assign({}, obj);
    console.log(copy); // { baz: 3 }
}

/**
 * Primitives will be wrapped to objects
 */
function test6_8() {
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    const v4 = Symbol('foo');

    const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
    // Primitives will be wrapped, null and undefined will be ignored.
    // Note, only string wrappers can have own enumerable properties.
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }
}

/**
 * Exceptions will interrupt the ongoing copying task
 */
function test6_9() {
    const target = Object.defineProperty({}, 'foo', {
        value: 1,
        writable: false
    }); // target.foo is a read-only property

    Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
    // TypeError: "foo" is read-only
    // The Exception is thrown when assigning target.foo

    console.log(target.bar);  // 2, the first source was copied successfully.
    console.log(target.foo2); // 3, the first property of the second source was copied successfully.
    console.log(target.foo);  // 1, exception is thrown here.
    console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
    console.log(target.baz);  // undefined, the third source will not be copied either.
}

/**
 * Copying accessors
 */
function test6_10() {
    const obj = {
        foo: 1,
        get bar() {
            return 2;
        }
    };

    let copy = Object.assign({}, obj);
    console.log(copy);
    // { foo: 1, bar: 2 }
    // The value of copy.bar is obj.bar's getter's return value.

    // This is an assign function that copies full descriptors
    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                return descriptors;
            }, {});

            // By default, Object.assign copies enumerable Symbols, too
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym);
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor;
                }
            });
            Object.defineProperties(target, descriptors);
        });
        return target;
    }

    copy = completeAssign({}, obj);
    console.log(copy);
    // { foo:1, get bar() { return 2 } }
}

/**
 * Object.create()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 *
 * The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
 *
 * Syntax
 * Object.create(proto, [propertiesObject])
 *
 * Parameters
 *      proto
 *      The object which should be the prototype of the newly-created object.
 *
 *      propertiesObject Optional
 *      If specified and not undefined, an object whose enumerable own properties (that is, those properties defined
 *      upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added
 *      to the newly-created object, with the corresponding property names. These properties correspond to the second
 *      argument of Object.defineProperties().
 *
 * Return value
 * A new object with the specified prototype object and properties.
 *
 * Exceptions
 * The proto parameter has to be either
 *
 * null or
 * an Object excluding primitive wrapper objects.
 * If proto is neither of these a TypeError is thrown.
 */
function test7() {
    test7_1();
}

function test7_1() {
    const person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };

    const me = Object.create(person);

    me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
    me.isHuman = true; // inherited properties can be overwritten

    me.printIntroduction();
    // expected output: "My name is Matthew. Am I human? true"
}