DROP  database IF EXISTS burgers_db;
CREATE database burgers_db;
use burgers_db;
CREATE table burgers (
	id INTEGER AUTO_INCREMENT,
	burger_name VARCHAR(20),
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);