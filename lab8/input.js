const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('pages/input');
});

module.exports = router;
