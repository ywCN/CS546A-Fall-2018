const { deepEquality } = require('./utilities');

const obj1 = { a: 2, b: 3 };
const obj2 = { b: 3, a: 2 };
const obj3 = { c: { d: 1 }, a: 2, b: 4 };
const obj4 = { a: 2, b: 4, c: { d: 1 } };
const obj5 = { b: 2, a: 3, c: { d: 2 } };
console.log(deepEquality(obj1, obj2)); // true
console.log(deepEquality(obj1, obj3)); // false
console.log(deepEquality(obj3, obj4)); // true
console.log(deepEquality(obj3, obj5)); // false
console.log(deepEquality(obj4, obj5)); // false
