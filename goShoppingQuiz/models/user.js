module.exports = (sq, DataTypes) => {
  const Users = sq.define(
    "users",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      "userName": {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
    },
    {
      schema: "shopping",
      timestamps: false,
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
