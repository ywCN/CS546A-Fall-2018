// assume property can only be Object or JS primitive
const deepEquality = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of Object.keys(obj1)) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    const prop1 = obj1[key];
    const prop2 = obj2[key];

    if (typeof prop1 !== typeof prop2) {
      return false;
    }

    if (
      typeof prop1 === 'object' &&
      typeof prop2 === 'object' &&
      !deepEquality(prop1, prop2)
    ) {
      return false;
    }

    if (
      typeof prop1 !== 'object' &&
      typeof prop2 !== 'object' &&
      prop1 !== prop2
    ) {
      return false;
    }
  }

  return true;
};

const t1 = { a: 2, b: 3 };
const t2 = { b: 3, a: 2 };
const t3 = { c: { d: 1 }, a: 2, b: 4 };
const t4 = { a: 2, b: 4, c: { d: 1 } };
const t5 = { b: 2, a: 3, c: { d: 2 } };
console.log(deepEquality(t1, t2)); // true
console.log(deepEquality(t3, t4)); // true
console.log(deepEquality(t3, t5)); // false

module.exports = {
  deepEquality
};
