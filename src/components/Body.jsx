import React from 'react'
import { Route } from "react-router-dom"
import Main from './Main'
import Hello from './Hello'
import Adopt from './Adopt'
import About from './About'
import FindPets from './FindPets'
import Pets from './IndividualPet'


function Body() {
    return (
        <div>
        <Route exact path="/" component={Main} />
        <Route path="/Hello" component={Hello} />
        <Route path="/adopt" component={Adopt} />
        <Route path="/about" component={About} />
        <Route exact path="/findpets" component={FindPets} />
        <Route path="/findpets/:name/:id/:i/:searchID" component={Pets} />

        </div>
    )
}

export default Body
