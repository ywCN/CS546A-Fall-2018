const router = require('express').Router();

router.post('/', (req, res) => {
  const isPal = isPalindrome(req.body.userInput);
  res.render('pages/result', { isPal });
});

const isPalindrome = str => {
  // const regex = new RegExp('[a-z]', 'i');
  const validLetters = str
    .toLowerCase()
    .split('')
    .filter(letter => /[a-z]/i.test(letter));
  // const validLetters = [];

  // for (const letter of str.toLowerCase()) {
  //   if (regex.test(letter)) {
  //     validLetters.push(letter);
  //   }
  // }

  return validLetters.join() === validLetters.reverse().join();
};

isPalindrome('Go hang a salami, I’m a lasagna hog.');

module.exports = router;
