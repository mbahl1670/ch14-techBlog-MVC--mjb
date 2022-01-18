const User = require('./User');
const Post = require('./Post');

// Define Associations between a user and posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post }