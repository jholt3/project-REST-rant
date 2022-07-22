const db = require('../models')

db.Place.create([{
    name: 'Za Pizzeria',
    city: 'Durham',
    state: 'NC',
    cuisines: 'Italian',
    pic: '/images/pizza.jpg',
    founded: 1989
}, {
    name: 'Oceanview Restaurant',
    city: 'Malibu',
    state: 'CA',
    cuisines: 'American',
    pic: '/images/beach-lunch.jpg',
    founded: 2020
}])
.then(() => {console.log('Success!')
process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
