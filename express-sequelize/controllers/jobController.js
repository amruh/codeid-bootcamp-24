const db = require('../models/model-index');
const Jobs = db.jobs;

module.exports.getAll = async (_, res) => {
    const jobs = await Jobs.findAll();
    res.send(jobs);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const job = await Jobs.findOne({
        where: { job_id: id },
    });
    res.send(job);
}

module.exports.create = async (req, res) => {
    try {
        const { id, title, minSalary, maxSalary } = req.body;
        const job = await Jobs.create({
            job_id : id,
            job_title: title,
            min_salary: minSalary,
            max_salary: maxSalary
        });

        return res.send(job);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.update = async (req, res) => {
    const { title } = req.body;
    const { id } = req.params;

    const job = await Jobs.update({ job_title: title }, { returning: true, where: { job_id: id } }
    );

    return res.send(job);
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const job = await Jobs.destroy({ where: { job_id: id } });
    return res.send(`deleted ${job} row`);
}