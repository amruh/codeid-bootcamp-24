const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from jobs');
    res.send(result.rows);
} 

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from jobs where job_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { id, title, minSalary, maxSalary } = req.body;
    const query = {
        text: 'insert into jobs (job_id, job_title, min_salary, max_salary) values ($1, $2, $3, $4)',
        values: [id, title, minSalary, maxSalary]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.update = async (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update jobs set job_title = $1 where job_id = $2',
        values: [title, id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from jobs where job_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}