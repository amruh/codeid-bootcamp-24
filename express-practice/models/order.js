module.exports = (sq, DataTypes) => {
    const Orders = sq.define(
      "orders",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        totalproduct: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        totalprice: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: "orders",
        schema: "public",
        indexes: [
          {
            name: "orders_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  
    return Orders;
  };
  