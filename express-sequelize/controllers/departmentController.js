const db = require('../models/model-index');
const Departments = db.departments;

module.exports.getAll = async (_, res) => {
    const department = await Departments.findAll();
    res.send(department);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const department = await Departments.findOne({
        where: { department_id: id },
    });
    res.send(department);
}

module.exports.create = async (req, res) => {
    try {
        const { name, locationId } = req.body;
        const department = await Departments.create({
            department_name: name,
            location_id: locationId
        });

        return res.send(department);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.update = async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    const department = await Departments.update({ department_name: name }, { returning: true, where: { department_id: id } });

    return res.send(department);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const department = await Departments.destroy({ where: { department_id: id } });
    return res.send(`deleted ${department} row`);
}