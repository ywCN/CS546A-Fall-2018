// assume property can only be Object or JS primitive
const deepEquality = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    throw new TypeError('Both inputs must be objects.');
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

  return helper(obj1, obj2);
};

module.exports = {
  deepEquality
};
