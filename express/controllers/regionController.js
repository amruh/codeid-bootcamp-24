const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from regions');
    res.send(result.rows);
} 

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from regions where region_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { name } = req.body;
    const query = {
        text: 'insert into regions (region_name) values ($1) returning region_id, region_name',
        values: [name]
    }

    const result = await pool.query(query);
    res.send(result.rows[0])
}

module.exports.update = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update regions set region_name = $1 where region_id = $2',
        values: [name, id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => { 
    const { id } = req.params;
    const query = {
        text: 'delete from regions where region_id = $1 returning region_id',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows[0]);
}