const Inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');


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
  });


// create an empty varibale where I can push query results that can display in the choices section... maybe would work?

async function displayQueries(){
    
        var query = "SELECT name FROM department";
        var deptList = [];
        var departments = await connection.query(query, function(err, res){
            var deptList = [];
            for(let i = 0; i < res.length; i++){
                deptList.push(res[i].name)
            }
            console.log(deptList);
            return deptList
        
        }); 
    await console.log(departments);
}

class Query {
    viewAll(){
        var query = "SELECT department.name, employee.first_name, employee.last_name, role.title, role.salary ";
            query += "FROM employee ";
            query += "INNER JOIN role ON (role.id = employee.id) ";
            query += "INNER JOIN department on (department.id = role.department_id);";
            connection.query(query, function(err, res){
                    console.table( res)
            });
    };
    async viewbyDept(){
        //    var stuff =  await displayQueries().then(function(response){
        //        console.log("things " + response);
        //        return response
        //    });
        //    var choicestoSee = await stuff;

        //    console.log("view arry: "+ viewArray);
        //    var seeChoices = viewArray
        Inquirer.prompt([
            {
                type: "list",
                name: "viewDepartment",
                message: "Which department would you like to view?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            }
        ]).then(function(answer){
            var query = "SELECT department.name, employee.first_name, employee.last_name, role.title, role.salary ";
            query += "FROM employee ";
            query += "INNER JOIN role ON (role.id = employee.id) ";
            query += "INNER JOIN department on (department.id = role.department_id) ";
            query += "WHERE (department.name = ?)";
            connection.query(query, [answer.viewDepartment] , function(err, res) {
                console.table(res)
            
        }); 
        });
        
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
            var query = "SELECT  department.name, employee.first_name, employee.last_name, employee.role_id, employee.manager_id ";
            query += "FROM employee ";
            query += "INNER JOIN role ON (role.id = employee.role_id) ";
            query += "INNER JOIN department on (department.id = role.department_id) ";
            query += "WHERE (manager_id = ?)";

            var managerID;

            if(answer.viewManager === "Barry Sanders"){managerID = 1}
            else if(answer.viewManager === "Wayne Gretzky"){managerID = 2}
            else if(answer.viewManager === "Cassius Clay"){managerID = 3}
            else if(answer.viewManager === "Ken Griffey"){managerID = 4}
            else if(answer.viewManager === "Usain Bolt"){managerID = 5}
            else if(answer.viewManager === "Joe Montana"){managerID = 6}
            else if(answer.viewManager === "Magic Johnson"){managerID = 7}
            else if(answer.viewManager === "Pete Samphras"){managerID = 8};

            connection.query(query, [managerID] , function(err, res) {
                console.table(res)
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
            var query = "SELECT role.title, department.name, employee.first_name, employee.last_name, role.salary ";
            query += "FROM employee ";
            query += "INNER JOIN role ON (role.id = employee.id) ";
            query += "INNER JOIN department on (department.id = role.department_id) ";
            query += "WHERE (role.title = ?)";
            connection.query(query, [answer.viewRole] , function(err, res) {
                console.table(res)
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
            var query = "SELECT department.name, SUM(role.salary) ";
            query += "FROM employee ";
            query += "INNER JOIN role ON (role.id = employee.id) ";
            query += "INNER JOIN department on (department.id = role.department_id) ";
            query += "WHERE(department.name = ?); ";
            connection.query(query, [answer.viewBudget] , function(err, res) {
                console.table(res)
            });
        })
    };
    addEmployees(){
        Inquirer.prompt([
            {
                type: "input",
                name: "firsName",
                message: "What is the first name of the person you'd like to add?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the last name of the person you'd like to add?",
            },
            {
                type: "list",
                name: "addtoRole",
                message: "Which role do you want to assign this person?",
                choices: ["Manager", "Employee", "Intern"]
            },
            {
                type: "list",
                name: "addtoManager",
                message: "Who manages this person?",
                choices: ["Barry Sanders", "Wayne Gretzky", "Cassius Clay", "Ken Griffey", "Usain Bolt", "Joe Montana", "Magic Johnson", "Pete Samphras"]
            }
        ]).then(function(answer){
            var query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?) ";
            var roleID ;
            var managerID ;
            if(answer.addtoRole === "Manager"){roleID = 1}
            else if(answer.addtoRole === "Employee"){roleID = 2}
            else if(answer.addtoRole === "Intern"){roleID = 3};

            if(answer.addtoManager === "Barry Sanders"){managerID = 1}
            else if(answer.addtoManager === "Wayne Gretzky"){managerID = 2}
            else if(answer.addtoManager === "Cassius Clay"){managerID = 3}
            else if(answer.addtoManager === "Ken Griffey"){managerID = 4}
            else if(answer.addtoManager === "Usain Bolt"){managerID = 5}
            else if(answer.addtoManager === "Joe Montana"){managerID = 6}
            else if(answer.addtoManager === "Magic Johnson"){managerID = 7}
            else if(answer.addtoManager === "Pete Samphras"){managerID = 8};
        
            
            connection.query(query, [answer.firsName, answer.lastName, roleID, managerID] , function(err, res) {
                console.table(res)
            });
        })
    };
    deleteEmployees(){
        Inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the first name of the person you'd like to remove?",
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the last name of the person you'd like to remove?",
            }
        ]).then(function(answer){
            var query = "DELETE FROM employee WHERE (first_name = ? AND last_name = ?) ";
            
            connection.query(query, [answer.firstName, answer.lastName] , function(err, res) {
                console.table(res)
            });
        })
    };
    addRoles(){
        Inquirer.prompt([
            {
                type: "list",
                name: "newRole",
                message: "What is the new role you'd like to add?",
                choices: ["Manager", "Employee", "Intern"]
            }, 
            {
                type: "input",
                name: "salary",
                message: "What will be the salary for this role?"
            },
            {
                type: "list",
                name: "department",
                message: "What department will this position belong to?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            }
        ]).then(function(answer){
            var query = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?) ";
            var departmentid ;

            if(answer.department === "Accounting"){departmentid = 1}
            else if(answer.department === "Programs"){departmentid = 2}
            else if(answer.department === "Operations"){departmentid = 3}
            else if(answer.department === "Information Technology"){departmentid = 4}
            else if(answer.department === "Executive"){departmentid = 5}
            else if(answer.department === "Marketing"){departmentid = 6}
            else if(answer.department === "Fundraising"){departmentid = 7}
            else if(answer.department === "Human Resources"){departmentid = 8};

            connection.query(query, [answer.newRole, answer.salary, departmentid] , function(err, res) {
                console.table(res)
            });
        })
    };
    deleteRoles(){
        Inquirer.prompt([
            {
                type: "list",
                name: "deleteRole",
                message: "What is the role you'd like to delete?",
                choices: ["Manager", "Employee", "Intern"]
            }, 
            {
                type: "list",
                name: "deleteDept",
                message: "Which department ?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            }
        ]).then(function(answer){
            var query = "DELETE FROM role WHERE (title = ? AND department_id = ?) ";
            var departmentid ;

            if(answer.department === "Accounting"){departmentid = 1}
            else if(answer.department === "Programs"){departmentid = 2}
            else if(answer.department === "Operations"){departmentid = 3}
            else if(answer.department === "Information Technology"){departmentid = 4}
            else if(answer.department === "Executive"){departmentid = 5}
            else if(answer.department === "Marketing"){departmentid = 6}
            else if(answer.department === "Fundraising"){departmentid = 7}
            else if(answer.department === "Human Resources"){departmentid = 8};
            connection.query(query, [answer.deleteRole, departmentid] , function(err, res) {
                console.table(res)
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
            var query = "INSERT INTO department (name) VALUES ? ";
            connection.query(query, [answer.newDept] , function(err, res) {
                console.table(res)
            });
        })
    };
    deleteDepartment(){
        Inquirer.prompt([
            {
                type: "list",
                name: "deleteDept",
                message: "What is the department you'd like to remove?",
                choices: ["Accounting", "Programs", "Operations", "Information Technology", "Executive", "Marketing", "Fundraising", "Human Resources"]
            }
        ]).then(function(answer){
            var query = "DELETE FROM department WHERE (name = ?) ";
            connection.query(query, [answer.deleteDept] , function(err, res) {
                console.table(res)
            });
        })
    };
    updateRole(){
        Inquirer.prompt([
            {
                type: "input",
                name: "firstNameEmployee",
                message: "What is the first name of the employee whose role you'd like to update?"
            },
            {
                type: "input",
                name: "lastNameEmployee",
                message: "What is the last name of the employee whose role you'd like to update?"
            },
            {
                type: "list",
                name: "newRole",
                message: "What would you like their new role to be?",
                choices: ["Manager", "Employee", "Intern"]
            }
        ]).then(function(answer){
            var query = "UPDATE employee SET role_id = ? WHERE (first_name = ? AND last_name = ?)";
            var roleID ;

            if(answer.addtoRole === "Manager"){roleID = 1}
            else if(answer.addtoRole === "Employee"){roleID = 2}
            else if(answer.addtoRole === "Intern"){roleID = 3};

            connection.query(query, [roleID, answer.firstNameEmployee, answer.lastNameEmployee] , function(err, res) {
                console.table(res)
            });
        })
    };
    updateManager(){
        Inquirer.prompt([
            {
                type: "input",
                name: "firstNameEmployee",
                message: "What is the first name of the employee whose manager you'd like to update?"
            },
            {
                type: "input",
                name: "lastNameEmployee",
                message: "What is the last name of the employee whose manager you'd like to update?"
            },
            {
                type: "list",
                name: "newManager",
                message: "Who would you like their new manager to be?",
                choices: ["Barry Sanders", "Wayne Gretzky", "Cassius Clay", "Ken Griffey", "Usain Bolt", "Joe Montana", "Magic Johnson", "Pete Samphras"]
            }
        ]).then(function(answer){
            var query = "UPDATE employee SET manager_id = ? WHERE (first_name = ? AND last_name = ?)";
            var managerID ;

            if(answer.addtoManager === "Barry Sanders"){managerID = 1}
            else if(answer.addtoManager === "Wayne Gretzky"){managerID = 2}
            else if(answer.addtoManager === "Cassius Clay"){managerID = 3}
            else if(answer.addtoManager === "Ken Griffey"){managerID = 4}
            else if(answer.addtoManager === "Usain Bolt"){managerID = 5}
            else if(answer.addtoManager === "Joe Montana"){managerID = 6}
            else if(answer.addtoManager === "Magic Johnson"){managerID = 7}
            else if(answer.addtoManager === "Pete Samphras"){managerID = 8};

            connection.query(query, [managerID, answer.firstNameEmployee, answer.lastNameEmployee] , function(err, res) {
                console.table(res)
            });
        })
    };

}



module.exports = Query