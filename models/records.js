'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.records.belongsTo(models.users, {foreignKey: "userID"})
    }
  }
  records.init({
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    type: DataTypes.STRING,
    category: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'records',
  });
  return records;
};