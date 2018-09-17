// assume property can only be Object or JS primitive
const deepEquality = (obj1, obj2) => {
  if (typeof obj1 !== 'object') {
    throw new TypeError(
      `The type of input ${obj1} should be Object, but got ${typeof obj1}.`
    );
  }
  if (typeof obj2 !== 'object') {
    throw new TypeError(
      `The type of input ${obj2} should be Object, but got ${typeof obj2}.`
    );
  }

  const helper = (o1, o2) => {
    if (Object.keys(o1).length !== Object.keys(o2).length) {
      return false;
    }

    for (const key of Object.keys(o1)) {
      if (!o2.hasOwnProperty(key)) {
        return false;
      }

      const prop1 = o1[key];
      const prop2 = o2[key];

      if (typeof prop1 !== typeof prop2) {
        return false;
      }

      if (
        typeof prop1 === 'object' &&
        typeof prop2 === 'object' &&
        !helper(prop1, prop2)
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

  return helper(obj1, obj2);
};

const uniqueElements = arr => {
  if (!Array.isArray(arr)) {
    throw TypeError(
      `The type of input ${arr} should be Array, but got ${typeof arr}.`
    );
  }
  return new Set(arr).size;
};

const countOfEachCharacterInString = str => {
  if (typeof str !== 'string') {
    throw TypeError(
      `The type of input ${str} should be String, but got ${typeof str}.`
    );
  }

  let charMap = {};
  for (const char of str) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  return charMap;
};

module.exports = {
  deepEquality,
  uniqueElements,
  countOfEachCharacterInString
};
