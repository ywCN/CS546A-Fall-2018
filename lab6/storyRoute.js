const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      storyTitle: 'Funny Story',
      story:
        'Hello, my name is Youhao.\n I am writting a story about github.\n I used git push -f and my teammates were angry.'
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
