module.exports = (sq, DataTypes) => {
    const OrderDetails = sq.define(
      "order_detail",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        order_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "orders",
            key: "id",
          },
        },
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "products",
            key: "id",
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: "order_detail",
        schema: "public",
        indexes: [
          {
            name: "order_detail_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  
    return OrderDetails;
  };
  