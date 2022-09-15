const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Post-it</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <link rel='stylesheet' href='/css/style.css'/>
            </head>
            <body>
                <nav>
                    <li>
                        <a href='/posts'>Posts</a>
                    </li>
                    <li>
                        <a href='/posts/new'>Add Post</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
