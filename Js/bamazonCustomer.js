// Npm Packages

var inquirer = require('inquirer');
var table = require('easy-table');
var mysql = require('mysql');

// Connection to mysl server
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon_db'
});
// Connects to the mysql server and db.
connection.connect(function(err) {
	if (err) throw err;

	// Then Calls the function to start the prompts
	start();
});

// Prompts that ask the user
function start() {
    // connection to query table
    	connection.query('SELECT * FROM stock', function(err, results) {
				if (err) throw err;
	inquirer
		.prompt([
			{
				name: 'idSelection',
				type: 'rawlist',
				choices: function() {
					var idSelectionArray = [];
					for (var i = 0; i < results.length; i++) {
						idSelection.push(results[i].product_name);
					}
					return idSelectionArray;
				},
				message: 'Select the ID of the product you are willing to purchase.'
			},
			{
				name: 'quantity',
				type: 'input',
				message: 'How many would you like to purchase?'
			}
		])
		.then(function(answer) {
            
            var selectedItem;
            for (var i = 0; i < results.length; i++) {
              if (results[i].product_name === answer.idSelection) {
                selectedItem = results[i];
              }
            }

            if(selectedItem.stock_quantity < parseInt(answer.quantity)) {
                connection.query("UPDATE stock SET ? WHERE ?",
                [{stock_quantity: answer.quantity}, {id: selectedItem.id}],
                function(error) {
                    if (error) throw err;
                    console.log("Thank you for you purchase!");
                    start();
                })
            }

        else{
            console.log ("Sorry, We currently dont have enough stock to complete your order.");
            start();
        }
			});
		});
}
