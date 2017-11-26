/**
 * @module genreDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

/* excute pgp with the config settings to establish the db connection */
const db = pgp(dbConfig);

module.exports = {
  /**
   * @func findAll
   * @desc search through all the genres in the database
   * @returns {Promise}
   */
  findAll() {
    return db.many(`
       SELECT *
        FROM genres
       ORDER BY id;
       `);
  },

  /**
   * @func findById
   * @param id {number} the ID of the genre to search for
   * @desc search through the genres table and find by an ID
   * @returns {Promise}
   */
  findById(name) {
    return db.one(`
      SELECT *
        FROM genres
      WHERE id
      `, name);
  },
  /**
   * @func save
   * @param genre {object} genre record to be saved in the db
   * @desc will create a new record of the new genre in the database
   * @returns {Promise}
   */
  save(genre) {
    return db.one(`
      INSERT INTO genres
      (genre)
      VALUES
      ($/genre/)
      RETURNING *
      `, genre);
  },
};
