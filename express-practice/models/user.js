module.exports = (sq, DataTypes) => {
  const Users = sq.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      schema: "public",
      indexes: [
        {
          name: "users_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return Users;
};
