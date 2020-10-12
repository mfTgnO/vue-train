/**
 * JSON
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 *
 * The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting
 * values to JSON. It can't be called or constructed, and aside from its two method properties,
 * it has no interesting functionality of its own.
 */

// test1();
test2();

/**
 * JSON.parse()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
 *
 * The JSON.parse() method parses a JSON string, constructing the JavaScript value or object
 * described by the string. An optional reviver function can be provided to perform a
 * transformation on the resulting object before it is returned.
 *
 * Syntax
 * JSON.parse(text[, reviver])
 *
 * Parameters
 * text
 *      The string to parse as JSON. See the JSON object for a description of JSON syntax.
 * reviver Optional
 *      If a function, this prescribes how the value originally produced by parsing is transformed, before being returned.
 * Return value
 * The Object, Array, string, number, boolean, or null value corresponding to the given JSON text.
 * Exceptions
 * Throws a SyntaxError exception if the string to parse is not valid JSON.
 */
function test1() {
    // test1_1();
    // test1_2();
    // test1_3();
    // test1_4();
    test1_5();
}

/**
 * Using JSON.parse()
 */
function test1_1() {
    console.log(JSON.parse('{}'));              // {}
    console.log(JSON.parse('true'));            // true
    console.log(JSON.parse('"foo"'));           // "foo"
    console.log(JSON.parse('[1, 5, "false"]')); // [1, 5, "false"]
    console.log(JSON.parse('null'));            // null
}

/**
 * Using the reviver parameter
 *
 * If a reviver is specified, the value computed by parsing is transformed before being returned.
 * Specifically, the computed value and all its properties (beginning with the most nested properties
 * and proceeding to the original value itself) are individually run through the reviver. Then it is called,
 * with the object containing the property being processed as this, and with the property name as a string,
 * and the property value as arguments. If the reviver function returns undefined (or returns no value, for example,
 * if execution falls off the end of the function), the property is deleted from the object. Otherwise, the property
 * is redefined to be the return value.
 *
 * If the reviver only transforms some values and not others, be certain to return all untransformed values as-is,
 * otherwise, they will be deleted from the resulting object.
 */
function test1_2() {
    var result = JSON.parse('{"p": 5}', (key, value) =>
        typeof value === 'number'
            ? value * 2 // return value * 2 for numbers
            : value     // return everything else unchanged
    );
    console.log(result);
    // { p: 10 }
}

function test1_3() {
    JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
        console.log(key); // log the current property name, the last is "".
        return value;     // return the unchanged property value.
    });

    // 1
    // 2
    // 4
    // 6
    // 5
    // 3
    // ""
}

/**
 * JSON.parse() does not allow trailing commas
 */
function test1_4() {
    // both will throw a SyntaxError
    JSON.parse('[1, 2, 3, 4, ]');
    JSON.parse('{"foo" : 1, }');
}

/**
 * JSON.parse() does not allow single quotes
 */
function test1_5() {
    // will throw a SyntaxError
    JSON.parse("{'foo': 1}");
}

/**
 * JSON.stringify()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 *
 * The JSON.stringify() method converts a JavaScript object or value to a JSON string,
 * optionally replacing values if a replacer function is specified or optionally including
 * only the specified properties if a replacer array is specified.
 *
 * Syntax
 * JSON.stringify(value[, replacer[, space]])
 *
 * Parameters
 * value
 *      The value to convert to a JSON string.
 * replacer Optional
 *      A function that alters the behavior of the stringification process, or an array of String and Number
 *      that serve as an allowlist for selecting/filtering the properties of the value object to be included
 *      in the JSON string. If this value is null or not provided, all properties of the object are included
 *      in the resulting JSON string.
 * space Optional
 *      A String or Number object that's used to insert white space into the output JSON string for readability purposes.
 *      If this is a Number, it indicates the number of space characters to use as white space; this number is capped
 *      at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used.
 *
 *      If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used
 *      as white space. If this parameter is not provided (or is null), no white space is used.
 *
 * Return value
 * A JSON string representing the given value.
 *
 * Exceptions
 * Throws a TypeError ("cyclic object value") exception when a circular reference is found.
 * Throws a TypeError ("BigInt value can't be serialized in JSON") when trying to stringify a BigInt value.
 *
 * Description
 * JSON.stringify() converts a value to JSON notation representing it:
 * 1.If the value has a toJSON() method, it's responsible to define what data will be serialized.
 *
 * 2.Boolean, Number, and String objects are converted to the corresponding primitive values during stringification,
 * in accord with the traditional conversion semantics.
 *
 * 3.undefined, Functions, and Symbols are not valid JSON values. If any such values are encountered during conversion
 * they are either omitted (when found in an object) or changed to null (when found in an array). JSON.stringify() can
 * return undefined when passing in "pure" values like JSON.stringify(function(){}) or JSON.stringify(undefined).
 *
 * 4.All Symbol-keyed properties will be completely ignored, even when using the replacer function.
 *
 * 5.The instances of Date implement the toJSON() function by returning a string (the same as date.toISOString()). Thus, they are treated as strings.
 *
 * 6.The numbers Infinity and NaN, as well as the value null, are all considered null.
 *
 * 7.All the other Object instances (including Map, Set, WeakMap, and WeakSet) will have only their enumerable properties serialized.
 */
function test2() {
    // test2_1();
    // test2_2();
    // test2_3();
    // test2_4();
    // test2_5();
    // test2_6();
    // test2_7();
    test2_8();
}

function test2_1() {
    console.log(JSON.stringify({x: 5, y: 6}));
    // expected output: "{"x":5,"y":6}"

    console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
    // expected output: "[3,"false",false]"

    console.log(JSON.stringify({
        x: [10, undefined, function () {
        }, Symbol('')]
    }));
    // expected output: "{"x":[10,null,null,null]}"

    console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
    // expected output: ""2006-01-02T15:04:05.000Z""
}

function test2_2() {
    console.log(JSON.stringify({}));                    // '{}'
    console.log(JSON.stringify(true));                  // 'true'
    console.log(JSON.stringify('foo'));                 // '"foo"'
    console.log(JSON.stringify([1, 'false', false]));   // '[1,"false",false]'
    console.log(JSON.stringify([NaN, null, Infinity])); // '[null,null,null]'
    console.log(JSON.stringify({x: 5}));              // '{"x":5}'

    console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
    // '"2006-01-02T15:04:05.000Z"'

    console.log(JSON.stringify({x: 5, y: 6}));
    // '{"x":5,"y":6}'
    console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
    // '[3,"false",false]'

    // String-keyed array elements are not enumerable and make no sense in JSON
    let a = ['foo', 'bar'];
    a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
    console.log(JSON.stringify(a));
    // '["foo","bar"]'

    console.log(JSON.stringify({
        x: [10, undefined, function () {
        }, Symbol('')]
    }));
    // '{"x":[10,null,null,null]}'
}

/**
 * Standard data structures
 */
function test2_3() {
    console.log(JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]));
    // '[{},{},{},{}]'
}

/**
 * TypedArray
 */
function test2_4() {
    console.log(JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]));
    // '[{"0":1},{"0":1},{"0":1}]'
    console.log(JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]));
    // '[{"0":1},{"0":1},{"0":1},{"0":1}]'
    console.log(JSON.stringify([new Float32Array([1]), new Float64Array([1])]));
    // '[{"0":1},{"0":1}]'
}

/**
 * toJSON()
 */
function test2_5() {
    console.log(JSON.stringify({
        x: 5, y: 6, toJSON() {
            return this.x + this.y;
        }
    }));
    // '11'
}

/**
 * Symbols:
 */
function test2_6() {
    console.log(JSON.stringify({x: undefined, y: Object, z: Symbol('')}));
    // '{}'
    console.log(JSON.stringify({[Symbol('foo')]: 'foo'}));
    // '{}'
    console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, [Symbol.for('foo')]));
    // '{}'
    console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, function (k, v) {
        if (typeof k === 'symbol') {
            return 'a symbol';
        }
    }));
}

/**
 * undefined
 */
function test2_7() {
    // Non-enumerable properties:
    console.log(JSON.stringify(Object.create(null, {x: {value: 'x', enumerable: false}, y: {value: 'y', enumerable: true}})));
    // '{"y":"y"}'
}

/**
 * BigInt values throw
 */
function test2_8() {
    JSON.stringify({x: 2n});
    // TypeError: BigInt value can't be serialized in JSON
}