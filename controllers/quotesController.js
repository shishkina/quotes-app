/**
 * @module controllers/quotesController
 * @author Jason Seminara <js@ga.co>
 */

const quoteDB = require('../models/quoteDB');

/**
 * Create a QuoteController
 */
module.exports = {
  /**
   * Create a blank Quote and set it in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  makeBlankQuote(req, res) {
    res.json({
      id:         null,
      content:    null,
      author:     null,
      genre_type: null,
    });
  },


  /**
   * Middleware function:
   * Get all the quotes and set them in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  index(req, res) {
    quoteDB.findAll()
      .then(quotes => res.json({ quotes }))
      .catch(err => res.status(400).json(err));
  },

  /**
   * Read One Middleware:
   * Get a quote from the DB and set it in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  getOne(req, res) {
    quoteDB.findById(req.params.id)
      .then(quote => res.json({ quote }))
      .catch(err => res.status(404).json(err));
  },

  /**
   * Create Middleware:
   * Get quote data from the front-end and set it in the DB
   * Sets the results of the insertion into res.locals.quote
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  create(req, res) {
    quoteDB.save(req.body)
      .then(quote => res.json({ quote }))
      .catch(err => res.status(401).json(err));
  },

  /**
   * Update Middleware:
   * Get quote data from the DB;
   * Merge the data from the front-end;
   * Set it in the DB;
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  update(req, res) {
    quoteDB.update(req.body)
      .then(quote => res.json({ quote }))
      .catch(err => res.status(401).json(err));
  },

  /**
   * @func destroy
   * @desc Destroy the quote at this id
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  destroy(req, res) {
    quoteDB.destroy(req.params.id)
      .then(() => res.json({ message: 'successful' }))
      .catch(err => res.status(404).json(err));
  },


  /**
   * @func showNewForm
   * @desc Show a blank HTML form
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  showQuoteForm: (req, res) => {
    res.json({message: 'I’m the HTML form for new quotes. I post to /quotes'});
  },


};
