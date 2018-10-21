const express = require('express');
const bodyParser = require('body-parser');
const recipeRouter = require('./recipeRouter');

const routeConfig = app => {
  app.use('/recipes', recipeRouter);

  app.use('*', (req, res) => {
    res.status(404).send({ error: 'Route Not Found' });
  });
};

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

routeConfig(app);

app.listen(3000, () => console.log('Listening to port 3000.'));
