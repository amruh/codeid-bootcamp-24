const db = require('../models/model-index');
const Employees = db.employees;

module.exports.getAll = async (_, res) => {
    const employees = await Employees.findAll();
    res.send(employees);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const employee = await Employees.findOne({
        where: { employee_id: id },
    });
    res.send(employee);
}

module.exports.create = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, jobId, salary, commission, managerId, departmentId } = req.body;
        const employee = await Employees.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            job_id: jobId,
            salary: salary,
            commission_pct: commission,
            manager_id: managerId,
            department_id: departmentId
        });
        console.log(employee);
        return res.send(employee);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.update = async (req, res) => {
    const { firstName, lastName, } = req.body;
    const { id } = req.params;

    const employee = await Employees.update(
        { first_name: firstName, last_name: lastName }, 
        { returning: true, where: { employee_id: id } }
    );

    return res.send(employee);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const employee = await Employees.destroy({ where: { employee_id: id } });
    return res.send(`deleted ${employee} row`);
}