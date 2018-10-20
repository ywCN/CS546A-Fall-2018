const router = require('express').Router();
const { getAllRecipes, createRecipe } = require('./recipe');

// GET Responds with the full content of the specified recipe ID
router.get('/:id', async (req, res) => {
  // use mutiple try catch blocks to do checking
  try {
    res.json({ hello: 'hi' });
    // res.json() does status 200 automatically
  } catch (e) {
    res.status(500).send();
  }
});

// PUT Updates the specified recipe with by replacing the recipe with the new recipe content, and returns the updated recipe
router.put('/:id', async (req, res) => {
  try {
    validateAllFields(req.body);
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: 'Input is not valid.', badInput: req.body });
  }

  try {
    res.json(req.body);
    // res.json() does status 200 automatically
  } catch (e) {
    res.status(500).send();
  }
});

// I assume values of 'ingredients' and 'steps' can be empty arrays.
// All field keys must exist.
const validateAllFields = obj => {
  if (typeof obj !== 'object') throw `Input is not object.`;

  const expectedKeys = new Set(['_id', 'title', 'ingredients', 'steps']);
  const objKeys = new Set(Object.keys(obj));

  for (const key of objKeys) {
    if (!expectedKeys.delete(key)) {
      throw `The key ${key} of the input object ${obj} is not in the expect key set.`;
    }
  }

  if (
    expectedKeys.size === 0 &&
    Array.isArray(obj.ingredients) &&
    Array.isArray(obj.steps)
  ) {
    return;
  }

  throw `The input object ${obj} is not valid.`;
};

// PATCH Updates the specified recipe with only the supplied changes, and returns the updated recipe
router.patch('/:id', async (req, res) => {
  // NOTE: req.body needs to have minimal 1 field
  // use mutiple try catch blocks to do checking
  try {
    minimalOneFieldExist(req.body);
  } catch (e) {
    res.status(400).json({ error: 'Input is not valid.', badInput: req.body });
  }

  try {
    res.json(req.body);
    // res.json() does status 200 automatically
  } catch (e) {
    res.status(500).send();
  }
});

const minimalOneFieldExist = obj => {
  if (typeof obj !== 'object') throw `Input is not object.`;

  const expectedKeys = new Set(['_id', 'title', 'ingredients', 'steps']);
  const objKeys = new Set(Object.keys(obj));

  for (const key of objKeys) {
    if (!expectedKeys.delete(key)) {
      throw `The key ${key} of the input object ${obj} is not in the expect key set.`;
    }
  }

  if (obj.hasOwnProperty('ingredients') && !Array.isArray(obj.ingredients)) {
    throw `ingredients field is not an array`;
  }

  if (obj.hasOwnProperty('steps') && !Array.isArray(obj.steps)) {
    throw `steps field is not an array`;
  }

  if (expectedKeys.size === 4) {
    throw `The input object ${obj} does not have any expected field.`;
  }
};

// DELETE Deletes the recipe and returns nothing.
router.delete('/:id', async (req, res) => {
  try {
    res.json(req.body);
    // res.json() does status 200 automatically
  } catch (e) {
    res.status(500).send();
  }
});

// GET Responds with an array of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TITLE}
router.get('/', async (req, res) => {
  try {
    // const allRecipes = await getAllRecipes();
    // return allRecipes;
  } catch (e) {
    res.status(500).send();
  }
  res.json({ status: 'get all recipes succeed!' });
});

// POST Creates a recipe with the supplied data in the request body, and returns the new recipe
router.post('/', async (req, res) => {
  try {
    res.json(req.body);
    // const newRecipe = await createRecipe(req.body);
    // res.json(newRecipe);
  } catch (e) {
    res.status(500).send();
  }
  res.json({ status: 'create one recipe succeed!' });
});

module.exports = router;
