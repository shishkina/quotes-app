
# Exercise 3: Data!

## Step 0: Prepare
Before we get our hands dirty with data, we need to make some quick modifications so we can accept data from a form.
Body-parser allows us to read the body of `POST` requests, and method-override allows us to simulate methods not supported in HTML (e.g. `PUT`,`DELETE`)

1. `npm install body-parser method-override`
1. Inside `server.js`, require these two packages.
1. Add the following block to activate them

```javascript
// parse incoming forms
/* we'll be reading the form body, but not accepting files, 
or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false })); 
/* we'll also be accepting and parsing json  */
app.use(bodyParser.json()); 

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT, 
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'));
```

## Step 1: Prep some data

### Create and seed your database

1. Use `db/migration.sql` and `db/seed.sql`

## Step 2: PG-Promise and configuration

1. Use npm to install `pg-promise`
2. Open `config/dbConfig.js` and follow the TODO prompts
3. Open `models/quotesDB.js` and follow the TODO prompts, in order


## Step 3: Put some data in your routes

For now, and before we hook up our view engine, we'll only trade in json data. This means that instead of sending HTML via `res.send('string')` or `res.render('view')` methods, we'll switch over to sending json using `res.json({data})`. 

> `res.json()` is shorthand for a few different methods:
> 
> 1. set the reponse head to 'application/json'
> 2. stream the javascript data to the browser as a string (serialize)
> 3. close the browser stream.

We'll also be writing all of our database operations (SQL) in separate file:

## Step 3.1: Open `models/quotesDB.js`

Build out the [TODO] methods.
