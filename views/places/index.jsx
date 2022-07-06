const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
        <div className='col-sm-6'>
            <h2 className='text-center'>
                <a href={`/places/${index}`}>
                    {place.name}
                </a>
                </h2>
            <p className='text-center'>
                {place.cuisines}
            </p>
            <img src={place.pic} class="mx-auto d-block" alt={place.name} />
            <p className='text-center'>
                Located in {place.city}, {place.state}
            </p>
        </div>
        ) 
    })
    return (
        <Def>
            <main>
                <h1>Places to RANT or RAVE About</h1>
                <div className='row'>
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index