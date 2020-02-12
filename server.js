const Inquirer = require("inquirer");
//const questions = require("./public/inquirer/questions2");
const searchCommands = require("./public/sql/QueryFunctions");
const mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "testtest",
    database: "SportsDudesDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });


var search = new searchCommands;

function runSearch(){
    Inquirer.prompt([
        {
            type: "list", 
            name: "action",
            message: "What would you like to do?",
            choices: ["View All Employees", "View Employees by Department", "View All Employees by Manager", "View Employees by Role", "View the Total Utilized Budget of a Department", "Add Employees", "Remove Employees", "Add Roles", "Delete Roles", "Add Departments", "Delete Departments", "Update Employee Role", "Update Employee Manager"]
        }
    ]).then(function(answer){
        switch (answer.action){
            case "View All Employees" : 
            search.viewAll();
            break;
        }

    })
}