import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';

class Recipe extends Model {}

Recipe.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Recipe'
});

export default Recipe;
