SELECT department.name, SUM(role.salary)
FROM employee
INNER JOIN role ON (role.id = employee.id) 
INNER JOIN department on (department.id = role.department_id)
WHERE (department.name = "Accounting") 
