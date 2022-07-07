const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                
                <div>
                    <img src={data.place.pic}/>
                </div>
                <div>
                    <h2>Rating</h2>
                    <p>Not rated</p>
                </div>
                <div>
                    <h2>Description</h2>
                    <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments</p>
                </div>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form action={`/places/${data.id}?_method=DELETE`} method='POST'>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show