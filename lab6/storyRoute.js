const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json({
      storyTitle: 'Story Title',
      story: 'Your story.\nSimply use line breaks for paragraphs.\nLike this.'
    });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
