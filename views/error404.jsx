const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                <img src="/images/pexels-ann-h-1888015.jpg" class="img-fluid" alt="image with tiles that spell error" />
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

