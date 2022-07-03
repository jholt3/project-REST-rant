const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'Pizzeria Toro',
        city: 'Durham',
        state: 'North Carolina',
        cuisines: 'Italian, Pizza',
        pic: '/images/pizza.jpg'
        // Photo by <a href="https://unsplash.com/@saundiii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Saundarya Srinivasan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }, 
    {
        name: 'Moonshadows',
        city: 'Malibu',
        state: 'California',
        cuisines: 'New American',
        pic: '/images/beach-lunch.jpg' 
        // Photo by <a href="https://unsplash.com/@fredasem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Freddy Kearney</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }]
    res.render('places/index', {places})
})

module.exports = app

