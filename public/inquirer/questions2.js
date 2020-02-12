const Inquirer = require("inquirer");

module.exports = {
    introQuestions(){
        Inquirer.prompt([
            {
                type: "list", 
                name: "action",
                message: "What would you like to do?",
                choices: ["View All Employees", "View Employees by Department", "View All Employees by Manager", "View Employees by Role", "View the Total Utilized Budget of a Department", "Add Employees", "Remove Employees", "Add Roles", "Delete Roles", "Add Departments", "Delete Departments", "Update Employee Role", "Update Employee Manager"]
            }
        ])
    }
}