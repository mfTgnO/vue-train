// test1();
test2();
/**
 * How to Deep Clone an Array in JavaScript
 * https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig#:~:text=%20How%20to%20Deep%20Clone%20an%20Array%20in,Array%20of%20Objects%20in%20Javascript%3F%20%20More%20
 */
function test1() {
    const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
    JSON.parse(JSON.stringify(numbers));

// Using Lodash
    _.cloneDeep(numbers);
}

function test2() {
    let nestedArray = [1, [2], 3];
    let arrayCopy = JSON.parse(JSON.stringify(nestedArray));

    // Make some changes
    arrayCopy[0] = '👻'; // change shallow element
    arrayCopy[1][0] = '💩'; // change nested element
    console.log(arrayCopy); // [ '👻', [ '💩' ], 3 ]

    // ✅ Nested array NOT affected
    console.log(nestedArray); //  1, [ 2 ], 3 ]
}