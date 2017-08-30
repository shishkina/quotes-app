/**
 * @module quoteDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');


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
    return db.many(`
      SELECT quotes.id, content, author, genre_id
        FROM quotes INNER JOIN genres
        ON quotes.genre_id = genres.id
    ORDER BY id
    `);
  },

  /**
   * @func findById
   * @param id {number} the ID of the quote to search for
   * @desc search through the quotes and find by an ID
   * @returns {Promise}
   */
  findById(id) {
    return db.one(`
      SELECT quotes.id, content, author, genres.genre
        FROM quotes INNER JOIN genres
        ON quotes.genre_id = genres.id
      WHERE quotes.id = $1;
    `, id);
  },

  /**
   * @func save
   * @param quote {object} quote record to be saved in the db
   * @desc will create a new record of the new quote in the database
   * @returns {Promise}
   */
  save(quote) {
    console.log(quote);
    // the quote_id comes from the form as a string
    // cast it to a number
    quote.genre_id = Number.parseInt(quote.genre_id, 10);
    return db.one(`
      INSERT INTO quotes
      (content, author, genre_id)

      VALUES
      ($/content/, $/author/, $/genre_id/)
      RETURNING *
    `, quote);
  },
  /**
   * @func update
   * @param quote {object} quote record to be updated
   * @desc will update the record in the databse with the new data
   * @returns {Promise}
   */

  update(quote) {
    return db.one(`
      UPDATE quotes
      SET
      content = $/content/,
      author = $/author/,
      genre_id = $/genre_id/
      WHERE id = $/id/
      RETURNING *
    `, quote);
  },

  /**
   * Removes one quote from DB
   * @param {number} id - the id of a quote
   * @returns {Promise}
   */
  destroy(id) {
    return db.none(`
      DELETE
        FROM quotes
       WHERE id = $1
    `, id);
  },
};
