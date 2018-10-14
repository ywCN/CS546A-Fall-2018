const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.json([
      {
        schoolName: 'Cooking School',
        degree: 'Chef',
        favoriteClass: 'Chicken',
        favoriteMemory: 'I ate the chicken I cooked.'
      },
      {
        schoolName: 'Coding School',
        degree: 'Coder',
        favoriteClass: 'LeetCode',
        favoriteMemory: 'Dynamic Programming'
      }
    ]);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
