const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/').post(async (req, res) => {
  // 1 Вариант
  // res.json({ status: 200, message: 'Добро пожаловать'})

  // 2 Вариант
  const { user_email, user_password } = req.body;

  const data = await User.findOne({ where: { user_email }, raw: true });

  const post = (status, message) => ({
    status,
    message,
  });

  if (data) {
    const pass = await bcrypt.compare(user_password, data.user_password);

    if (pass) {
      req.session.user_data = data;
      res.json({ status: 200, message: `Приветствую, ${data.user_name}`, name: data.user_name });
    } else {
      res.json(post(400, 'Неверный пароль'));
    }
  } else {
    res.json(post(400, `Такой почты не существует ${user_email}`));
  }
});

module.exports = router;
