# Exercise 2 - Routing


## Step 1: Initial Routes (30 minutes 🏋️)
Create the following routes in `routes/quotes.js`:

|🤡|GET|POST|PUT|DELETE|
|---|---|---|---|---|
|`/quotes/`|Show a list of quotes|Receive a new quote; store in DB; return a new quoteID| 💬 | 💬
|`/quotes/:id`| Show ONE quote | 💬 | Replace quote at {:id} | Destroy quote at {:id}
|`/quotes/new`| Show the "new quote" HTML form       |💬|💬|💬
|`/quotes/:id/edit`| Show the "edit quote" HTML form |💬|💬|💬

### Proper Responses 🏆
Theses routes must provide the right responses. 

1. Read [this documentation](https://documenter.getpostman.com/view/2263099/quote-sta-gram/6nBupZw) online to get a sense of what each route should return. (Each request has an example response.)
2. Import [these pre-built request/responses](../assets/quote-sta-gram.postman_collection.json) into Postman. (`Postman > File > Import...`)
3. Build each of the routes to respond to each request (for now) with `req.send('some string')`
4. **Use your new tools in Postman to check your routes.** 

## Step 2: Move functions into a controller (15 minutes 🏖).

If we take a look at our quotes router, there's a lot of mess in there, which makes it very hard to reason about and quickly understand. Let's move all these function definitions into a separate file so it's easier to read as humans. 

***Note: cleaning this up is only for our convenience and to keep our code tidy— Node doesn't care either way.***

1. `require` `/controllers/quotesController` in your `quotesRouter`.
1. Open `/controllers/quotesController.js`
2. There are 8 methods defined in the controller, but only 7 routes in the router (one of the methods will be used later). 
4. **Move the function bodies from the router into their corresponding functions in this controller.**
5. Your router should look something like this: `quotesRouter.get('/', quotesController.index);`
6. Verify with Postman.

#### Your application should now run exactly as it did in step #1. If it doesn't, *stop here and fix it*.
