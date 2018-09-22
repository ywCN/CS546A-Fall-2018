const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const getFileAsString = async path => {
  if (typeof path !== 'string') {
    throw TypeError(
      `The type of ${path} should be string, but got ${typeof path}`
    );
  }

  try {
    return readFile(path, 'utf8');
  } catch (e) {
    throw e;
  }
};

const getFileAsJSON = async path => {
  if (typeof path !== 'string') {
    throw TypeError(
      `The type of ${path} should be string, but got ${typeof path}`
    );
  }

  const result = await readFile(path, 'utf8');
  console.log(result);
};

// not sure the purpose of this function; it is not used in this lab
const saveStringToFile = async (path, text) => {
  if (typeof path !== 'string') {
    throw TypeError(
      `The type of ${path} should be string, but got ${typeof path}`
    );
  }

  if (typeof text !== 'string') {
    throw TypeError(
      `The type of ${text} should be string, but got ${typeof text}`
    );
  }

  fs.writeFile(path, text, e => {
    if (e) {
      throw e;
    }
  });
};

const saveJSONToFile = async (path, obj) => {
  if (typeof path !== 'string') {
    throw TypeError(
      `The type of ${path} should be string, but got ${typeof path}`
    );
  }

  if (typeof obj !== 'object') {
    throw TypeError(
      `The type of ${obj} should be object, but got ${typeof obj}`
    );
  }

  const data = JSON.stringify(obj, null, 2);
  fs.writeFile(path, data, e => {
    if (e) {
      throw e;
    }
  });
  console.log(data);
};

module.exports = {
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile
};
