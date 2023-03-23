DROP DATABASE IF EXISTS profile_db;
CREATE DATABASE profile_db;

USE profile_db; 

CREATE TABLE user(
    id INT NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    user_password VARCHAR(20) NOT NULL
);

CREATE TABLE game(
    id INT NOT NULL,
    game_name VARCHAR(100) NOT NULL,
    rating DECIMAL(5,0) NOT NULL
);