// assume property can only be Object or JS primitive
export const deepEquality = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    const prop1 = obj1.key;
    const prop2 = obj2.key;

    if (
      typeof prop1 === 'object' &&
      typeof prop2 === 'object' &&
      !deepEquality(prop1, prop2)
    ) {
      return false;
    }

    if (prop1 !== prop2) {
      return false;
    }
  }

  return true;
};
