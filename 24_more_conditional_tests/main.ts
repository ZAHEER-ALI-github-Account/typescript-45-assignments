// question no 24

//Equality and unequality test:
console.log("equality test with strings: ","apple" === "apple");

//Equality and unequality test:
console.log("unequality test with strings: ",("apple" as string) != "orange");

//tests using the lower case function:
console.log("lower case function test: ","HELLO".toLowerCase() === "hello");

//numerical tests involving equality:
console.log("equality test with numbers: ", 26 === 26);

//numerical tests involving unequality:
console.log("unequality test with numbers: ", (26 as number) != 35);

//greater than test:
console.log("Greater than test: ", 10 > 5);

//less than test:
console.log("less than test: ", 5 < 10);

//greater than or equal to:
console.log("greater than or equal to test: ", 10 >= 10);

//less than or equal to:
console.log("less than or equal to test: ", 5 <= 10);

//test using "and" operators:
console.log("And operator test: ", 5===5 && 10 > 5);

//test using "or" operators:
console.log("or operator test: ", 5===5 || false);

//test whether an item is in array:
const fruits :string[]=["mango","banana","graps"];
console.log(`test "mango" in the array: `, fruits.includes("mango"));

//test whether an item is not in array:
console.log(`test "orange" is not in the array: `, !fruits.includes("orange"));