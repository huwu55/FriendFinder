DROP DATABASE IF EXISTS friends_db;

CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    photo_link VARCHAR(1000),
    answer_1 INT,
    answer_2 INT,
    answer_3 INT,
    answer_4 INT,
    answer_5 INT,
    answer_6 INT,
    answer_7 INT,
    answer_8 INT,
    answer_9 INT,
    answer_10 INT,
    PRIMARY KEY (id)
);