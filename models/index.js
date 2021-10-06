const User = require('./User');
const Post = require('./Post');
const Recipe = require('./Recipe');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Recipe, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Recipe,
  Post
};