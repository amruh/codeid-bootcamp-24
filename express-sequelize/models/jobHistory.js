const { jobHistory } = require("./model-index");

module.exports = (sq, DataTypes) => {
    const JobHistory = sq.define('job_history', {
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'employees',
              key: 'employee_id'
            }
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            primaryKey: true
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        job_id: {
            type: DataTypes.STRING(10),
            allowNull: true,
            references: {
              model: 'jobs',
              key: 'job_id'
            }
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'departments',
              key: 'department_id'
            }
        }
    }, {
        tableName: 'job_history',
        schema: 'public',
        timestamps: false,
        indexes: [{
            name: "employee_id_start_date_pk",
            unique: true,
            fields: [{ name: "employee_id" },{ name: "start_date" }]
        }]
    });
    return JobHistory;
}