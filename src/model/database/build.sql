BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS animals CASCADE;
DROP TABLE IF EXISTS adoption CASCADE;

CREATE TABLE users ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
);

CREATE TABLE animals (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(30) NOT NULL
);

CREATE TABLE adoption (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    animal_id INTEGER REFERENCES animals(id)
);

INSERT INTO users (name) 
VALUES ('Gregor'), ('Andy'), ('Francesca'), ('Jack');

INSERT INTO animals (name) 
VALUES ('Pig'), ('Goat'), ('Tiger'), ('Monkey');

INSERT INTO adoption (user_id, animal_id) 
VALUES (1,2), (2,1), (2,4), (3,3), (3,1), (4,1);

COMMIT;