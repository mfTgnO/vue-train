/**
 * JavaScript Date objects represent a single moment in time in a platform-independent format.
 * Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
 *
 * TC39 is working on Temporal, a new Date/Time API.
 * Read more about it on the Igalia blog and fill out the survey. It needs real-world feedback from web developers, but is not yet ready for production use!
 *
 * Description
 * The ECMAScript epoch and timestamps
 * A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC.
 * This date and time is the same as the UNIX epoch, which is the predominant base value for computer-recorded date and time values.
 *
 * Note: It's important to keep in mind that while the time value at the heart of a Date object is UTC,
 * the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.
 *
 * It should be noted that the maximum Date is not of the same value as the maximum safe integer (Number.MAX_SAFE_INTEGER is 9,007,199,254,740,991).
 * Instead, it is defined in ECMA-262 that a maximum of ±100,000,000 (one hundred million) days relative to January 1, 1970 UTC
 * (that is, April 20, 271821 BCE ~ September 13, 275760 CE) can be represented by the standard Date object (equivalent to ±8,640,000,000,000,000 milliseconds).
 *
 * Date format and time zone conversions
 * There are a number of methods available to obtain a date in various formats, as well as to perform time zone conversions.
 * Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard
 * time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian
 * that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.
 *
 * In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()),
 * there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).
 */
test1();
// test2();
// test3();

/**
 * Date.now()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 *
 * The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
 *
 * Syntax
 * var timeInMs = Date.now();
 *
 * Return value
 * A Number representing the milliseconds elapsed since the UNIX epoch.
 */
function test1() {
    // this example takes 2 seconds to run
    const start = Date.now();

    console.log('starting timer...');
    console.log(start);
    // expected output: starting timer...

    setTimeout(() => {
        const millis = Date.now() - start;

        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
        // expected output: seconds elapsed = 2
    }, 2000);
}

function test2() {
    var date = new Date().toLocaleString();
    console.log(date);
}

/**
 * Date.UTC()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
 *
 * The Date.UTC() method accepts parameters similar to the Date constructor, but treats them as UTC.
 * It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
 *
 * Syntax
 * Since ECMAScript 2017:
 * Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
 *
 * ECMAScript 2016 and earlier: (month used to be required)
 * Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
 *
 * Parameters
 * year
 * A full year.
 *
 * month
 * An integer between 0 (January) and 11 (December) representing the month. (Up through ECMAScript 2016, month was a required parameter. As of ES2017, it no longer is.)
 *
 * day Optional
 * An integer between 1 and 31 representing the day of the month. If omitted, defaults to 1.
 *
 * hour Optional
 * An integer between 0 and 23 representing the hours. If omitted, defaults to 0.
 *
 * minute Optional
 * An integer between 0 and 59 representing the minutes. If omitted, defaults to 0.
 *
 * second Optional
 * An integer between 0 and 59 representing the seconds. If omitted, defaults to 0.
 *
 * millisecond Optional
 * An integer between 0 and 999 representing the milliseconds. If omitted, defaults to 0.
 *
 * Return value
 * A number representing the number of milliseconds for the given date since January 1, 1970, 00:00:00, UTC.
 *
 * Description
 * UTC() takes comma-delimited date and time parameters and returns the number of milliseconds between January 1, 1970, 00:00:00,
 * universal time and the specified date and time.
 * Years between 0 and 99 are converted to a year in the 20th century (1900 + year). For example, 95 is converted to the year 1995.
 *
 * The UTC() method differs from the Date constructor in two ways:
 *      1.Date.UTC() uses universal time instead of the local time.
 *      2.Date.UTC() returns a time value as a number instead of creating a Date object.
 *
 * If a parameter is outside of the expected range, the UTC() method updates the other parameters to accommodate the value.
 * For example, if 15 is used for month, the year will be incremented by 1 (year + 1) and 3 will be used for the month.
 * UTC() is a static method of Date, so it's called as Date.UTC() rather than as a method of a Date instance.
 */
function test3() {
    const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
    const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

    console.log(utcDate1.toUTCString());
    // expected output: Fri, 02 Feb 1996 03:04:05 GMT

    console.log(utcDate2.toUTCString());
    // expected output: Sun, 31 Dec 1899 00:00:00 GMT
}

/**
 * function test3() {
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
 *
 * The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since
 * January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31).
 *
 * It is not recommended to use Date.parse as until ES5, parsing of strings was entirely implementation dependent.
 * There are still many differences in how different hosts parse date strings, therefore date strings should be
 * manually parsed (a library can help if many different formats are to be accommodated).
 */
function test4() {

}