const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      name: 'Your Name',
      cwid: 'Your CWID',
      biography:
        '2 biography paragraphs separated by a new line character (\n).',
      favoriteShows: ['array', 'of', 'favorite', 'shows'],
      hobbies: ['array', 'of', 'hobbies']
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
