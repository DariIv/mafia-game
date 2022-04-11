// const router = require('express').Router();
// const { User } = require('../db/models/user');

// // const data = await user;

// router.route('/').get(async (req, res) => {
//   if (!res.locals.userId) {
//     return res.redirect('/');
//   }
//   const cards = await Playlist.findAll({
//     order: [
//       ['createdAt', 'DESC'],
//     ],
//     where: {
//       userId: res.locals.userId,
//     },
//   });

//   res.render('index', { cards });
// });
// //   const { user_photo } = req.body;

// //   const data = await User.findOne({ where: { user_photo }, raw: true });

// //   if (data) {
// //     const photo = await (user_photo);

// //     if (photo) {
// //       req.user_photo = data;
// //       res.json(post(200,))
// //     }
// //   }
// // });
