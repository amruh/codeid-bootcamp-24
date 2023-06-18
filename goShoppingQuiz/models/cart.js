module.exports = (sq, DataTypes) => {
  return sq.define(
    "carts",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      'productId': {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      'subTotal': {
        type: DataTypes.INTEGER,
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
    },
    {
      schema: "shopping",
      timestamps: false,
      indexes: [
        {
          name: "cart_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
