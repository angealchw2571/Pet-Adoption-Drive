import React from 'react'
import { Link } from 'react-router-dom'


function Main() {
    return (
        <div>
            <h2> hey! </h2>
            <p>This is going to be the homepage with an img</p>
            <Link to="/FindPets" >click me to find pets</Link>
        </div>
    )
}

export default Main
