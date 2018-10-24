const router = require('express').Router();

router.post('/', (req, res) => {
  const isPal = isPalindrome(req.body.userInput);
  res.render('pages/result', { isPal });
});

const isPalindrome = str => {
  const validLetters = str
    .toLowerCase()
    .split('')
    .filter(letter => /[a-z]/i.test(letter));

  return validLetters.join() === validLetters.reverse().join();
};

console.log(isPalindrome('Go hang a salami, I’m a lasagna hog.'));
console.log(isPalindrome('Was it a cat I saw?'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('He did, eh?'));
console.log(isPalindrome('bbdd'));
console.log(isPalindrome('a'));
console.log(isPalindrome('abc'));

module.exports = router;
