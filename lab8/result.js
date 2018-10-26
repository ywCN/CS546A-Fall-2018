const router = require('express').Router();

router.post('/', (req, res) => {
  const isPal = isPalindrome(req.body.userInput);
  res.render('pages/result', { isPal });
});

// I assume empty string is a palindrome
const isPalindrome = str => {
  if (typeof str !== 'string') throw `Expect string but got ${typeof str}.`;

  const validLetters = str
    .toLowerCase()
    .split('')
    .filter(letter => /[a-z0-9]/i.test(letter));

  return validLetters.join() === validLetters.reverse().join();
};

module.exports = router;
