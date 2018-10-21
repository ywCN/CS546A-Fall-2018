const router = require('express').Router();
const {
  getAllRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe
} = require('./recipe');

// GET Responds with the full content of the specified recipe ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await getRecipe(req.params.id);
    res.json(recipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// PUT Updates the specified recipe with by replacing the recipe with the new recipe content, and returns the updated recipe
router.put('/:id', async (req, res) => {
  if (validateAllFields(req.body)) {
    try {
      const updatedRecipe = await updateRecipe(req.params.id, req.body);
      res.json(updatedRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res.status(400).json({ error: 'Input is not valid', badInput: req.body });
  }
});

// PATCH Updates the specified recipe with only the supplied changes, and returns the updated recipe
router.patch('/:id', async (req, res) => {
  try {
    minimalOneFieldExist(req.body);
  } catch (e) {
    res.status(400).json({ error: e });
  }

  try {
    const updatedRecipe = await updateRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

const minimalOneFieldExist = obj => {
  if (typeof obj !== 'object') throw `Input is not object.`;

  const expectedKeys = new Set(['title', 'ingredients', 'steps']);
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

  if (expectedKeys.size === 3) {
    throw `The input object ${obj} does not have any expected field.`;
  }
};

// DELETE Deletes the recipe and returns nothing.
router.delete('/:id', async (req, res) => {
  try {
    await deleteRecipe(req.params.id);
    res.json({ status: 'recipe deleted' });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// GET Responds with an array of all recipes in the format of {_id: RECIPE_ID, title: RECIPE_TITLE}
router.get('/', async (req, res) => {
  try {
    const allRecipes = await getAllRecipes();
    res.json(allRecipes);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// POST Creates a recipe with the supplied data in the request body, and returns the new recipe
router.post('/', async (req, res) => {
  if (validateAllFields(req.body)) {
    try {
      const newRecipe = await createRecipe(req.body);
      res.json(newRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res.status(400).json({ error: 'Input is not valid', badInput: req.body });
  }
});

// I assume values of 'ingredients' and 'steps' can be empty arrays.
// All field keys must exist.
const validateAllFields = obj => {
  if (typeof obj !== 'object') return false;

  const expectedKeys = new Set(['title', 'ingredients', 'steps']);
  const objKeys = new Set(Object.keys(obj));

  for (const key of objKeys) {
    if (!expectedKeys.delete(key)) {
      return false;
    }
  }

  if (
    expectedKeys.size === 0 &&
    Array.isArray(obj.ingredients) &&
    Array.isArray(obj.steps)
  ) {
    return true;
  }

  return false;
};

module.exports = router;
