const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const { getFileAsString } = require('./fileData');
const { createMetrics } = require('./textMetrics');

const fileNames = [
  {
    fileName: 'chapter1.txt',
    fileResultName: 'chapter1.result.json'
  },
  {
    fileName: 'chapter2.txt',
    fileResultName: 'chapter2.result.json'
  },
  {
    fileName: 'chapter3.txt',
    fileResultName: 'chapter3.result.json'
  }
];

const main = async () => {
  for (const { fileName, fileResultName } of fileNames) {
    try {
      const result = await readFile(fileResultName, 'utf8');
      console.log(result);
    } catch (e) {
      const fileStr = await getFileAsString(fileName);

      fs.writeFile(
        fileResultName,
        JSON.stringify(createMetrics(fileStr), null, 2),
        e => {
          if (e) {
            throw e;
          }
        }
      );
    }
  }
};

main();
