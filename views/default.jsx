const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Something cool here</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
