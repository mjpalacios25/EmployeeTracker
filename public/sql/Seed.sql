INSERT INTO department (name) VALUES ("Accounting");
INSERT INTO department (name) VALUES ("Operations");
INSERT INTO department (name) VALUES ("Information Technology");
INSERT INTO department (name) VALUES ("Executive");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Fundraising");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Programs");

-- select * from department
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Barry", "Sanders", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Wayne", "Gretzky", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Cassius", "Clay", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Ken", "Griffey", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Usain", "Bolt", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Joe", "Montana", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Magic", "Johnson", 1, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("Pete", "Samphras", 1, null);

-- select * from employee

INSERT INTO role(title, salary, department_id) VALUES ("Manager", 150000.00, 1);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 100000.00, 2);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 160000.00, 3);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 180000.00, 4);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 260000.00, 5);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 190000.00, 6);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 120000.00, 7);
INSERT INTO role(title, salary, department_id) VALUES ("Manager", 200000.00, 8);

 select * from role