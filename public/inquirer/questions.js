const Inquirer = require("inquirer");

class introQuestions {
    introQuestions(){
        Inquirer.prompt([
            {
                type: "list", 
                name: "action",
                message: "What would you like to do?",
                choices: ["View All Employees", "View Employees by Department", "View All Employees by Manager", "View Employees by Role", "View the Total Utilized Budget of a Department", "Add Employees", "Remove Employees", "Add Roles", "Delete Roles", "Add Departments", "Delete Departments", "Update Employee Role", "Update Employee Manager"]
            }
        ]).then(function(response){
            if(response.action === "View Employees by Department"){
                Inquirer.prompt([
                    {
                        type: "list",
                        name: "viewDepartment",
                        message: "Which department would you like to view?",
                        choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
                    }
                ])
            };
            if(response.action === "View All Employees by Manager"){
                Inquirer.prompt([
                    {
                        type: "list",
                        name: "viewManager",
                        message: "Which manager's staff would you like to view?",
                        choices: ["Mark Sanchez", "Wayne Gretzky", "Cassius Clay", "Ken Griffey", "Neil Young", "Joe Montana", "Magic Johnson", "Pete Samphras"] //for loop that shows non duplicated manager names
                    }
                ])
            };
            if(response.action === "View All Employees by Role"){
                Inquirer.prompt([
                    {
                        type: "list",
                        name: "viewRole",
                        message: "Which role would you like to view?",
                        choices: "for loop" //for loop that shows non duplicated role names
                    }
                ])
            };
            if(response.action === "View the Total Utilized Budget of a Department"){
                Inquirer.prompt([
                    {
                        type: "list",
                        name: "viewBudget",
                        message: "Which department's utilized budget would you like to view?",
                        choices: "for loop" //for loop that shows non duplicated department names
                    }
                ])
            };
            if(response.action === "Add Employees"){
                Inquirer.prompt([
                    {
                        type: "input",
                        name: "firstLastName",
                        message: "What is the first and last name of the person you'd like to add?",
                    },
                    {
                        type: "list",
                        name: "addtoDept",
                        message: "Which department would you like to add this person to?",
                        choices: ["for loop"] //for loop that shows non duplicated department names
                    },
                    {
                        type: "list",
                        name: "addtoRole",
                        message: "Which role do you want to assign this person?",
                        choices: ["for loop"] //for loop that shows non duplicated role names
                    }
                ])
            }
        })
    };
    
}





module.exports = introQuestions;