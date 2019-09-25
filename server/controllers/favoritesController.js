const Pool = require('pg').Pool;
const pool = new Pool({
  connectionString:
    'postgres://kpbrjtvt:tmU2ixXRIwrYp1_uBqvugQbY18KfYQwi@otto.db.elephantsql.com:5432/kpbrjtvt'
});

// get favorites
const getFavorites = (req, res, next) => {
  const arr = [req.body.user];
  pool.query(
    `SELECT * FROM favorites WHERE "user" = $1 ORDER BY _id`,
    arr,
    (error, favorites) => {
      console.log('here in favorites now', favorites[0])
      if (error) {
        res.json(error);
      }
      res.locals.favorites = favorites.rows;
      return next();
    }
  );
};

// add favorite
const addFavorite = (req, res, next) => {
  const { name, address, imgurl, yelpid, yelpurl, rating, phone } = req.body.business;
  const user = req.body.user;

  pool.query(
    `INSERT INTO favorites (name, address, imgurl, yelpid, yelpurl, rating, phone, "user") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [name, address, imgurl, yelpid, yelpurl, rating, phone, user],
    error => {
      if (error) {
        res.json(error);
      } else {
        return next();
      }
    }
  );
};

// delete favorite
const deleteFavorite = (req, res, next) => {
  const { currentUser, yelpid } = req.body;
  pool.query(
    `DELETE FROM favorites WHERE "user" = $1 AND yelpid = $2`,
    [currentUser, yelpid],
    error => {
      if (error) {
        res.json(error);
      } else {
        return next();
      }
    }
  );
};

module.exports = {
  getFavorites,
  addFavorite,
  deleteFavorite
};
