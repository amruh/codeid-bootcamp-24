const db = require('../models/model-index');
const Countries = db.countries;

module.exports.getAll = async (_, res) => {
    const countries = await Countries.findAll();
    res.send(countries);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const country = await Countries.findOne({
        where: { country_id: id },
    });
    res.send(country);
}

module.exports.create = async (req, res) => {
    try {
        const { id, name, regionId } = req.body;
        const country = await Countries.create({
            country_id : id,
            country_name: name,
            region_id: regionId
        });

        return res.send(country);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.update = async (req, res) => {
    const { name, regionId } = req.body;
    const { id } = req.params;

    const country = await Countries.update(
        { country_name: name, region_id: regionId }, 
        { returning: true, where: { country_id: id } }
    );

    return res.send(country);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const country = await Countries.destroy({ where: { country_id: id } });
    return res.send(`deleted ${country} row`);
}