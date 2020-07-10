// test1();
// test2();

// test3();
// test4();
// test5();
// test6();
// test7();
// test8();
// test9();
// test10();
// test11();
// test12();
// test13();
// test14();
// test15();
// test16();
// test17();
// test18();
// test19();
// test20();
// test21();
// test22();
// test23();
// test24();
// test25();
// test26();
// test27();
test28();

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 *
 * replace
 */
function test1() {
    var str = 'ABCD';
    var replace = str.replace('B', 'X');
    console.log(replace);
    replace = str.replace('C', '');
    console.log(replace);
}

/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 *
 * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/indexof
 */
function test2() {
    var str1 = 'ABCD';
    console.log(str1.indexOf('B'));
    console.log(str1.indexOf('H'));

    var str2 = 'ABCDABCD';
    console.log(str2.indexOf('B', 1));
    console.log(str2.indexOf('B', 2));
}

/**
 * substring
 */
function test3() {
    // var url = '../../../doctor_train/ui/module/schoolMain.htm';
    var url = 'http://localhost:8081/doctor_train/ui/module/schoolMain.htm';
    var domain = url.substring(0, url.indexOf('/' + url.split('/')[3] + '/'));
    var url_ = url.substring(url.indexOf('/' + url.split('/')[3] + '/'), url.length);

    console.log(url);
    console.log(domain);
    console.log(url_);
}

/**
 * Creating strings
 */
function test4() {
    const string1 = "A string primitive";
    const string2 = 'Also a string primitive';
    const string3 = `Yet another string primitive`;
    const string4 = new String("A String object");

    console.log(string1);
    console.log(string2);
    console.log(string3);
    console.log(string4);
}

/**
 Character access
 */
function test5() {
    console.log('cat'.charAt(1));
    console.log('cat'[1]);
}

/**
 Comparing strings
 */
function test6() {
    let a = 'a';
    let b = 'b';
    if (a < b) { // true
        console.log(a + ' is less than ' + b)
    } else if (a > b) {
        console.log(a + ' is greater than ' + b)
    } else {
        console.log(a + ' and ' + b + ' are equal.')
    }
}

/**
 String primitives and String objects
 */
function test7() {
    let s_prim = 'foo';
    let s_obj = new String(s_prim);
    console.log(typeof s_prim);// string
    console.log(typeof s_obj);// object

    let s1 = '2 + 2';              // creates a string primitive
    let s2 = new String('2 + 2');  // creates a String object
    console.log(eval(s1));         // returns the number 4
    console.log(eval(s2));         // returns the string "2 + 2"
    console.log(eval(s2.valueOf()));  // returns the number 4
}

/**
 Escape notation

 Special characters can be encoded using escape notation:
 */
function test8() {
    // (where XXX is 1–3 octal digits; range of 0–377)
    // ISO-8859-1 character / Unicode code point between U+0000 and U+00FF
    console.log('\1');
    console.log('\50');
    console.log('\100');

    // \'
    // single quote
    console.log('\'');

    // \"
    // double quote
    console.log('\"');

    // \\
    // backslash
    console.log('\\');

    // \n
    // new line
    console.log('\n');

    // \r
    // carriage return
    console.log('\r');

    // \v
    // vertical tab
    console.log('\v');

    // \t
    // tab
    console.log('\t');

    // \b
    // backspace
    console.log('\b');

    // \f
    // form feed
    console.log('\f');
}

/**
 * Long literal strings
 */
function test9() {
    // Method 1
    // You can use the + operator to append multiple strings together, like this:
    let longString1 = "This is a very long string which needs " +
        "to wrap across multiple lines because " +
        "otherwise my code is unreadable.";

    // Method 2
    // You can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line.
    // Make sure there is no space or any other character after the backslash (except for a line break),
    // or as an indent; otherwise it will not work.
    let longString2 = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

    console.log(longString1);
    console.log(longString2);
}

/**
 * String length
 *
 * The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
 */
function test10() {
    const str = 'Life, the universe and everything. Answer:';

    console.log(`${str} ${str.length}`);
    // expected output: "Life, the universe and everything. Answer: 42"
}

/**
 * String.fromCharCode()
 *
 * The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
 */
function test11() {
    console.log(String.fromCharCode(189, 43, 190, 61));
    // expected output: "½+¾="
}

/**
 * String.fromCodePoint()
 * The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.
 */
function test12() {
    console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
    // expected output: "☃★♲你"
}

/**
 * String.prototype.charAt()
 * The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
 */
function test13() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const index = 4;

    console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
    // expected output: "The character at index 4 is q"
}

/**
 * String.prototype.charCodeAt()
 * The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
 */
function test14() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const index = 4;

    console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
    // expected output: "The character code 113 is equal to q"
}

/**
 * String.prototype.codePointAt()
 * The codePointAt() method returns a non-negative integer that is the Unicode code point value.
 */
function test15() {
    const icons = '☃★♲';

    console.log(icons.codePointAt(1));
    // expected output: "9733"
}

/**
 * String.prototype.concat()
 * The concat() method concatenates the string arguments to the calling string and returns a new string.
 *
 * Performance
 * It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method
 */
function test16() {
    const str1 = 'Hello';
    const str2 = 'World';

    console.log(str1.concat(' ', str2));
    // expected output: "Hello World"

    console.log(str2.concat(', ', str1));
    // expected output: "World, Hello"
}

/**
 * String.prototype.endsWith()
 * The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
 *
 *
 * str.endsWith(searchString[, length])
 *
 * searchString
 * The characters to be searched for at the end of str.
 *
 * length Optional
 * If provided, it is used as the length of str. Defaults to str.length.
 */
function test17() {
    const str1 = 'Cats are the best!';

    console.log(str1.endsWith('best', 17));
    // expected output: true

    const str2 = 'Is this a question';

    console.log(str2.endsWith('?'));
    // expected output: false
}

/**
 * String.prototype.includes()
 * The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
 */
function test18() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';
    const word = 'fox';

    console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
    // expected output: "The word "fox" is in the sentence"
}

/**
 * String.prototype.indexOf()
 * The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 */
function test19() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    const searchTerm = 'dog';
    const indexOfFirst = paragraph.indexOf(searchTerm);

    console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
    // expected output: "The index of the first "dog" from the beginning is 40"

    console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    // expected output: "The index of the 2nd "dog" is 52"
}

/**
 * String.prototype.lastIndexOf()
 * The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value,
 * searching backwards from fromIndex. Returns -1 if the value is not found.
 */
function test20() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    const searchTerm = 'dog';

    console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
    // expected output: "The index of the first "dog" from the end is 52"
}

/**
 * String.prototype.localeCompare()
 * The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
 *
 * Syntax
 * referenceStr.localeCompare(compareString[, locales[, options]])
 * compareString
 * The string against which the referenceStr is compared.
 * locales and options
 * These arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation-dependent.
 * See the Intl.Collator() constructor for details on these parameters and how to use them.
 */
function test21() {
    const a = 'réservé'; // with accents, lowercase
    const b = 'RESERVE'; // no accents, uppercase

    console.log(a.localeCompare(b));
    // expected output: 1
    console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));
    // expected output: 0

}

/**
 * String.prototype.match()
 * The match() method retrieves the result of matching a string against a regular expression.
 *
 * g    Global search
 */
function test22() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);

    console.log(found);
    // expected output: Array ["T", "I"]
}

/**
 * String.prototype.matchAll()
 * The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
 */
function test23() {
    let regexp = /t(e)(st(\d?))/g;
    let str = 'test1test2';

    let array = [...str.matchAll(regexp)];

    console.log(array[0]);
    // expected output: Array ["test1", "e", "st1", "1"]

    console.log(array[1]);
    // expected output: Array ["test2", "e", "st2", "2"]
}

/**
 * String.prototype.normalize()
 * The normalize() method returns the Unicode Normalization Form of the string.
 */
function test24() {
    const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
    const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

    console.log(`${name1}, ${name2}`);
    // expected output: "Amélie, Amélie"
    console.log(name1 === name2);
    // expected output: false
    console.log(name1.length === name2.length);
    // expected output: false

    const name1NFC = name1.normalize('NFC');
    const name2NFC = name2.normalize('NFC');

    console.log(`${name1NFC}, ${name2NFC}`);
    // expected output: "Amélie, Amélie"
    console.log(name1NFC === name2NFC);
    // expected output: true
    console.log(name1NFC.length === name2NFC.length);
    // expected output: true
}

/**
 * String.prototype.padEnd()
 *
 * The padEnd() method pads the current string with a given string (repeated, if needed) so that the
 * resulting string reaches a given length. The padding is applied from the end of the current string.
 *
 * Syntax
 * str.padEnd(targetLength [, padString])
 *
 * targetLength
 * The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
 *
 * padString Optional
 * The string to pad the current str with. If padString is too long to stay within targetLength,
 * it will be truncated: for left-to-right languages the left-most part and for right-to-left languages
 * the right-most will be applied. The default value for this parameter is " " (U+0020).
 */
function test25() {
    const str1 = 'Breaded Mushrooms';

    console.log(str1.padEnd(25, '.'));
    // expected output: "Breaded Mushrooms........"

    const str2 = '200';

    console.log(str2.padEnd(5));
    // expected output: "200  "

    console.log(str1.padEnd(2, '.'));
    // expected output: "Breaded Mushrooms"
}

/**
 * String.prototype.padStart()
 *
 * The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
 * The padding is applied from the start of the current string.
 *
 * Syntax
 * str.padStart(targetLength [, padString])
 *
 * targetLength
 * The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.
 *
 * padString Optional
 * The string to pad the current str with. If padString is too long to stay within the targetLength,
 * it will be truncated from the end. The default value is " " (U+0020 'SPACE').
 */
function test26() {
    let str = 'abc';

    console.log(str.padStart(10));
    console.log(str.padStart(10, "foo"));
    console.log(str.padStart(6, "123456"));
    console.log(str.padStart(8, "0"));
    console.log(str.padStart(1));
}

/**
 * String.prototype.repeat()
 *
 * The repeat() method constructs and returns a new string which contains the specified
 * number of copies of the string on which it was called, concatenated together.
 *
 * Syntax
 * str.repeat(count)
 *
 * count
 * An integer between 0 and +Infinity, indicating the number of times to repeat the string.
 */
function test27() {
    const chorus = 'Because I\'m happy. ';
    console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

    // expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

}

/**
 * String.prototype.replace()
 *
 * The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement can be a string or a function
 * to be called for each match. If pattern is a string, only the first occurrence will be replaced.
 * Syntax
 * str.repeat(count)
 *
 * count
 * An integer between 0 and +Infinity, indicating the number of times to repeat the string.
 */
function test28() {
    const chorus = 'Because I\'m happy. ';
    console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

    // expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "

}