const { lab7recipes } = require('./mongoCollections');
const uuidv4 = require('uuid/v4');

// NOTE: no try catch in this file
// TODO: build CRUD functions

const getAllRecipes = async () => {
  const recipes = await lab7recipes();
  const allRecipes = await recipes.find({}).toArray();
  return allRecipes;
};

const createRecipe = async data => {
  const recipes = await lab7recipes();
  const newRecipe = {
    _id: uuidv4(),
    ...data
  };
  const insertInfo = await recipes.insertOne(newRecipe);
  if (insertInfo.insertedCount === 0) {
    throw 'Could not create new recipe.';
  }
  return newRecipe;
};
