const express = require('express');

const quotesController = require('../controllers/quotesController');
const genresController = require('../controllers/genresController');

const views = require('../controllers/viewController');

const quotesRouter = express.Router();

quotesRouter.get('/:id/edit', genresController.index, quotesController.getOne, views.showEditForm, views.show404);
quotesRouter.get('/new', genresController.index, quotesController.makeBlankQuote, views.showAddForm, views.show404);

quotesRouter.route('/:id')
  .get(quotesController.getOne, views.showOne, views.show404)
  .put(quotesController.update, views.handleUpdate, views.show406)
  .delete(quotesController.destroy, views.handleDelete, views.show404);

quotesRouter.route('/')
  .get(quotesController.index, views.showQuotes, views.show404)
  .post(quotesController.create, views.handleCreate, views.show406);

module.exports = quotesRouter;
