const db = require('../models/model-index');
const Locations = db.locations;

module.exports.getAll = async (_, res) => {
    const locations = await Locations.findAll();
    res.send(locations);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const location = await Locations.findOne({
        where: { location_id: id },
    });
    res.send(location);
}

module.exports.create = async (req, res) => {
    try {
        const { address, postalCode, city, stateProvince, countryId } = req.body;
        const location = await Locations.create({
            street_address : address,
            postal_code: postalCode,
            city: city,
            state_province: stateProvince,
            country_id: countryId
        });

        return res.send(location);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.update = async (req, res) => {
    const { address, postalCode, city, stateProvince, countryId } = req.body;
    const { id } = req.params;

    const location = await Locations.update(
        { 
            street_address : address,
            postal_code: postalCode,
            city: city,
            state_province: stateProvince,
            country_id: countryId 
        }, 
        { returning: true, where: { location_id: id } }
    );

    return res.send(location);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const location = await Locations.destroy({ where: { location_id: id } });
    return res.send(`deleted ${location} row`);
}