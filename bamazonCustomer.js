//Pull in required dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');
//connecting to MySQL
var connection = mysql.createConnection({
    host: 'localHost',
    port: 3306,
    //your username
    user: 'root',
    //your password
    password: 'root',
    database: 'bamazon'
});
connection.connect(function (err) {
    if (err) throw (err)
    console.log("connected as id " + connection.threadId);
    start();
});
//first prompt asking if they want to shop or not
function start() {
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'confirm',
            message: 'Welcome! Would you like to buy something?',
            default: true
        }])
        .then(function (response) {
            if (response.confirm) {
                inventory();
            }
            else {
                console.log('Thank you! Come again!');
                connection.end();
            }
        });
}
////adding inventory
function inventory() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (let i = 0; i < response.length; i++) {
            console.log("ID: " + response[i].id + " | " + "Product: " + response[i].product_name + " | " + "Department: " + response[i].department_name + " | " + "Price: " + response[i].price + " | " + "QTY: " + response[i].stock_quantity);
            console.log('--------------------------------------------------------------------------------------------------')
        }
        inquirer
            .prompt([{
                type: "input",
                name: "id",
                message: "Enter ID of the product you would like to purchase.",
                validate: function (value) {
                    if (isNaN(value) === false && parseInt(value) <= response.length && parseInt(value) > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: 'qty',
                message: "Input the quantity you would like to purchase.",
                validate: function (value) {
                    if (isNaN(value)) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }])
            .then(function (answer) {
                var itemBought = (answer.id) - 1;
                var qtyBought = parseInt(answer.qty);
                var totalPrice = parseFloat(((response[itemBought].price) * qtyBought).toFixed(2));
                ///check quantities
                if (response[itemBought].stock_quantity >= qtyBought) {
                    ///update qty
                    connection.query("UPDATE products SET ? WHERE ?", [
                        { stock_quantity: (response[itemBought].stock_quantity - qtyBought) },
                        { id: answer.id }],
                        function (err, result) {
                            if (err) throw err;
                            console.log("Your total is $" + totalPrice.toFixed(2) + ". Items ship next day. Thank You!")
                            connection.end();
                        });
                }
                else {
                    inventory();
                    console.log("----------------------------SORRY NOT ENOUGH IN STOCK!!-----------------------")
                }
            })
    })
}
