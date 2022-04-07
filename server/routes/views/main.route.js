const router = require('express').Router();
const { Bar, Photo, Favorite } = require('../../db/models');

router.route('/').get(async (req, res) => {
  const bars = await Bar.findAll({ raw: true });
  const photos = await Photo.findAll({ raw: true });

  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < photos.length; j++) {
      if (bars[i].id === photos[j].bar_id) {
        bars[i].bar_photo_name = photos[j].photo_name;
      }
    }
  }

  res.render('main/main', { bars });
});

router.route('/main/favorite/:bar_id')
  .get(async (req, res) => {

    if (req.session.user_data) {
      const { bar_id } = req.params
      const user_id = req.session.user_data.id
  
      await Favorite.create({ user_id, bar_id })
      const bar = await Bar.findByPk(bar_id, { raw: true })
  
      res.render('main/confirm', { layout: false, bar })
    } else {
      res.render('main/error', { layout: false })
    }
  })

router.route('/main/drop')
  .post(async (req, res) => {
    const { bar_type } = req.body
    console.log('data_type', req.body)
    let type = ''

    switch (bar_type) {
      case ('Бары'): type = 'Бар'
      break;
      case ('Кофейни'): type = 'Кофейня'
      break;
      case ('Рестораны'): type = 'Ресторан'
      break;
    }

    const bars = await Bar.findAll({ where: { bar_type: type }, raw: true })
    const photos = await Photo.findAll({ raw: true })

    for (let i = 0; i < bars.length; i++) {
      for (let j = 0; j < photos.length; j++) {
        if (bars[i].id === photos[j].bar_id) {
          bars[i].bar_photo_name = photos[j].photo_name
        }
      }
    }

    res.render('main/main', { bars, layout: false })
  })

module.exports = router;
