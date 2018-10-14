const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      name: 'Youhao Wang',
      cwid: '10423006',
      biography: 'Hi, my name is Youhao.\n I am doing homework for CS546.',
      favoriteShows: ['The Good Place', 'The Wire', 'Lost', 'The Simpsons'],
      hobbies: ['eat', 'sleep', 'coffee']
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
