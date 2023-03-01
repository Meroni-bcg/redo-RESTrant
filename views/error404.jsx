// import react and def fx
const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
        <main>
            <h1>404: Whoa! Howdy there, ya lost?</h1>
            <p>There's definitely an error, we can't find this page!</p>
            <img src="https://s3.amazonaws.com/images.seroundtable.com/t-google-404-1299071983.jpg"></img>
            Photo By <a href="https://www.seroundtable.com/google-404-page-13028.html">On</a>Round Table<a href="seroundtable.com"></a>
        </main>
        </Def>
    )
}

module.exports = error404
