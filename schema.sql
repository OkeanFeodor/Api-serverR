CREATE DATABASE   users_app;

USE users_app;
CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    user TEXT NOT NULL,
    passwordd TEXT NOT NULL
);

INSERT INTO users (user, passwordd)
VALUES
('admin1', 'admin'),
('admin2', 'admin');
