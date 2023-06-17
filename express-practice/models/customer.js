module.exports = (sq, DataTypes) => {
  const Customers = sq.define(
    "customers",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      tableName: "customers",
      schema: "public",
      indexes: [
        {
          name: "customers_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return Customers;
};
