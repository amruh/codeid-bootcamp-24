module.exports = (sq, DataTypes) => {
  const Regions = sq.define('regions', {
    region_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      region_name: {
        type: DataTypes.STRING(25),
        allowNull: true
      }
  }, {
      tableName: 'regions',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "region_pkey",
          unique: true,
          fields: [
            { name: "region_id" },
          ]
        },
      ]
  });

  return Regions;
} 