const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json([
      {
        schoolName: 'First School Name',
        degree: 'First School Degree',
        favoriteClass: 'Favorite class in school',
        favoriteMemory: 'A memorable memory from your time in that school'
      }
    ]);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
