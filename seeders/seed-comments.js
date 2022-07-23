const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({name: 'Za Pizzeria'})
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)

    let comment2 = await db.Comment.create({
        author: 'Starvin Marvin',
        rant: true,
        stars: 2.5,
        content: 'Nice enough pizza, but the service was not great.'
    })

    place.comments.push(comment2.id)

    await place.save()

    process.exit()
}

seed()
