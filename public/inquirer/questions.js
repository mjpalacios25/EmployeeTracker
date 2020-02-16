const Inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');
const queries = require("../sql/QueryFunctions");

const search = new queries;

module.exports = {
runSearch(){
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

            case "View Employees by Department" :
            search.viewbyDept();
            break;

            case "View All Employees by Manager" :
            search.viewbyManager();
            break;

            case "View Employees by Role" :
            search.viewbyRole();
            break;

            case "View the Total Utilized Budget of a Department" :
            search.viewUtilizedBudget();
            break;

            case "Add Employees" :
            search.addEmployees();
            break;

            case "Remove Employees" :
            search.deleteEmployees();
            break;

            case "Add Roles" :
            search.addRoles();
            break;

            case "Delete Roles" :
            search.deleteRoles();
            break;

            case "Add Departments" :
            search.addDepartment();
            break;

            case "Delete Departments" :
            search.deleteDepartment();
            break;

            case "Update Employee Role" :
            search.updateRole();
            break;

            case "Update Employee Manager" :
            search.updateManager();
            break;
        }

    })
}
}

