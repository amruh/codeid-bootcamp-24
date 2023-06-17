module.exports = (sq, DataTypes) => {
  const ProductCategories = sq.define(
    "product_category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      tableName: "product_category",
      schema: "public",
      indexes: [
        {
          name: "product_category_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return ProductCategories;
};
