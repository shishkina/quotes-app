/* Required resources always go first */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const quotesRouter = require('./routes/quotes');

// create a PORT that checks the process.env or defaults to 3000
const PORT = process.env.PORT || 3000;

// Start up express
const app = express();

/* configure views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* set up logging */
app.use(logger('dev'));

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

/* ROUTES */
app.use('/quotes', quotesRouter);

/*
  HOME route
  [TODO] dynamically render the authors
*/
app.get('/', (req, res) => {
  res.render('index', {
    message:      'hello you!',
    subTitle:     'welcome to quotes!',
    quoteAuthors: ['Yoda', 'Unknown'],
  });
});

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
