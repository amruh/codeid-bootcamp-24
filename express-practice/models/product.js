module.exports = (sq, DataTypes) => {
  const Products = sq.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "product_category",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: "products",
      schema: "public",
      indexes: [
        {
          name: "products_category_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return Products;
};
