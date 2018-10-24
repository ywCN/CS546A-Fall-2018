const result = require('./result');
const input = require('./input');

const routeConfig = app => {
  app.use('/result', result);
  app.use('/', input);

  app.use('*', (req, res) => {
    res.redirect('/');
  });
};

module.exports = routeConfig;
