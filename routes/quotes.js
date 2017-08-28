// TODO: [1] bring in express
const express          = require('express');
const quotesController = require('../controllers/quotesController');

// TODO: [2] invoke the Router()
const quotesRouter = express.Router();


// TODO: [3] list your routes in order of most specific to most general
quotesRouter.route('/new')
  .get(quotesController.showNewForm);

quotesRouter.route('/:id/edit')
  .get(quotesController.showEditForm);

quotesRouter.route('/:id')
  .get(quotesController.getOne)
  .put(quotesController.update)
  .delete(quotesController.destroy);

quotesRouter.route('/')
  .get(quotesController.index)
  .post(quotesController.create);

// TODO: [4] export the quotesRouter
module.exports = quotesRouter;
// TODO: [5] Require this file in server.js
// TODO: [6] Remember to mount this new router at '/quotes' in server.js
