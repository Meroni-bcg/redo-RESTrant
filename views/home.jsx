//The '.' at the start of the require when we require('./default') is a cue to look in the local file system to find the resource versus a npm dependency as it does when we require('react').


const React = require('react')
const Def = require('./default')             

function home () {
    return (
        <Def>
          <main>
              <h1>HOME</h1>
               <div>
                  <img src="/images/dessert.png" alt="dessertimage" />
                    <div>           
                      Photo by <a href="https://www.canva.com/design/DAFb6cl7VS8/oX-OHT3YasQqAOlX3ySVew/view?utm_content=DAFb6cl7VS8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"> Amairani Cervantes </a> On <a href="canva.com">Canva</a>
                    </div> 
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <h1>Thanks for the picture!</h1>
            </main>
        </Def>
    )
}

module.exports = home

