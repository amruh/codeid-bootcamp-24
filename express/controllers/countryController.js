const pool = require('../db');

module.exports.getAll = async (_, res) => {
    const result = await pool.query('select * from countries');
    res.send(result.rows);
}

module.exports.getById = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'select * from countries where country_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.post = async (req, res) => {
    const { id, name, regionId } = req.body;
    const query = {
        text: 'insert into countries (country_id, country_name, region_id) values ($1, $2, $3)',
        values: [ id, name, regionId ]
    }

    const result = await pool.query(query);
    res.send(result.rows)
}

module.exports.update = async (req, res) => {
    const { name, regionId } = req.body;
    const { id } = req.params;

    const query = {
        text: 'update countries set country_name = $1, region_id = $2 where country_id = $3',
        values: [ name, regionId, id ]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const query = {
        text: 'delete from countries where country_id = $1',
        values: [id]
    }

    const result = await pool.query(query);
    res.send(result.rows);
}