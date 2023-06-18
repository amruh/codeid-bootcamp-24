module.exports = (sq, DataTypes) => {
  const Categories = sq.define(
    "categories",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      "cateName": {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      schema: "shopping",
      timestamps: false,
      indexes: [
        {
          name: "category_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );

  return Categories;
};
