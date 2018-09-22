const {
  getFileAsString,
  getFileAsJSON,
  saveJSONToFile
} = require('./fileData');

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
      // try catch block will check if the result file exist
      await getFileAsJSON(fileResultName);
    } catch (e) {
      const fileStr = await getFileAsString(fileName);
      await saveJSONToFile(fileResultName, fileStr);
    }
  }
};

main();
