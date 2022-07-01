const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'Pizzeria Toro',
        city: 'Durham',
        state: 'North Carolina',
        cuisines: 'Italian, Pizza',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Moonshadows',
        city: 'Malibu',
        state: 'California',
        cuisines: 'New American',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', {places})
})

module.exports = app

