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

inquirer
.prompt([
    {
    type:"list",
    message: "Select the ID of the product you are willing to purchase",
    name: "idSelection"
},{
    type:"list",
    message: "How many would you like to purchase?",
    name: "quantity"
}
]).then(function(answers){

});