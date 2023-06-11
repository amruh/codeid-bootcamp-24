const db = require('../models/model-index');
const Regions = db.regions;

module.exports.getAll = async (_, res) => {
    try {
        const result = await Regions.findAll();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}