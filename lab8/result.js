const router = require('express').Router();

router.post('/', (req, res) => {
  const isPal = isPalindrome(req.body.userInput);
  res.render('pages/result', { isPal });
});

// I assume empty string is a palindrome
const isPalindrome = str => {
  const validLetters = str
    .toLowerCase()
    .split('')
    .filter(letter => /[a-z]/i.test(letter));

  return validLetters.join() === validLetters.reverse().join();
};

module.exports = router;
