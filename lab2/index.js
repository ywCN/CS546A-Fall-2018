const { deepEquality, uniqueElements } = require('./utilities');

const obj1 = { a: 2, b: 3 };
const obj2 = { b: 3, a: 2 };
const obj3 = { c: { d: 1 }, a: 2, b: undefined };
const obj4 = { a: 2, b: undefined, c: { d: 1 } };
const obj5 = { a: { b: { c: { d: 1, e: 3 } } } };
const obj6 = { a: { b: { c: { e: 3, d: 1 } } } };
const obj7 = { a: { b: { c: { d: 1 } } } };
console.log('----------------deepEquality()----------------');
console.log(deepEquality(obj1, obj2)); // true
console.log(deepEquality(obj3, obj4)); // true
console.log(deepEquality(obj5, obj6)); // true
console.log(deepEquality(obj1, obj5)); // false
console.log(deepEquality(obj6, obj7)); // false

console.log('----------------uniqueElements()----------------');
console.log(uniqueElements([])); // 0
console.log(uniqueElements([0])); // 1
console.log(uniqueElements([1, 2, 2, 3, 3, 3])); // 3
console.log(uniqueElements([1, 2, '2', 3, '3', undefined])); // 6
console.log(uniqueElements(['hello', 'hi', ['yo', 233], { meh: 'pizza' }])); // 4
