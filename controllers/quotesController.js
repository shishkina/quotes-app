/**
 * @module controllers/quotesController
 * @author Jason Seminara <js@ga.co>
 */

// TODO: [1] import the quoteDB module

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
    // TODO: make this method
  },

  /**
   * Read One Middleware:
   * Get a quote from the DB and set it in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  getOne: (req, res) => {
    // TODO: make this method
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
  create: (req, res) => {
    // TODO: make this method
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
  update: (req, res) => {
    // TODO: make this method
  },

  /**
   * @func destroy
   * @desc Destroy the quote at this id
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  destroy: (req, res) => {
    // TODO: make this method
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
    // TODO: make this method
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
    // TODO: make this method
  },

};
