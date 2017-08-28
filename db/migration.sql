\c dresselhaus_quotes_dev;
DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  content TEXT,
  author VARCHAR(255),
  genre_type VARCHAR(64),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON quotes (genre_type);
CREATE INDEX ON quotes (author);
