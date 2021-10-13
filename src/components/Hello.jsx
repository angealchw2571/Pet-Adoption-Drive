import React from "react";

function Hello() {
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
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
          }}
        >
          <h2>Hello!</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            alignSelf: "center",
          }}
        >
          <p>Very nice to meet you! Welcome to my pet adoption website</p>
        </div>
      </div>
    </>
  );
}

export default Hello;
