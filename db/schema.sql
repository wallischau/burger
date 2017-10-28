DROP  database IF EXISTS burgers_db;
CREATE database burgers_db;
use burgers_db;
CREATE table burgers (
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(40),
	devoured BOOLEAN,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);