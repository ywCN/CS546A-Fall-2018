const express = require('express');
const app = express();
const router = express.Router();

const aboutRoute = require('./aboutRoute');
const storyRoute = require('./storyRoute');
const educationRoute = require('./educationRoute');

const routeConfig = app => {
  app.use('/about', aboutRoute);
  app.use('/story', storyRoute);
  app.use('/education', educationRoute);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

routeConfig(app);
app.listen(3000, () => {
  console.log(
    'Listening to port 3000. You may open http://localhost:3000 in your browser.'
  );
});
