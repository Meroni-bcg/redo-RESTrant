// import react and def fx
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
        <main>
            <h1>404: Whoa! Howdy there, ya lost?</h1>
            <p>There's definitely an error, we can't find this page!</p>
        </main>
        </Def>
    )
}

module.exports = error404
