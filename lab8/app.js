const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const routeConfig = require('./routeConfig');

const app = express();
const static = express.static(__dirname + '/public');
app.use('/public', static);
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

routeConfig(app);

app.listen(3000, () => console.log('Listening to port 3000.'));
