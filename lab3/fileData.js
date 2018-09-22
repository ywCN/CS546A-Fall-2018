const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

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

const saveStringToFile = async (path, text) => {};

const saveJSONToFile = async (path, obj) => {};

module.exports = {
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile
};
