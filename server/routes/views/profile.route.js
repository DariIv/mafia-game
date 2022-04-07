const router = require('express').Router();
const profileCheck = require('../../middlewares/profileCheck');
const upload = require('../../middlewares/multer');
const { User, Bar, Photo, Favorite } = require('../../db/models');

// Show Profile Page
router.route('/page/:user_name').get(profileCheck, async (req, res) => {
  const user_id = req.session.user_data.id;

  const favs = await Favorite.findAll({ where: { user_id }, raw: true });
  const bar = await Bar.findAll({ raw: true });
  const photos = await Photo.findAll({ raw: true });

  let bars = [];

  for (let i = 0; i < favs.length; i++) {
    for (let j = 0; j < bar.length; j++) {
      for (let k = 0; k < photos.length; k++) {
        if (favs[i].bar_id === bar[j].id && bar[j].id === photos[k].bar_id) {
          bar[j].bar_photo_name = photos[k].photo_name;
          bars.push(bar[j]);
        }
      }
    }
  }

  res.render('profile/profile', { bars });
});

router.route('/change/:id')
  .get(async (req, res) => {
    
  })

// Delete Button
router
  .route('/delete/:id')
  .get(profileCheck, async (req, res) => {
    const { id } = req.params;

    const bar = await Bar.findByPk(id, { raw: true });

    res.render('profile/confirm', { layout: false, bar });
  })
  .delete(profileCheck, async (req, res) => {
    const { id } = req.params;

    await Favorite.destroy({ where: { bar_id: id } });

    const user_id = req.session.user_data.id;

    const favs = await Favorite.findAll({ where: { user_id }, raw: true });
    const bar = await Bar.findAll({ raw: true });
    const photos = await Photo.findAll({ raw: true });

    let bars = [];

    for (let i = 0; i < favs.length; i++) {
      for (let j = 0; j < bar.length; j++) {
        for (let k = 0; k < photos.length; k++) {
          if (favs[i].bar_id === bar[j].id && bar[j].id === photos[k].bar_id) {
            bar[j].bar_photo_name = photos[k].photo_name;
            bars.push(bar[j]);
          }
        }
      }
    }

    res.render('profile/cards', { layout: false, bars });
  });

module.exports = router;
