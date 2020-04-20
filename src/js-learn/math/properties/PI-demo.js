/**
 * The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
 */
test1();

function test1() {
    console.log(Math.PI);
    console.log(calculateCircumference(10));
}

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}