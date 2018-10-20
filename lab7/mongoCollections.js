const dbConnection = require('./mongoConnection');

const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

// lab7-recipes is not an valid variable name
module.exports = {
  lab7recipes: getCollectionFn('lab7-recipes')
};
