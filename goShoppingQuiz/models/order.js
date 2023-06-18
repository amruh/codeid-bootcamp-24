module.exports = (sq, DataTypes) => {
  return sq.define(
    "orders",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      'orderNo': {
        type: DataTypes.STRING(7),
        allowNull: false,
      },
      'userId': {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      'totalPrice': {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
      }
    },
    {
      schema: "shopping",
      indexes: [
        {
          name: "order_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
