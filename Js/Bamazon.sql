-- first Deletes then recreates every run and since the contents are static there it shouldnt save
drop database if exists Bamazon_db;
create database Bamazon_db;

-- calls to use this db
use Bamazon_db;

-- table that holds the parameters for the items
Create table stock (
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) null,
department_name VARCHAR(100) null,
price_for_customer DECIMAL(64,2) null,
stock_quantity INT null,
primary key (id)
);

-- Inserted 10 static products
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Lambot", "Gadgets", 349.00, 100);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Powerlix Compression Socks", "Clothing", 14.42, 5493);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Echo Dot", "Electronics", 24.99, 398);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Anker PowerBank", "Electronics", 24.99, 2356);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Affresh Dishwasher Cleaner", "Misc", 4.72, 88930);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Ecowish Womans Dress", "Clothing", 19.53, 4325);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("TNSO MFI Iphone Charger", "Electronics", 8.46, 211);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Chucky Movie Collection Set", "Movies", 19.99, 7650);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("Green Toys Submarine", "Children Toys", 8.49, 3099);
insert into stock (product_name, department_name, price_for_customer, stock_quantity)
values ("DriftOff Sleep Aid", "Health And Beuty", 14.59, 7095);

-- This Completes the Database Portion of the EasyHW