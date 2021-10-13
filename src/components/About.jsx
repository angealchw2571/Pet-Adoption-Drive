import React from 'react'

const centeredStyle = {
  justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
}

function About() {

    return (
        <>
        <div
        style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={centeredStyle}>
            <h2>Hello!</h2>
        </div>
        <div style={centeredStyle}>
            <p> My name is Angeal and I am an aspiring software developer. This is my humble website about pet adoption</p>
        </div>
        <div style={centeredStyle}>
            <p> Special thanks to rescuegroups.org for providing their API</p>
        </div>
        </div>
        </>
    )
}

export default About
