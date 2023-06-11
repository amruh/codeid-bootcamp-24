module.exports = (sq, DataTypes) => {
    const Jobs = sq.define('jobs', {
        job_id: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
          },
          job_title: {
            type: DataTypes.STRING(31),
            allowNull: true
          },
          min_salary: {
            type: DataTypes.DECIMAL,
            allowNull: true
          },
          max_salary: {
            type: DataTypes.DECIMAL,
            allowNull: true
          }
    }, {
        tableName: 'jobs',
        schema: 'public',
        timestamps: false,
        indexes: [{
            name: "jobs_pkey",
            unique: true,
            fields: [{ name: "job_id" }]
        }]
    });
    return Jobs;
}