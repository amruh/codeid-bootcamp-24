const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from departments');
    res.send(result.rows);
}

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from departments where department_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { name, managerId, locationId } = req.body;
    const query = {
        text: 'insert into departments (department_name, manager_id, location_id) values ($1, $2, $3)',
        values: [ name, managerId, locationId ]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.update = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update departments set department_name = $1 where department_id = $2',
        values: [ name, id ]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from departments where department_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}