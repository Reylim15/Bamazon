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

// Prompts that ask the user.
function start() {
    // connection to query table.
    	connection.query('SELECT * FROM stock', function(err, results) {
            if (err) throw err;
// Asks the use what action they'd like to take.            
	inquirer
		.prompt([
			{
                // Retreives the list of items in the db through their id's and their name.
				name: 'idSelection',
				type: 'rawlist',
				choices: function() {
					var idSelectionArray = [];
					for (var i = 0; i < results.length; i++) {
						idSelectionArray.push(results[i].product_name);
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
       
            // This goes throught and finds what was the selectedItem.
            var selectedItem;
            for (var i = 0; i < results.length; i++) {
              if (results[i].product_name === answer.idSelection) {
                selectedItem = results[i];
              }
            }

            // if(selectedItem.stock_quantity < parseInt(answer.quantity)) {
            //     connection.query("UPDATE stock SET ? WHERE ?",
            //     [{stock_quantity: answer.quantity}, {id: selectedItem.id}],
            //     function(error) {
            //         if (error) throw err;
            //         console.log("Thank you for you purchase!");
            //         start();
            //     })
            // }

        // else{
// If contents are more than whats in stock then sale cannot be made.
        if(answer.quantity > selectedItem.stock_quantity) {
            console.log ("Sorry, We currently dont have enough stock to complete your order.");
						// loops back to start function
						start();
						
						// If contents are less than stock then sale can be made.
        } else if (answer.quantity < selectedItem.stock_quantity) {
					// Prints out quantity in cart.
						console.log("The amount of product you currently have in your cart: " + answer.quantity);
						
						
				// This portion is still in the works but its used to update the current quantity of stock.	
					// var newStockQuant =	selectedItem.stock_quantity - answer.quantity;
					// 	connection.query("UPDATE stock SET ?",
					// 	[
					// 		{
					// 			stock_quantity: newStockQuant
					// 		},
					// 	],
					// 	)


					// Prints the price.
            var calculatedPrice = answer.quantity * selectedItem.price_for_customer;
						console.log("The total price: $" + calculatedPrice);
						// loops back to start
						start();
        }
			});
		});
}
