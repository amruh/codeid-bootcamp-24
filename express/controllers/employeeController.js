const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from employees limit 15');
    res.send(result.rows);
}

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from employees where employee_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { firstname, lastname, email, phone, hiredate, salary, commission, jobId, managerId, departmentId, xempId } = req.body;
    const query = {
        text: 'insert into employees (first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, manager_id, department_id, xemp_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
        values: [firstname, lastname, email, phone, hiredate, salary, commission, jobId, managerId, departmentId, xempId]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.update = async (req, res) => {
    const { firstname, lastname } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update employees set first_name = $1, last_name = $2 where employee_id = $3',
        values: [firstname, lastname, id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from employees where employee_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}