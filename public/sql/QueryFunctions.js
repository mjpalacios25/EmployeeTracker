const Inquirer = require("inquirer");

class Query {
    viewbyDept(){
        Inquirer.prompt([
            {
                type: "list",
                name: "viewDepartment",
                message: "Which department would you like to view?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"] 
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    viewbyManager(){
        Inquirer.prompt([
            {
                type: "list",
                name: "viewManager",
                message: "Which manager's staff would you like to view?",
                choices: ["Barry Sanders", "Wayne Gretzky", "Cassius Clay", "Ken Griffey", "Usain Bolt", "Joe Montana", "Magic Johnson", "Pete Samphras"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    viewbyRole(){
        Inquirer.prompt([
            {
                type: "list",
                name: "viewRole",
                message: "Which role would you like to view?",
                choices: ["Manager", "Employee", "Intern"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    viewUtilizedBudget(){
        Inquirer.prompt([
            {
                type: "list",
                name: "viewBudget",
                message: "Which department's utilized budget would you like to view?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    addEmployees(){
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
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            },
            {
                type: "list",
                name: "addtoRole",
                message: "Which role do you want to assign this person?",
                choices: ["Manager", "Employee", "Intern"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    deleteEmployees(){
        Inquirer.prompt([
            {
                type: "input",
                name: "firstLastName",
                message: "What is the first and last name of the person you'd like to remove?",
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    addRoles(){
        Inquirer.prompt([
            {
                type: "input",
                name: "newRole",
                message: "What is the new role you'd like to add?",
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    deleteRoles(){
        Inquirer.prompt([
            {
                type: "input",
                name: "deleteRole",
                message: "What is the role you'd like to delete?",
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    addDepartment(){
        Inquirer.prompt([
            {
                type: "input",
                name: "newDept",
                message: "What is the department you'd like to add?",
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    deleteDepartment(){
        Inquirer.prompt([
            {
                type: "input",
                name: "deleteDept",
                message: "What is the department you'd like to remove?",
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    updateRole(){
        Inquirer.prompt([
            {
                type: "input",
                name: "employee",
                message: "Which employee would you like to udpate?"
            },
            {
                type: "list",
                name: "newRole",
                message: "What would you like their new role to be?",
                choices: ["Manager", "Employee", "Intern"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };
    updateManager(){
        Inquirer.prompt([
            {
                type: "input",
                name: "employee",
                message: "Which employee would you like to udpate?"
            },
            {
                type: "list",
                name: "newManager",
                message: "Who would you like their new manager to be?",
                choices: ["Barry Sanders", "Wayne Gretzky", "Cassius Clay", "Ken Griffey", "Usain Bolt", "Joe Montana", "Magic Johnson", "Pete Samphras"]
            }
        ]).then(function(answer){
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function(err, res) {
              for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
              }
              startQuestions.introQuestions();
            });
        })
    };

}