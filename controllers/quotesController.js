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
  createNewQuote(req, res) {
    // TODO: make this method
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
      .catch(err => console.log(err));
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
      .catch(err => console.log(err));
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
    res.send('I’m accepting quote POST data');
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
    res.send(`I’ll replace quote #${req.params.id} with the data you give me`);
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
    quoteDB.findById(req.params.id)
      .then(quote => res.json({ quote }))
      .catch(err => console.log(err));
  },


  /**
   * @func showNewForm
   * @desc Show a blank HTML form
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  showNewForm: (req, res) => {
    res.send('I’m the HTML form for new quotes. I post to /quotes');
  },

  /**
   * @func showEditForm
   * @desc Show a pre-filled HTML form
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  showEditForm: (req, res) => {
    res.send(`I’m the HTML form for editing quote #${req.params.id}. I post data to /quotes`);
  },

};
