// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Define columns for the product table
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },
    product_name: {
      type: DataTypes.STRING, // Set the data type to STRING
      allowNull: false, // Disallow NULL values
    },
    price: {
      type: DataTypes.DECIMAL, // Set the data type to DECIMAL
      allowNull: false, // Disallow NULL values
      validate: {
        isDecimal: true, // Validate that the value is a decimal number
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Disallow NULL values
      defaultValue: 10, // Set the default value to 10
      validate: {
        isNumeric: true, // Validate that the value is a numeric value
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      references: {
        model: "category", // Reference the 'category' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
