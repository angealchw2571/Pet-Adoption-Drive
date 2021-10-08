import React from 'react'
import { Route } from "react-router-dom"
import Main from './Main'
import Hello from './Hello'
import Adopt from './Adopt'
import About from './About'
import FindPets from './FindPets'


function Body() {
    return (
        <div>
        <Route exact path="/" component={Main} />
        <Route path="/Hello" component={Hello} />
        <Route path="/adopt" component={Adopt} />
        <Route path="/about" component={About} />
        <Route path="/findpet" component={FindPets} />
        </div>
    )
}

export default Body
