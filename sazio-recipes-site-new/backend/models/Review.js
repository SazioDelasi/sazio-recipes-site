import { DataTypes, Model } from 'sequelize';
import sequelize from './index.js';
import User from './User.js';
import Recipe from './Recipe.js';

class Review extends Model {}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Review'
});

User.hasMany(Review);
Review.belongsTo(User);
Recipe.hasMany(Review);
Review.belongsTo(Recipe);

export default Review;
