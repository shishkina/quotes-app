// Required resources always go first
// TODO: [1] bring in the express library
const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const quotesRouter = require('./routes/quotes');

// TODO: [2] create a PORT variable that checks the process.env or defaults to 3000
const PORT = process.env.PORT || 3000;

// TODO: [3] Start up express
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// TODO: [8] set up logging
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

/* ROUTES */
app.use('/quotes', quotesRouter);

// TODO: [4] Create a GET request handler for '/' (home).
// send '<h1>Hello World!</h1>' to the user

app.get('/', (req, res) => {
  res.render('index', {
    message:      'hello you!',
    subTitle:     'welcome to quotes!',
    quoteAuthors: ['Yoda', 'Unknown'],
  });
});
// WE HAVE LIFT OFF!!
// TODO: [5] Set up a listener on PORT
// TODO: [6] Log the message "Server up and listening on port XXXX"
// TODO: [7] BONUS: log which environment we're in
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});
