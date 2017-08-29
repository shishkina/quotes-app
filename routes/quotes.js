// TODO: [1] bring in express
const express = require('express');
const controller = require('../controllers/quotesController');

// TODO: [2] invoke the Router()
const quotesRouter = express.Router();


// TODO: [3] list your routes in order of most specific to most general
quotesRouter.get('/:id/edit', controller.getOne);

quotesRouter.get('/new', controller.makeBlankQuote);

quotesRouter.route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.destroy);


quotesRouter.route('/')
  .get(controller.index)
  .post(controller.create);


// TODO: [4] export the quotesRouter
module.exports = quotesRouter;
// TODO: [5] Require this file in server.js
// TODO: [6] Remember to mount this new router at '/quotes' in server.js
