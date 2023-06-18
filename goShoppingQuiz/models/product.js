module.exports = (sq, DataTypes) => {
  const Products = sq.define(
    "products",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      'categoryId': {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      schema: "shopping",
      timestamps: false,
      indexes: [
        {
          name: "product_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return Products;
};
