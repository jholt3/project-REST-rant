const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>REST-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/places'>Places</a>
                    </li>
                    <li>
                        <a href='/places/new'>Add Place</a>
                    </li>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
