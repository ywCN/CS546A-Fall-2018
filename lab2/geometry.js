const checkParams = params => {
  for (const param of params) {
    if (typeof param !== 'number') {
      throw TypeError(`The param ${param} is not a number.`);
    }
    if (param <= 0) {
      throw RangeError(`The param ${param} must be greater than 0.`);
    }
    if (param >= Number.MAX_SAFE_INTEGER) {
      throw RangeError(
        `The param ${param} must be smaller than ${Number.MAX_SAFE_INTEGER}.`
      );
    }
  }
};

const volumeOfRectangularPrism = (length, width, height) => {};
const surfaceAreaOfRectangularPrism = (length, width, height) => {};
const volumeOfSphere = radius => {};
const surfaceAreaOfSphere = radius => {};

module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
};
