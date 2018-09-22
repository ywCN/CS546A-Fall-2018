// NOTE: I assume the text contains only alphabet letters
const createMetrics = text => {
  if (typeof text !== 'string') {
    throw TypeError(
      `The type of ${text} should be string, but got ${typeof text}`
    );
  }

  const regex = new RegExp('[a-z]', 'i');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  const letters = text.toLowerCase();

  let totalLetters = 0;
  let totalNonLetters = 0;
  let totalVowels = 0;
  let totalConsonants = 0;

  for (const letter of letters) {
    if (regex.test(letter)) {
      totalLetters++;
      vowels.has(letter) ? totalVowels++ : totalConsonants++;
    } else {
      totalNonLetters++;
    }
  }

  const words = letters
    .replace(/[^\w\s]|_|[0-9]/g, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  let longWords = 0;
  let totalWordLength = 0;
  let wordOccurrences = {};

  for (const word of words) {
    totalWordLength += word.length;
    word.length > 5 && longWords++;
    wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
  }

  return {
    totalLetters: totalLetters,
    totalNonLetters: totalNonLetters,
    totalWords: words.length,
    totalVowels: totalVowels,
    totalConsonants: totalConsonants,
    uniqueWords: Object.keys(wordOccurrences).length,
    longWords: longWords,
    averageWordLength: totalWordLength / words.length,
    wordOccurrences: wordOccurrences
  };
};

module.exports = { createMetrics };
