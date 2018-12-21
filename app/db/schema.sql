DROP DATABASE IF EXISTS friends_db;

CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    photo_link VARCHAR(1000),
    answer1 INT,
    answer2 INT,
    answer3 INT,
    answer4 INT,
    answer5 INT,
    answer6 INT,
    answer7 INT,
    answer8 INT,
    answer9 INT,
    answer10 INT,
    PRIMARY KEY (id)
);