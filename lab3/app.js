const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const { getFileAsString } = require('./fileData');
const { createMetrics } = require('./textMetrics');

const fileNames = [
  {
    fileName: 'chapter1.txt',
    fileResult: 'chapter1.result.json'
  },
  {
    fileName: 'chapter2.txt',
    fileResult: 'chapter2.result.json'
  },
  {
    fileName: 'chapter3.txt',
    fileResult: 'chapter3.result.json'
  }
];

const main = async () => {
  for (const { fileName, fileResult } of fileNames) {
    try {
      const result = await readFile(fileResult, 'utf8');
      console.log(result);
    } catch (e) {
      const fileStr = await getFileAsString(fileName);
      const metric = createMetrics(fileStr);

      fs.writeFile(fileResult, metric, e => {
        if (e) {
          throw e;
        }
      });
    }
  }
};

main();
