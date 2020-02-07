const Inquirer = require("inquirer");

function introQuestions(){
    Inquirer.prompt([
        {
            type: "list", 
            name: "action",
            message: "What would you like to do?",
            choices: ["View All Employees", "View Employees by Department", "View All Employees by Manager", "View Employees by Role", "View the Total Utilized Budget of a Department", "Add Employees", "Remove Employees", "Add Roles", "Delete Roles", "Add Departments", "Delete Departments", "Update Employee Role", "Update Employee Manager"]
        }
    ])
};

function viewbyDept(){
    Inquirer.prompt([
        {
            type: "list",
            name: "viewDepartment",
            message: "Which department would you like to view?",
            choices: "for loop" //for loop that shows non duplicated department names
        }
    ])
};

function viewbyManager(){
    Inquirer.prompt([
        {
            type: "list",
            name: "viewManager",
            message: "Which manager's staff would you like to view?",
            choices: "for loop" //for loop that shows non duplicated manager names
        }
    ])
};



module.exports = introQuestions;