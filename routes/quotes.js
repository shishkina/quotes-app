// TODO: [1] bring in express
const express = require('express');
const controller = require('../controllers/quotesController');
const views = require('../controllers/viewController');


// TODO: [2] invoke the Router()
const quotesRouter = express.Router();


// TODO: [3] list your routes in order of most specific to most general
quotesRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);

quotesRouter.get('/new', views.showAddForm);

quotesRouter.route('/:id')
  .get(controller.getOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleDelete, views.show404);


quotesRouter.route('/')
  .get(controller.index, views.showQuotes, views.show404)
  .post(controller.create, views.handleCreate, views.show406);


// TODO: [4] export the quotesRouter
module.exports = quotesRouter;
// TODO: [5] Require this file in server.js
// TODO: [6] Remember to mount this new router at '/quotes' in server.js
