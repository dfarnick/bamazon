-- create the database here --
CREATE DATABASE bamazon;
-- use the database --
USE bamazon;
-- create table --
CREATE TABLE products (
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price DECIMAL NOT NULL,
stock_quantity INTEGER NOT NULL
);

-- add products to the table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Bathroom Vacuum', 'Cosmetics', 5.75, 15),
		('Blow Dryer', 'Cosmetics', 6.99, 25),
		('2% Milk', 'Grocery', 1.99, 30),
		('Steak', 'Grocery', 24.25, 50),
		('Strawberries', 'Produce', 1.50, 80),
		('Bannana', 'Produce', 1.20, 100),
		('Polaris Ranger', 'Power Sports', 14000.00, 5),
		('KTM 300 XC-W TPI', 'Power Sports', 10599.99, 2),
		('Budwieser', 'Beer', 19.75, 240),
		('ICE Melt', 'Minnesota', 12.99, 575)