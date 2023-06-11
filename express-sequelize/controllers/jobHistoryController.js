const db = require('../models/model-index');
const JobHistory = db.jobHistory;

module.exports.getAll = async (_, res) => {
    const histories = await JobHistory.findAll();
    res.send(histories);
}

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const history = await JobHistory.findOne({
        where: { employee_id: id },
    });
    res.send(history);
}

module.exports.create = async (req, res) => {
    try {
        const { id, start, end, jobId, departmentId } = req.body;
        const history = await JobHistory.create({
            employee_id : id,
            start_date: start,
            end_date: end,
            job_id: jobId,
            department_id: departmentId
        });

        return res.send(history);
    } catch (error) {
        res.send(error.errors);        
    }
}

module.exports.delete = async (req, res) => {
    const { id } = req.params;
    const history = await JobHistory.destroy({ where: { employee_id: id } });
    return res.send(`deleted ${history} row`);
}