import React from 'react'


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
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
          }}>
            <h2>Hello!</h2>
        </div>
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
          }}>
            <p> My name is Angeal and I am an aspiring software developer. This is my humble website about pet adoption</p>
        </div>
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
          }}>
            <p> Special thanks to rescuegroups.org for providing their API</p>
        </div>
        </div>
        </>
    )
}

export default About
