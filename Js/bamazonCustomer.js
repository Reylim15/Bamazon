// Npm Packages

var inquirer = require("inquirer");
var Table = require('easy-table')
var mysql = require("mysql");

// Connection to mysl server
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Bamazon_db"
});
