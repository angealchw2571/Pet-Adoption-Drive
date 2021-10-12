import React from "react";

function PetDetails(props) {
  // console.log("props", props.state);

  const allDetails = props.state.map((element, index) => {
    return (
      <>
        <h4 key={index}>
          {element.key} , {element.value}
        </h4>
      </>
    );
  });

  return (
    <>
      <div>{allDetails}</div>
    </>
  );
}

export default PetDetails;
