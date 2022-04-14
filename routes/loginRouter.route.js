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
      res.json({status:200, message: `Приветствую, ${data.user_name}`, name: data.name_user});
    } else {
      res.json({status:400, message: 'Неверный пароль'});
    }
  } else {
    res.json({status:400, message: 'Такой почты не существует'});
  }
});

// ({ status: 400, message: 'Почта уже используется' });

module.exports = router;
