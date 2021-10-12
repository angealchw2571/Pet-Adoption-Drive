import React from 'react'

function About() {

    function createData(name, calories, fat, carbs, protein) {
        return { name , calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0), 
        ]

        console.log(rows)

    return (
        <div>
            <h2>Hello!</h2>
            <p> my name is Angeal and I am an aspiring software developer. This is my humble website about pet adoption</p>
        </div>
    )
}

export default About
