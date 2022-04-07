const router = require('express').Router();
const bcrypt = require('bcrypt');
const formCheck = require('../../middlewares/formCheck');
const { User } = require('../../db/models');

// Login Form
router
  .route('/login')
  .get(formCheck, (req, res) => {
    res.render('form/login');
  })
  .post(async (req, res) => {
    const { user_email, user_password } = req.body;

    const data = await User.findOne({ where: { user_email }, raw: true });

    if (data) {
      const pass = await bcrypt.compare(user_password, data.user_password);

      if (pass) {
        req.session.user_data = data;
        res.render('form/succes', { layout: false, user_name: data.user_name });
      } else {
        res.render('form/error', { layout: false, error: 'Неверный пароль' });
      }
    } else {
      res.render('form/error', {
        layout: false,
        error: 'Такой почты не существует',
      });
    }
  });

// Registration Form
router
  .route('/reg')
  .get(formCheck, (req, res) => {
    res.render('form/reg');
  })
  .post(async (req, res) => {
    const { user_name, user_email, user_password, user_secret_word } = req.body;
    console.log('secret =>', user_secret_word);
    const data = await User.findOne({ where: { user_email } });

    if (data) {
      res.render('form/error', {
        layout: false,
        error: 'Данная почта уже используется',
      });
    } else {
      if (user_secret_word.toLowerCase() === 'тампон') {
        const newPass = await bcrypt.hash(user_password, 10);
        const newData = await User.create({
          user_name,
          user_email,
          user_password: newPass,
          user_isAdmin: true,
        });
      } else {
        const newPass = await bcrypt.hash(user_password, 10);
        const newData = await User.create({
          user_name,
          user_email,
          user_password: newPass,
          user_isAdmin: false,
        });
      }

      res.render('form/login', { layout: false });
    }
  });

// Logout
router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
