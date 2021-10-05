const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
