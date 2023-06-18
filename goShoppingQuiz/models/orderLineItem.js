module.exports = (sq, DataTypes) => {
  return sq.define(
    "orderLineItems",
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
      'orderId': {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "orders",
          key: "id",
        },
      },
    },
    {
      schema: "shopping",
      timestamps: false,
      indexes: [
        {
          name: "order_line_item_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
