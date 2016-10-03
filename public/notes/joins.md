# Joins

## Join Example DB

1. Create a database named `join_test_db` and run the SQL provided in the [Join Example DB section](#join-example-db) above; to create the same setup used for this lesson.

    ```sql
    CREATE DATABASE join_test_db;
    ```

    ```sql
    USE join_test_db;

    CREATE TABLE roles (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      PRIMARY KEY (id)
    );

    CREATE TABLE users (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      role_id INT UNSIGNED DEFAULT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (role_id) REFERENCES roles (id)
    );

    INSERT INTO roles (name) VALUES ('admin');
    INSERT INTO roles (name) VALUES ('author');
    INSERT INTO roles (name) VALUES ('reviewer');
    INSERT INTO roles (name) VALUES ('commenter');

    INSERT INTO users (name, email, role_id) VALUES
    ('bob', 'bob@example.com', 1),
    ('joe', 'joe@example.com', 2),
    ('sally', 'sally@example.com', 3),
    ('adam', 'adam@example.com', 3),
    ('jane', 'jane@example.com', null),
    ('mike', 'mike@example.com', null);
    ```

1. Insert 4 new users into the database. One should have a NULL role. The other three should be authors.

    ```sql
    INSERT INTO users (NAME, email, role_id) VALUES
    ('isaac', 'isaac@example.com', 2),
    ('ryan', 'ryan@example.com', 2),
    ('cameron', 'cameron@example.com', NULL),
    ('luis', 'luis@example.com', 2);
    ```

1. Use join, left join, and right join to combine results from the `users` and `roles` tables as we did in the lesson. Before you run each query, guess the expected number of results.

    ```sql
    SELECT * FROM users
    JOIN roles ON users.role_id = roles.id;

    SELECT * FROM users
    LEFT JOIN roles ON users.role_id = roles.id;

    SELECT * FROM users
    RIGHT JOIN roles ON users.role_id = roles.id;
    ```

1. Although not explicitly covered in the lesson, aggregate functions like count can be used with join queries. Use count and the appropriate join type to get a list of roles along with the number of users that has the role. Hint: You will also need to use `group by` in the query.

    ```sql
    SELECT r.name AS 'role name', count(u.name) AS '# of users with role' FROM users AS u
    RIGHT JOIN roles AS r ON u.role_id = r.id
    GROUP BY r.name;
    ```

## Employees Database

1. Using the example in the [Associative Table Joins section](#associative-tables-and-joins) as a guide, write a query that shows each department along with the name of the current manager for that department.

    ```sql
    SELECT d.dept_name AS 'Department Name',
    concat(e.first_name, ' ', e.last_name) AS 'Department Manager'
    FROM departments  AS d
    JOIN dept_manager AS dm ON d.dept_no = dm.dept_no
    JOIN employees    AS e  ON dm.emp_no = e.emp_no
    WHERE dm.to_date > now();
    ```

1. Find the name of all departments currently managed by women.

    ```sql
    SELECT d.dept_name AS 'Department Name', CONCAT(e.first_name, ' ', e.last_name) AS 'Manager Name'
    FROM departments AS d
    JOIN dept_manager AS dm ON d.dept_no = dm.dept_no
    JOIN employees AS e ON dm.emp_no = e.emp_no
    WHERE dm.to_date > NOW()
    AND e.gender = 'F';
    ```

1. Find the current titles of employees currently working in the Customer Service department.

    ```sql
    SELECT t.title AS 'Title', COUNT(e.emp_no) AS 'Number of Employees with Title'
    FROM departments AS d
    JOIN dept_emp AS de ON d.dept_no = de.dept_no
    JOIN employees AS e ON de.emp_no = e.emp_no
    JOIN titles as t ON e.emp_no = t.emp_no
    WHERE d.dept_name = 'Customer Service'
    AND de.to_date > NOW()
    AND t.to_date > NOW()
    GROUP BY t.title;
    ```

1. Find the current salary of all current managers.

    ```sql
    SELECT d.dept_name AS 'Department Name', CONCAT(e.first_name, ' ', e.last_name) AS 'Name', s.salary AS 'Salary'
    FROM departments AS d
    JOIN dept_manager AS dm ON d.dept_no = dm.dept_no
    JOIN employees AS e ON dm.emp_no = e.emp_no
    JOIN salaries AS s ON e.emp_no = s.emp_no
    WHERE dm.to_date > NOW()
    AND s.to_date > NOW();
    ```

**Bonus** Find the names of all current employees, their department name, and their current manager's name.

```sql
SELECT CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name',
    d.dept_name AS 'Department Name',
    CONCAT(m.first_name, ' ', m.last_name) AS 'Manager Name'
FROM employees AS e
JOIN dept_emp AS de ON e.emp_no = de.emp_no
JOIN departments AS d ON de.dept_no = d.dept_no
JOIN dept_manager AS dm ON d.dept_no = dm.dept_no
JOIN employees AS m ON dm.emp_no = m.emp_no
WHERE t.to_date > NOW()
    AND de.to_date > NOW()
    AND dm.to_date > NOW();
```