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

const volumeOfRectangularPrism = (length, width, height) => {
  checkParams([length, width, height]);

  return length * width * height;
};

const surfaceAreaOfRectangularPrism = (length, width, height) => {
  checkParams([length, width, height]);

  return 2 * (length * width + width * height + height * length);
};

const volumeOfSphere = radius => {
  checkParams([radius]);

  return (4 / 3) * Math.PI * Math.pow(radius, 3);
};

const surfaceAreaOfSphere = radius => {
  checkParams([radius]);

  return 4 * Math.PI * Math.pow(radius, 2);
};

module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere
};
