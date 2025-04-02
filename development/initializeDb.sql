CREATE SCHEMA db;

USE db;

CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(48) UNIQUE NOT NULL
);

CREATE TABLE accounts (
    acc_id INT PRIMARY KEY AUTO_INCREMENT,
    acc_username VARCHAR(48) UNIQUE NOT NULL,
    acc_password VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE RESTRICT
);

INSERT INTO roles (role_name) VALUES 
('superadmin'), 
('admin'), 
('staff');

INSERT INTO accounts (acc_username, acc_password, role_id) 
VALUES ('sa', '$2b$10$6K.EzaGiQx1c4rm87EWQVumNWT8V6eeCYHjmmswv.oAVRa0Z3OeFW', 1);
