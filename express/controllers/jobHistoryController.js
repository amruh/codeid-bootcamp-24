const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from job_history');
    res.send(result.rows);
} 

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from job_history where employee_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { employee, start, end, jobId, departmentId } = req.body;
    const query = {
        text: 'insert into job_history (employee_id, start_date, end_date, job_id, department_id) values ($1, $2, $3, $4, $5)',
        values: [employee, start, end, jobId, departmentId]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from job_history where employee_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}