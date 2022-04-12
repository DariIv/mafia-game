const { route } = require('./loginRouter.route');

const router = require('express').Router();

router.route('/')
  .get((req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      // req.clearCookie('user_sid');
      res.json({ user: '' });
    });
  });

module.exports = router;
