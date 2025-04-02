CREATE SCHEMA db;

USE db;

CREATE TABLE accounts (
    acc_id INT PRIMARY KEY AUTO_INCREMENT,
    acc_username VARCHAR(48) UNIQUE NOT NULL,
    acc_password VARCHAR(255) NOT NULL,
    acc_role ENUM('superadmin', 'admin', 'staff') NOT NULL
);

INSERT INTO accounts (acc_username, acc_password, acc_role) 
VALUES ('sa', '$2b$10$6K.EzaGiQx1c4rm87EWQVumNWT8V6eeCYHjmmswv.oAVRa0Z3OeFW', 'superadmin');
