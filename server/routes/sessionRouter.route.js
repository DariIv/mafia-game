const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.user_data) {
    const { id } = req.session.user_data;
    const user = await User.findByPk(id);
    console.log(user);
    res.json(user);
  } else {
    console.log(req.session);
    res.json(req.session);
  }
});
module.exports = router;
