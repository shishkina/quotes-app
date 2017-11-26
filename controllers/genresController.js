/**
 * @module controllers/genresController
 * @author Kate Shishkina <katherine.shihskina@ga.co>
 */

const genreDB = require('../models/genreDB');
/**
 * Create a GenresController
 */
module.exports = {
  /**
   * Middleware function:
   * Get all the genres and set them in res.locals
   * @param {req} req - Node's Request Object
   * @param {res} res - Node's Response Object
   * @param {next} next - The next middleware function in our route
   * @return {undefined}
   */
  index(req, res, next) {
    genreDB.findAll()
      .then((genres) => {
        res.locals.genres = genres;
        next();
      })
      .catch(err => next(err));
  },
};
