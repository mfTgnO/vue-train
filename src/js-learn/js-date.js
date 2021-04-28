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
test27_1();

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

/**
 * Date.prototype.toLocaleString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 *
 * The toLocaleString() method returns a string with a language sensitive representation of this date.
 *
 * The new locales and options arguments let applications specify the language whose formatting conventions should be used and customize the behavior of the function.
 *
 * In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation-dependent.
 *
 * Syntax
 * dateObj.toLocaleString([locales[, options]])
 *
 * Parameters
 * The locales and options arguments customize the behavior of the function and let applications
 * specify the language whose formatting conventions should be used. In implementations, which
 * ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.
 *
 * See the Intl.DateTimeFormat() constructor for details on these parameters and how to use them.
 *
 * The default value for each date-time component property is undefined. But, if the weekday,
 * year, month, and day properties are all undefined, then year, month, and day are assumed to be "numeric".
 *
 * Return value
 * A string representing the given date according to language-specific conventions.
 *
 * Performance
 * When formatting large numbers of dates, it is better to create an Intl.DateTimeFormat object and use the function provided by its format property.
 */
function test2() {
    var date = new Date().toLocaleString();
    console.log(date);

    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    // British English uses day-month-year order and 24-hour time without AM/PM
    console.log(event.toLocaleString('en-GB', {timeZone: 'UTC'}));
    // expected output: 20/12/2012, 03:00:00

    // Korean uses year-month-day order and 12-hour time with AM/PM
    console.log(event.toLocaleString('ko-KR', {timeZone: 'UTC'}));
    // expected output: 2012. 12. 20. 오전 3:00:00
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
 * Date.parse()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
 *
 * The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since
 * January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognized or, in some cases, contains illegal date values (e.g. 2015-02-31).
 *
 * It is not recommended to use Date.parse as until ES5, parsing of strings was entirely implementation dependent.
 * There are still many differences in how different hosts parse date strings, therefore date strings should be
 * manually parsed (a library can help if many different formats are to be accommodated).
 *
 * Syntax
 * Direct call:
 * Date.parse(dateString)
 *
 * Implicit call:
 * new Date(dateString)
 *
 * Parameters
 * dateString
 *      A string representing a simplification of the ISO 8601 calendar date extended format. (Other formats may be used, but results are implementation-dependent.)
 *
 * Return value
 * A number representing the milliseconds elapsed since January 1, 1970, 00:00:00 UTC and the date obtained by
 * parsing the given string representation of a date. If the argument doesn't represent a valid date, NaN is returned.
 */
function test4() {
    const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
    const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');

    console.log(unixTimeZero);
    // expected output: 0

    console.log(javaScriptRelease);
    // expected output: 818035920000
}

/**
 * Date.prototype.getDate()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
 *
 * The getDate() method returns the day of the month for the specified date according to local time.
 *
 * Syntax
 * dateObj.getDate()
 *
 * Return value
 * An integer number, between 1 and 31, representing the day of the month for the given date according to local time.
 */
function test5() {
    const birthday = new Date('August 19, 1975 23:15:30');
    const date1 = birthday.getDate();

    console.log(date1);
    // expected output: 19
}

/**
 * Date.prototype.getDay()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
 *
 * The getDay() method returns the day of the week for the specified date according to local time,
 * where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().
 *
 * Syntax
 * dateObj.getDay()
 *
 * Return value
 * An integer number, between 0 and 6, corresponding to the day of the week for the given date,
 * according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
 */
function test6() {
    const birthday = new Date('August 19, 1975 23:15:30');
    const day1 = birthday.getDay();
    // Sunday - Saturday : 0 - 6

    console.log(day1);
    // expected output: 2
}

/**
 * Date.prototype.getFullYear()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
 *
 * The getFullYear() method returns the year of the specified date according to local time.
 * Use this method instead of the getYear() method.
 */
function test7() {
    const moonLanding = new Date('July 20, 69 00:20:18');

    console.log(moonLanding.getFullYear());
    // expected output: 1969
}

/**
 * Date.prototype.getHours()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
 *
 * The getHours() method returns the hour for the specified date, according to local time.
 *
 * Syntax
 * dateObj.getHours()
 *
 * Return value
 * An integer number, between 0 and 23, representing the hour for the given date according to local time.
 */
function test8() {
    const birthday = new Date('March 13, 08 04:20');

    console.log(birthday.getHours());
    // expected output: 4
}

/**
 * Date.prototype.getMilliseconds()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
 *
 * The getMilliseconds() method returns the milliseconds in the specified date according to local time.
 *
 * Syntax
 * dateObj.getMilliseconds()
 *
 * Return value
 * A number, between 0 and 999, representing the milliseconds for the given date according to local time.
 */
function test9() {
    const moonLanding = new Date('July 20, 69 00:20:18');
    moonLanding.setMilliseconds(123);

    console.log(moonLanding.getMilliseconds());
    // expected output: 123
}

/**
 * Date.prototype.getMinutes()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
 *
 * The getMinutes() method returns the minutes in the specified date according to local time.
 */
function test10() {
    const birthday = new Date('March 13, 08 04:20');

    console.log(birthday.getMinutes());
    // expected output: 20
}

/**
 * Date.prototype.getMonth()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
 *
 * The getMonth() method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
 *
 * Syntax
 * dateObj.getMonth()
 *
 * Return value
 * An integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.
 */
function test11() {
    const moonLanding = new Date('July 20, 69 00:20:18');

    console.log(moonLanding.getMonth()); // (January gives 0)
    // expected output: 6
}

/**
 * Date.prototype.getSeconds()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
 *
 * The getSeconds() method returns the seconds in the specified date according to local time.
 */
function test12() {
    const moonLanding = new Date('July 20, 69 00:20:18');

    console.log(moonLanding.getSeconds());
    // expected output: 18
}

/**
 * Date.prototype.getTime()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
 *
 * The getTime() method returns the number of milliseconds* since the Unix Epoch.
 *
 * JavaScript uses milliseconds as the unit of measurement, whereas Unix Time is in seconds.
 *
 * getTime() always uses UTC for time representation. For example, a client browser in one timezone,
 * getTime() will be the same as a client browser in any other timezone.
 *
 * You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.
 *
 * Syntax
 * dateObj.getTime()
 *
 * Return value
 * A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.
 */
function test13() {
    const moonLanding = new Date('July 20, 69 00:20:18 GMT+00:00');

    // milliseconds since Jan 1, 1970, 00:00:00.000 GMT
    console.log(moonLanding.getTime());
    // expected output: -14254782000
}

/**
 * Date.prototype.getTimezoneOffset()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
 *
 * The getTimezoneOffset() method returns the time zone difference, in minutes, from current locale (host system settings) to UTC.
 *
 * Syntax
 * dateObj.getTimezoneOffset()
 *
 * Return value
 * A number representing the time-zone offset, in minutes, from the date based on current host system settings to UTC.
 */
function test14() {
    const date1 = new Date('August 19, 1975 23:15:30 GMT+07:00');
    const date2 = new Date('August 19, 1975 23:15:30 GMT-02:00');

    console.log(date1.getTimezoneOffset());
    // expected output: your local timezone offset in minutes
    // (eg -120). NOT the timezone offset of the date object.

    console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
    // expected output: true
}

/**
 * Date.prototype.setDate()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
 *
 * The setDate() method sets the day of the Date object relative to the beginning of the currently set month.
 */
function test15() {
    const event = new Date('August 19, 1975 23:15:30');

    event.setDate(24);

    console.log(event.getDate());
    // expected output: 24

    event.setDate(32);
    // Only 31 days in August!

    console.log(event.getDate());
    // expected output: 1
}

/**
 * Date.prototype.setFullYear()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
 *
 * The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.
 *
 * Syntax
 * dateObj.setFullYear(yearValue[, monthValue[, dateValue]])
 *
 * Parameters
 * yearValue
 *      An integer specifying the numeric value of the year, for example, 1995.
 * monthValue
 *      Optional. An integer between 0 and 11 representing the months January through December.
 * dateValue
 *      Optional. An integer between 1 and 31 representing the day of the month. If you specify the dateValue parameter, you must also specify the monthValue.
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
 */
function test16() {
    const event = new Date('August 19, 1975 23:15:30');

    event.setFullYear(1969);

    console.log(event.getFullYear());
    // expected output: 1969

    event.setFullYear(0);

    console.log(event.getFullYear());
    // expected output: 0
}

/**
 * Date.prototype.setHours()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
 *
 * The setHours() method sets the hours for a specified date according to local time,
 * and returns the number of milliseconds since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
 *
 * Syntax
 * dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
 *
 * Versions prior to JavaScript 1.3
 * dateObj.setHours(hoursValue)
 *
 * Parameters
 * hoursValue
 *      Ideally, an integer between 0 and 23, representing the hour. If a value greater than 23 is provided,
 *      the datetime will be incremented by the extra hours.
 * minutesValue
 *      Optional. Ideally, an integer between 0 and 59, representing the minutes. If a value greater than 59 is provided,
 *      the datetime will be incremented by the extra minutes.
 * secondsValue
 *      Optional. Ideally, an integer between 0 and 59, representing the seconds. If a value greater than 59 is provided,
 *      the datetime will be incremented by the extra seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.
 * msValue
 *      Optional. Ideally, a number between 0 and 999, representing the milliseconds. If a value greater than 999 is provided,
 *      the datetime will be incremented by the extra milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.
 *
 * Return value
 * The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.
 */
function test17() {
    const event = new Date('August 19, 1975 23:15:30');
    console.log(event);
    event.setHours(20);

    console.log(event);
    // expected output: Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)
    // (note: your timezone may vary)

    event.setHours(20, 21, 22);

    console.log(event);
    // expected output: Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)
}

/**
 * Date.prototype.setMilliseconds()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
 *
 * The setMilliseconds() method sets the milliseconds for a specified date according to local time.
 *
 * Syntax
 * dateObj.setMilliseconds(millisecondsValue)
 *
 * Parameters
 * millisecondsValue
 *      A number between 0 and 999, representing the milliseconds.
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
 *
 * Description
 * If you specify a number outside the expected range, the date information in the Date object is updated accordingly.
 * For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.
 */
function test18() {
    const event = new Date('August 19, 1975 23:15:30');

    console.log(event.getMilliseconds());
    // expected output: 0

    event.setMilliseconds(456);

    console.log(event.getMilliseconds());
    // expected output: 456
}

/**
 * Date.prototype.setMinutes()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes
 *
 * The setMinutes() method sets the minutes for a specified date according to local time.
 *
 * Syntax
 * dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
 *
 * Versions prior to JavaScript 1.3
 * dateObj.setMinutes(minutesValue)
 *
 * Parameters
 * minutesValue
 *      An integer between 0 and 59, representing the minutes.
 * secondsValue
 *      Optional. An integer between 0 and 59, representing the seconds. If you specify the secondsValue parameter, you must also specify the minutesValue.
 * msValue
 *      Optional. A number between 0 and 999, representing the milliseconds. If you specify the msValue parameter, you must also specify the minutesValue and secondsValue.
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
 *
 * Description
 * If you do not specify the secondsValue and msValue parameters, the values returned
 * from getSeconds() and getMilliseconds() methods are used.
 *
 * If a parameter you specify is outside of the expected range, setMinutes() attempts
 * to update the date information in the Date object accordingly. For example, if you use 100
 * for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.
 */
function test19() {
    const event = new Date('August 19, 1975 23:15:30');

    event.setMinutes(45);

    console.log(event.getMinutes());
    // expected output: 45

    console.log(event);
    // expected output: Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)
    // (note: your timezone may vary)
}

/**
 * Date.prototype.setMonth()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth
 *
 * The setMonth() method sets the month for a specified date according to the currently set year.
 *
 * Syntax
 * dateObj.setMonth(monthValue[, dayValue])
 *
 * Versions prior to JavaScript 1.3
 * dateObj.setMonth(monthValue)
 *
 * Parameters
 * monthValue
 * A zero-based integer representing the month of the year offset from the start of the year.
 * So, 0 represents January, 11 represents December, -1 represents December of the previous year,
 * and 12 represents January of the following year.
 *
 * dayValue
 * Optional. An integer from 1 to 31, representing the day of the month.
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
 *
 * Description
 * If you do not specify the dayValue parameter, the value returned from the getDate() method is used.
 *
 * If a parameter you specify is outside of the expected range, setMonth() attempts to update the date
 * information in the Date object accordingly. For example, if you use 15 for monthValue, the year will
 * be incremented by 1, and 3 will be used for month.
 *
 * The current day of month will have an impact on the behaviour of this method. Conceptually it will add
 * the number of days given by the current day of the month to the 1st day of the new month specified as the parameter,
 * to return the new date. For example, if the current value is 31st August 2016, calling setMonth with a value of 1
 * will return 2nd March 2016. This is because in 2016 February had 29 days.
 */
function test20() {
    const event = new Date('August 19, 1975 23:15:30');

    event.setMonth(3);

    console.log(event.getMonth());
    // expected output: 3

    console.log(event);
    // Sat Apr 19 1975 23:15:30 GMT+0100 (CET)
    // (note: your timezone may vary)
}

/**
 * Date.prototype.setSeconds()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds
 *
 * The setSeconds() method sets the seconds for a specified date according to local time.
 *
 * Syntax
 * dateObj.setSeconds(secondsValue[, msValue])
 *
 * Versions prior to JavaScript 1.3
 * dateObj.setSeconds(secondsValue)
 *
 * Parameters
 * secondsValue
 *      An integer between 0 and 59, representing the seconds.
 * msValue
 *      Optional. A number between 0 and 999, representing the milliseconds.
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.
 *
 * Description
 * If you do not specify the msValue parameter, the value returned from the getMilliseconds() method is used.
 *
 * If a parameter you specify is outside of the expected range, setSeconds() attempts to update the date
 * information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes
 * stored in the Date object will be incremented by 1, and 40 will be used for seconds.
 */
function test21() {
    const event = new Date('August 19, 1975 23:15:30');

    event.setSeconds(42);

    console.log(event.getSeconds());
    // expected output: 42

    console.log(event);
    // Sat Apr 19 1975 23:15:42 GMT+0100 (CET)
    // (note: your timezone may vary)
}

/**
 * Date.prototype.setTime()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
 *
 * The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
 *
 * Syntax
 * dateObj.setTime(timeValue)
 *
 * Parameters
 * timeValue
 *      An integer representing the number of milliseconds since 1 January 1970, 00:00:00 UTC.
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date (effectively, the value of the argument).
 */
function test22() {
    const event1 = new Date('July 1, 1999');
    const event2 = new Date();
    event2.setTime(event1.getTime());

    console.log(event1);
    // expected output: Thu Jul 01 1999 00:00:00 GMT+0200 (CEST)

    console.log(event2);
    // expected output: Thu Jul 01 1999 00:00:00 GMT+0200 (CEST)
    // (note: your timezone may vary)
}

/**
 * Date.prototype.toDateString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
 *
 * The toDateString() method returns the date portion of a Date object in English in the following format separated by spaces:
 *
 * 1.First three letters of the week day name
 * 2.First three letters of the month name
 * 3.Two digit day of the month, padded on the left a zero if necessary
 * 4.Four digit year (at least), padded on the left with zeros if necessary
 * E.g. "Thu Jan 01 1970".
 */
function test23() {
    const event = new Date(1993, 6, 28, 14, 39, 7);

    console.log(event.toString());
    // expected output: Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)
    // (note: your timezone may vary)

    console.log(event.toDateString());
    // expected output: Wed Jul 28 1993
}

/**
 * Date.prototype.toJSON()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
 *
 * The toJSON() method returns a string representation of the Date object.
 *
 * Syntax
 * dateObj.toJSON()
 *
 * Return value
 * A string representation of the given date.
 *
 * Description
 * Date instances refer to a specific point in time. Calling toJSON() returns a string (using toISOString()) representing the Date object's value.
 * This method is generally intended to, by default, usefully serialize Date objects during JSON serialization.
 *
 */
function test24() {
    const event = new Date('August 19, 1975 23:15:30 UTC');

    const jsonDate = event.toJSON();

    console.log(jsonDate);
    // expected output: 1975-08-19T23:15:30.000Z

    console.log(new Date(jsonDate).toUTCString());
    // expected output: Tue, 19 Aug 1975 23:15:30 GMT
}

/**
 * Date.prototype.toLocaleDateString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 *
 * The toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date.
 * The new locales and options arguments let applications specify the language whose formatting conventions should be used
 * and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments,
 * the locale used and the form of the string returned are entirely implementation dependent.
 *
 * Syntax
 * dateObj.toLocaleDateString([locales [, options]])
 *
 * Parameters
 * The locales and options arguments customize the behavior of the function and let applications specify the
 * language whose formatting conventions should be used. In implementations, which ignore the locales and
 * options arguments, the locale used and the form of the string returned are entirely implementation dependent.
 *
 * See the Intl.DateTimeFormat() constructor for details on these parameters and how to use them.
 *
 * The default value for each date-time component property is undefined, but if the weekday, year, month,
 * day properties are all undefined, then year, month, and day are assumed to be "numeric".
 *
 * Return value
 * A string representing the date portion of the given Date instance according to language-specific conventions.
 *
 * Performance
 * When formatting large numbers of dates, it is better to create an Intl.DateTimeFormat object and use the function provided by its format property.
 */
function test25() {
    const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    console.log(event.toLocaleDateString('de-DE', options));
    // expected output: Donnerstag, 20. Dezember 2012

    console.log(event.toLocaleDateString('ar-EG', options));
    // expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢

    console.log(event.toLocaleDateString(undefined, options));
    // expected output: Thursday, December 20, 2012 (varies according to default locale)
}

/**
 * Date.prototype.toString()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
 *
 * The toString() method returns a string representing the specified Date object.
 *
 * Syntax
 * dateObj.toString()
 *
 * Return value
 * A string representing the given date.
 *
 */
function test26() {
    const event = new Date('August 19, 1975 23:15:30');

    console.log(event.toString());
    // expected output: Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)
    // (note: your timezone may vary)

}

/**
 * Date.prototype.valueOf()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
 *
 * The valueOf() method returns the primitive value of a Date object.
 *
 * Syntax
 * dateObj.valueOf()
 *
 * Return value
 * The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date.
 *
 * Description
 * The valueOf() method returns the primitive value of a Date object as a number data type, the number of milliseconds since midnight 01 January, 1970 UTC.
 *
 * This method is functionally equivalent to the Date.prototype.getTime() method.
 *
 * This method is usually called internally by JavaScript and not explicitly in code.
 */
function test27() {
    const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

    console.log(date1.valueOf());
    // expected output: 823230245000

    const date2 = new Date('02 Feb 1996 03:04:05 GMT');

    console.log(date2.valueOf());
    // expected output: 823230245000

}

function test27_1() {
    const date1 = new Date("1970-01-01");
    const date2 = new Date("1970-01-02");

    console.log(date1);
    console.log(date2);
    console.log(date1 > date2);

}