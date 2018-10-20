const { lab7recipes } = require('./mongoCollections');
const uuidv4 = require('uuid/v4');

const createRecipe = async fields => {
  const recipes = await lab7recipes();
  const newRecipe = {
    _id: uuidv4(),
    ...fields
  };
  const insertInfo = await recipes.insertOne(newRecipe);
  if (insertInfo.insertedCount === 0) {
    throw 'Could not create new recipe.';
  }
  return newRecipe;
};

const getAllRecipes = async () => {
  const recipes = await lab7recipes();
  const allRecipes = await recipes.find({}).toArray();
  return allRecipes;
};

const getRecipe = async id => {
  const recipes = await lab7recipes();
  const recipe = await recipes.findOne({ _id: id });
  if (recipe === null) {
    throw `Unable to find recipe with id of ${id}.`;
  }
  return recipe;
};

const updateRecipe = async (id, fields) => {
  const recipes = await lab7recipes();
  const updateInfo = await recipes.updateOne(
    { _id: id },
    {
      $set: fields
    }
  );
  if (updateInfo.modifiedCount === 0) {
    throw `Unable to update the recipe with id of ${id}.`;
  }
  return await getRecipe(id);
};

const deleteRecipe = async id => {
  const recipes = await lab7recipes();
  const deleteInfo = await recipes.removeOne({ _id: id });
  if (deleteInfo.deletedCount === 0) {
    throw `Unable to remove recipe with id of ${id}.`;
  }
};

module.exports = {
  getAllRecipes,
  createRecipe,
  getRecipe,
  updateRecipe,
  deleteRecipe
};
