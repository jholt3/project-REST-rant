const app = require('express').Router()

// POST /places 
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

// GET /places/new
app.get('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'Za Pizzeria',
        city: 'Durham',
        state: 'North Carolina',
        cuisines: 'Italian, Pizza',
        pic: '/images/pizza.jpg'
        // Photo by <a href="https://unsplash.com/@saundiii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Saundarya Srinivasan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }, 
    {
        name: 'Oceanview Restaurant',
        city: 'Malibu',
        state: 'California',
        cuisines: 'New American',
        pic: '/images/beach-lunch.jpg' 
        // Photo by <a href="https://unsplash.com/@fredasem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Freddy Kearney</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    }]
    res.render('places/index', {places})
})



module.exports = app

