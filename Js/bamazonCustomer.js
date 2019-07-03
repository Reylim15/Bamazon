// Npm Packages

var inquirer = require("inquirer");
var table = require('easy-table')
var mysql = require("mysql");

// Connection to mysl server
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"",
    database:"Bamazon_db"
});
// Connects to the mysql server and db.
connection.connect(function(err) {
    if (err) throw err;

    // Then Calls the function to start the prompts
    start();
});

// Prompts that ask the user
function start() {
    inquirer
.prompt([
    {
    name: "idSelection",
    type:"input",
    message: "Select the ID of the product you are willing to purchase",
},{
    name: "quantity",
    type:"input",
    message: "How many would you like to purchase?",
}
]).then(function(answers){
connection.query("SELECT * FROM stock",function(err, results) {




})})};