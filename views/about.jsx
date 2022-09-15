const React = require('react')
const Def = require('./default')

function about () {
    return (
        <Def>
            <main>
                <h1>Who We Are</h1>
                <div>
                    <img src="/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" class="img-fluid" alt="Responsive Image" /> 
               <h2>Frontend Developers</h2>
                <ul>
                    <li> Brapagon Voyles </li>
                    <li> Magdy Gamel</li>
                </ul>
                <hr></hr>
                <h2>Backend Developers</h2>
                <ul>
                    <li> Aaron Boone</li>
                    <li> Jay Holt</li>
                </ul>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = about