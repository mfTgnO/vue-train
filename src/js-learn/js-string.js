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
// test28();
// test29();
// test30();
// test31();
// test32();
// test33();
// test34();
// test35();
// test36();
// test37();
// test38();
// test39();
// test40();
// test41();
// test42();
// test43();
// test44();
// test45();
// test46();
// test47();
// test48();
test49();

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
 * String.prototype.substring()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
 *
 * The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
 */
function test3() {
    // var url = '../../../doctor_train/ui/module/schoolMain.htm';
    var url = 'http://localhost:8081/doctor_train/ui/module/schoolMain.htm';
    var domain = url.substring(0, url.indexOf('/' + url.split('/')[3] + '/'));
    var url_ = url.substring(url.indexOf('/' + url.split('/')[3] + '/'), url.length);

    console.log(url);
    console.log(domain);
    console.log(url_);

    const str = 'Mozilla';
    console.log(str.substring(1, 3));
    // expected output: "oz"

    console.log(str.substring(2));
    // expected output: "zilla"

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
 *
 * Syntax
 * const newStr = str.replace(regexp|substr, newSubstr|function)
 *
 * regexp (pattern)
 * A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified function.
 *
 * substr
 * A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression.
 * Only the first occurrence will be replaced.
 *
 * newSubstr (replacement)
 * The String that replaces the substring specified by the specified regexp or substr parameter.
 * A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
 *
 * function (replacement)
 * A function to be invoked to create the new substring to be used to replace the
 * matches to the given regexp or substr. The arguments supplied to this function are
 * described in the "Specifying a function as a parameter" section below.
 */
function test28() {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    const regex = /dog/gi;

    console.log(p.replace(regex, 'ferret'));
    // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

    console.log(p.replace('dog', 'monkey'));
    // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
}

/**
 * String.prototype.replaceAll()
 *
 * The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement can be a string or a
 * function to be called for each match.
 *
 * Syntax
 * const newStr = str.replaceAll(regexp|substr, newSubstr|function)
 *
 * regexp (pattern)
 * A RegExp object or literal with the global flag. The matches are replaced with newSubstr
 * or the value returned by the specified function. A RegExp without the global ("g")
 * flag will throw a TypeError: "replaceAll must be called with a global RegExp".
 *
 * substr
 * A String that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression.
 *
 * newSubstr (replacement)
 * The String that replaces the substring specified by the specified regexp or substr parameter.
 * A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
 *
 * function (replacement)
 * A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr.
 * The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.
 */
function test29() {
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

    const regex = /dog/gi;

    console.log(p.replaceAll(regex, 'ferret'));
    // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

    console.log(p.replaceAll('dog', 'monkey'));
    // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
}

/**
 * String.prototype.search()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
 *
 * The search() method executes a search for a match between a regular expression and this String object.
 */
function test30() {
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

    // any character that is not a word character or whitespace
    const regex = /[^\w\s]/g;

    console.log(paragraph.search(regex));
    // expected output: 43

    console.log(paragraph[paragraph.search(regex)]);
    // expected output: "."
}

/**
 * String.prototype.slice()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
 *
 * Syntax
 * str.slice(beginIndex[, endIndex])
 *
 * beginIndex
 * The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3 it is treated as str.length - 3.)
 * If beginIndex is greater than or equal to str.length, slice() returns an empty string.
 *
 * endIndex Optional
 * The zero-based index before which to end extraction. The character at this index will not be included.
 * If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3 it is treated as str.length - 3.)
 */
function test31() {
    const str = 'The quick brown fox jumps over the lazy dog.';

    console.log(str.slice(31));
    // expected output: "the lazy dog."

    console.log(str.slice(4, 19));
    // expected output: "quick brown fox"

    console.log(str.slice(-4));
    // expected output: "dog."

    console.log(str.slice(-9, -5));
    // expected output: "lazy"
}

/**
 * String.prototype.split()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
 * The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
 *
 * Syntax
 * str.split([separator[, limit]])
 *
 * Parameters
 * separator Optional
 * The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.
 *
 * The simplest case is when separator is just a single character; this is used to split a delimited string.  For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like this: myString.split("\t").
 * If separator contains multiple characters, that entire character sequence must be found in order to split.
 * If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
 * If separator appears at the beginning (or end) of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first (or last) position of the returned array.
 * If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
 * Warning: When the empty string ("") is used as a separator, the string is not split by user-perceived characters (grapheme clusters) or unicode characters (codepoints), but by UTF-16 codeunits. This destroys surrogate pairs. See “How do you get a string to a character array in JavaScript?” on StackOverflow.
 *
 * limit Optional
 * A non-negative integer limiting the number of pieces. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.
 *
 * The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
 * If limit is 1, str.split(separator)[0] is returned
 * If limit is 0, [] is returned.
 */
function test32() {
    const str = 'The quick brown fox jumps over the lazy dog.';

    const words = str.split(' ');
    console.log(words[3]);
    // expected output: "fox"

    const chars = str.split('');
    console.log(chars[8]);
    // expected output: "k"

    const strCopy = str.split();
    console.log(strCopy);
    // expected output: Array ["The quick brown fox jumps over the lazy dog."]
}

/**
 * String.prototype.startsWith()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 *
 * The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
 *
 * Syntax
 * str.startsWith(searchString[, position])
 *
 * Parameters
 *
 * searchString
 * The characters to be searched for at the start of this string.
 *
 * position Optional
 * The position in this string at which to begin searching for searchString. Defaults to 0.
 *
 * Return value
 * true if the given characters are found at the beginning of the string; otherwise, false.
 *
 * DescriptionThis method lets you determine whether or not a string begins with another string. This method is case-sensitive.
 */
function test33() {
    const str1 = 'Saturday night plans';

    console.log(str1.startsWith('Sat'));
    // expected output: true

    console.log(str1.startsWith('Sat', 3));
    // expected output: false

}

/**
 * String.prototype.toLocaleLowerCase()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
 *
 * The toLocaleLowerCase() method returns the calling string value converted to lower case, according to any locale-specific case mappings.
 */
function test34() {
    const dotted = 'İstanbul';

    console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
    // expected output: "i̇stanbul"

    console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
    // expected output: "istanbul"

}

/**
 * The toLocaleUpperCase() method returns the calling string value converted to upper case, according to any locale-specific case mappings.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
 */
function test35() {
    const city = 'istanbul';

    console.log(city.toLocaleUpperCase('en-US'));
    // expected output: "ISTANBUL"

    console.log(city.toLocaleUpperCase('TR'));
    // expected output: "İSTANBUL"
}

/**
 * String.prototype.toLowerCase()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 */
function test36() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    console.log(sentence.toLowerCase());
    // expected output: "the quick brown fox jumps over the lazy dog."
}

/**
 * String.prototype.toString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
 *
 * The toString() method returns a string representing the specified object.
 */
function test37() {
    var str = new String('foo');
    console.log(str);
    console.log(str.toString());
}

/**
 * String.prototype.toUpperCase()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *
 * The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
 */
function test38() {
    const sentence = 'The quick brown fox jumps over the lazy dog.';

    console.log(sentence.toUpperCase());
    // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
}

/**
 * String.prototype.trim()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
 *
 * The trim() method removes whitespace from both ends of a string.
 * Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
 */
function test39() {
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // expected output: "   Hello world!   ";

    console.log(greeting.trim());
    // expected output: "Hello world!";
}

/**
 * String.prototype.trimEnd()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
 *
 * The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
 */
function test40() {
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // expected output: "   Hello world!   ";

    console.log(greeting.trimEnd());
    // expected output: "   Hello world!";
}

/**
 * String.prototype.trimStart()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart
 *
 * The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
 */
function test41() {
    const greeting = '   Hello world!   ';

    console.log(greeting);
    // expected output: "   Hello world!   ";

    console.log(greeting.trimStart());
    // expected output: "Hello world!   ";
}

/**
 * String.prototype.valueOf()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf
 *
 * The valueOf() method returns the primitive value of a String object.
 */
function test42() {
    const stringObj = new String('foo');

    console.log(stringObj);
    // expected output: String { "foo" }

    console.log(stringObj.valueOf());
    // expected output: "foo"
}

/**
 * String.prototype[@@iterator]()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator
 *
 * The [@@iterator]() method returns a new Iterator object that iterates over the code points of a String value, returning each code point as a String value.
 *
 * Syntax
 * str[Symbol.iterator]
 */
function test43() {
    // test43_1();
    // test43_2();
    test43_3();
}

function test43_1() {
    const str = 'The quick red fox jumped over the lazy dog\'s back.';

    const iterator = str[Symbol.iterator]();
    let theChar = iterator.next();

    while (!theChar.done && theChar.value !== ' ') {
        console.log(theChar.value);
        theChar = iterator.next();
        // expected output: "T"
        //                  "h"
        //                  "e"
    }
}

/**
 * Using [@@iterator]()
 */
function test43_2() {
    var str = 'A\uD835\uDC68';

    var strIter = str[Symbol.iterator]();

    console.log(strIter.next().value); // "A"
    console.log(strIter.next().value); // "\uD835\uDC68"
}

/**
 * Using [@@iterator]() with for..of
 */
function test43_3() {
    var str = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

    for (var v of str) {
        console.log(v);
    }
    // "A"
    // "\uD835\uDC68"
    // "B"
    // "\uD835\uDC69"
    // "C"
    // "\uD835\uDC6A"
}

/**
 * String.raw()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
 *
 * The static String.raw() method is a tag function of template literals.
 * This is similar to the r prefix in Python, or the @ prefix in C# for string literals.
 * (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template strings,
 * that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.
 */
function test44() {
    // test44_1();
    // test44_2();
    test44_3();
}

function test44_1() {
    // Create a variable that uses a Windows
    // path without escaping the backslashes:
    const filePath = "C:\Development\profile\aboutme.html";

    console.log(filePath);
    console.log(`The file was uploaded from: ${filePath}`);
}

function test44_2() {
    // Create a variable that uses a Windows
    // path without escaping the backslashes:
    const filePath = String.raw`C:\Development\profile\aboutme.html`;

    console.log(`The file was uploaded from: ${filePath}`);
    // expected output: "The file was uploaded from: C:\Development\profile\aboutme.html"
}

function test44_3() {
    String.raw`Hi\n${2 + 3}!`;
    // 'Hi\n5!', the character after 'Hi'
    // is not a newline character,
    // '\' and 'n' are two characters.

    String.raw`Hi\u000A!`;
    // 'Hi\u000A!', same here, this time we will get the
    //  \, u, 0, 0, 0, A, 6 characters.
    // All kinds of escape characters will be ineffective
    // and backslashes will be present in the output string.
    // You can confirm this by checking the .length property
    // of the string.

    let name = 'Bob';
    String.raw`Hi\n${name}!`;
    // 'Hi\nBob!', substitutions are processed.

    // Normally you would not call String.raw() as a function,
    // but to simulate `foo${2 + 3}bar${'Java' + 'Script'}baz` you can do:
    String.raw({
        raw: ['foo', 'bar', 'baz']
    }, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
    // Notice the first argument is an object with a 'raw' property,
    // whose value is an iterable representing the separated strings
    // in the template literal.
    // The rest of the arguments are the substitutions.

    // The first argument’s 'raw' value can be any iterable, even a string!
    // For example, 'test' is treated as ['t', 'e', 's', 't'].
    // The following is equivalent to
    // `t${0}e${1}s${2}t`:
    String.raw({raw: 'test'}, 0, 1, 2); // 't0e1s2t'
}

function test45() {
    var msg1 = 'Hello, World!';
    var msg2 = 'Hello,\nWorld!';
    console.log(msg1);
    console.log(msg2);
}

function test46() {
    test46_1();
    // test46_2();
}

function test46_1() {
    var phone = 1000;
    for (let i = 1; i <= 100; i++) {
        // console.log(name + i);
        // console.log(parseInt(id) + 1);
        // console.log(parseInt(id2) + i);
        var num = phone + i;
        console.log('1360000' + num);

    }
}

function test46_2() {
    // var name = '陈粒';
    var name = '陈粒';
    // var id = BigInt('220181199302192550');
    var id = 220181199302192550;
    var id2 = 1000;
    for (let i = 1; i <= 100; i++) {
        // console.log(name + i);
        // console.log(parseInt(id) + 1);
        // console.log(parseInt(id2) + i);
        var num = id2 + i;
        console.log('22018119930219' + num);

    }
}

function test47() {
    var str = "http://localhost:8070/doctor_train/ui/spirit/exercises.htm?type=0&existexercisesidlist=3181";
    // // var str = "http://localhost:8070/doctor_train/ui/spirit/exercises.htm?type=0";
    // var split = str.split("existexercisesidlist=");
    // console.log(split.length);
    // console.log(split);
    // if(){
    //
    // }

    var existexercisesidlist = get("existexercisesidlist", str);
    console.log(existexercisesidlist);

}

function get(param, url) {
    url = url ? url : window.location.search;
    var params = (url.substr(url.indexOf("?") + 1)).split("&");
    if (params != null) {
        for (var i = 0; i < params.length; i++) {
            var strs = params[i].split("=");
            if (strs[0] == param) {
                return decodeURI(strs[1]);
            }
        }
    }
};

function test48() {
    var src = "http://localhost:8070/doctor_train/ui/module/roundexam.htm?1=36319";
    var lastIndexOf = src.lastIndexOf("/");
    console.log(lastIndexOf);
    var s = src.substring(0, lastIndexOf + 1);
    console.log(s);
    var x = s + "roundexamdetail.htm";
    console.log(x);
}

function test49() {
    // var id = '371402197212097416';
    var id = '37140219';
    var year = id.substring(6, 10);
    var month = id.substring(10, 12);
    console.log(year);
    console.log(month);
}