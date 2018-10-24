const router = require('express').Router();

router.post('/', (req, res) => {
  res.render('pages/result', { isPal: isPalindrome(req.body.userInput) });
});

const isPalindrome = str => {
  return false;
};

module.exports = router;
