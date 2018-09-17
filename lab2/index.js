const {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
} = require('./geometry');
const {
  deepEquality,
  uniqueElements,
  countOfEachCharacterInString
} = require('./utilities');

const obj1 = { a: 2, b: 3 };
const obj2 = { b: 3, a: 2 };
const obj3 = { c: { d: 1 }, a: { b: undefined } };
const obj4 = { a: { b: undefined }, c: { d: 1 } };
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
console.log(uniqueElements([1, 2, 2])); // 2
console.log(uniqueElements([1, 2, '2'])); // 3
console.log(uniqueElements([undefined, 'undefined', ['yo', 1], { a: 'a' }])); // 4

console.log('----------------countOfEachCharacterInString()----------------');
console.log(countOfEachCharacterInString('')); // {}
console.log(countOfEachCharacterInString(' ')); // { ' ': 1 }
console.log(countOfEachCharacterInString('abcba')); // { a: 2, b: 2, c: 1 }
console.log(countOfEachCharacterInString('a b c b a')); // { a: 2, ' ': 4, b: 2, c: 1 }
console.log(countOfEachCharacterInString('Hello, World!')); // { H: 1, e: 1, l: 3, o: 2, ',': 1, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }

console.log('----------------volumeOfRectangularPrism()----------------');
console.log(volumeOfRectangularPrism(1, 2, 3)); // 6
console.log(volumeOfRectangularPrism(100, 200, 300)); // 6000000
console.log(volumeOfRectangularPrism(0.1, 2, 30)); // 6
console.log(volumeOfRectangularPrism(0.1, 2000, 300)); // 60000
console.log(volumeOfRectangularPrism(0.1, 2, 300)); // 60

console.log('----------------surfaceAreaOfRectangularPrism()----------------');
console.log(surfaceAreaOfRectangularPrism(1, 2, 3)); // 22
console.log(surfaceAreaOfRectangularPrism(100, 200, 300)); // 220000
console.log(surfaceAreaOfRectangularPrism(0.1, 2, 30)); // 126.4
console.log(surfaceAreaOfRectangularPrism(0.1, 2000, 300)); // 1200460
console.log(surfaceAreaOfRectangularPrism(0.1, 2, 300)); // 1260.4

console.log('----------------volumeOfSphere()----------------');
console.log(volumeOfSphere(0.1)); // 0.004188790204786391
console.log(volumeOfSphere(1)); // 4.1887902047863905
console.log(volumeOfSphere(10)); // 4188.790204786391
console.log(volumeOfSphere(100)); // 4188790.2047863905
console.log(volumeOfSphere(1000)); // 4188790204.7863903

console.log('----------------surfaceAreaOfSphere()----------------');
console.log(surfaceAreaOfSphere(0.1)); // 0.12566370614359174
console.log(surfaceAreaOfSphere(1)); // 12.566370614359172
console.log(surfaceAreaOfSphere(10)); // 1256.6370614359173
console.log(surfaceAreaOfSphere(100)); // 125663.70614359173
console.log(surfaceAreaOfSphere(1000)); // 12566370.614359172
