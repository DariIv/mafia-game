console.log('map')

ymaps.ready(init)

async function init () {
  let map = new ymaps.Map('map', {
    center: [59.92979160258393, 30.339240775390625],
    zoom: 7
  })

  let address = 'Санкт-Петербург, Кирочная, 19'
  let content = 'Описание кофейни/бара/ресторана'
  let type = 'Кофейня/Бар/Ресторан'

  ymaps.geocode(address, { results: 1 }).then(function (res) {
      let firstGeoObject = res.geoObjects.get(0)
      let coords = firstGeoObject.geometry.getCoordinates()

      let myPlaceNew = new ymaps.Placemark(coords, {
        balloonContentHeader: address,
        balloonContent: content,
        balloonContentFooter: type
      }, {})

      map.geoObjects.add(myPlaceNew)
    })
}
