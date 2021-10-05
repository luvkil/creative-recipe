const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const recipeRoutes = require('./recipe-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', recipeRoutes);

module.exports = router;