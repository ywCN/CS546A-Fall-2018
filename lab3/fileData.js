const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const { createMetrics } = require('./textMetrics');

const getFileAsString = async path => {
  try {
    return readFile(path, 'utf8');
  } catch (e) {
    throw e;
  }
};

const getFileAsJSON = async path => {
  const result = await readFile(path, 'utf8');
  console.log(result);
};

// not sure the purpose of this function; it is not used in this lab
const saveStringToFile = async (path, text) => {
  fs.writeFile(path, text, e => {
    if (e) {
      throw e;
    }
  });
};

const saveJSONToFile = async (path, obj) => {
  const data = JSON.stringify(createMetrics(obj), null, 2);
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
