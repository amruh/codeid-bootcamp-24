const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from locations');
    res.send(result.rows);
} 

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from locations where location_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { address, postal, city, province, country } = req.body;
    const query = {
        text: 'insert into locations (street_address, postal_code, city, state_province, country_id) values ($1, $2, $3, $4, $5)',
        values: [address, postal, city, province, country]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.update = async (req, res) => {
    const { address } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update locations set street_address = $1 where location_id = $2',
        values: [address, id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from locations where location_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}