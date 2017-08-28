/**
 * @module quoteDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

// TODO: [1] require pg-promise, and execute it like a function.
// TODO: [2] require our DB config


// execute pgp with our db config, so a connection is made.
const db = pgp(dbConfig);

// @see https://github.com/vitaly-t/pg-promise#query-result-mask

// export our collection of functions
module.exports = {
  /**
   * @func findAll
   * @desc search through all the quotes
   * @returns {Promise}
   * @hint this
   */
  findAll() {
    // TODO: use pgpromise to get all rows
  },

  /**
   * @func findById
   * @param id {number} - the ID of the quote to search for
   * @desc search through the quotes and find by an ID
   * @returns {Promise}
   */
  findById(id) {
    // TODO: use pgpromise to get ONE rows, filtered by id
  },

  save(quote) {
    // TODO: use pgpromise to SAVE ONE row, producing a new id
  },

  /**
   * Removes one quote from DB
   * @param {number} id - the id of a quote
   * @returns {Promise}
   */
  destroy(id) {
    // TODO: use pgpromise to DELETE ONE row, producing nothing
  },
};
