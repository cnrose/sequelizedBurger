-- Create Database
CREATE DATABASE burgers_db;

--Create table
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(150) NOT NULL,
	devoured boolean DEFAULT false,
	date timestamp,
	PRIMARY KEY (id)
);