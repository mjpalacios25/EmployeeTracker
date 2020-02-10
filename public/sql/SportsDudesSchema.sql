DROP DATABASE IF EXISTS SportsDudesDB;
CREATE database SportsDudesDB;

USE SportsDudesDB;

CREATE TABLE department (

id INT AUTO_INCREMENT NOT NULL, 
name VARCHAR(30) NOT NULL,
primary key(id)

);

CREATE TABLE role (

id INT AUTO_INCREMENT NOT NULL, 
title VARCHAR(30) NULL,
salary decimal(10,2) NULL,
department_id INT, 
primary key(id)

);

CREATE TABLE employee (

id INT AUTO_INCREMENT NOT NULL, 
first_name VARCHAR(30) NULL,
last_name VARCHAR(30) NULL,
role_id INT,
manager_id INT NULL,
primary key(id)

);

