const router = require('express').Router();

router.get('/', (req, res) => {
  // TODO: write and use helper function to determine pal
  // NOTE: ignore case and non-letter chars
  res.render('pages/result', { isPal: true });
});

module.exports = router;
