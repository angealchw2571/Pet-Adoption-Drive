import React from 'react'

function PetDetails(props) {
    console.log("props", props.state.attributes)
    const newDataArr = [];
    function ChangeObjToArr () {
    for (const [key, value] of Object.entries(props.state.attributes)) {
        console.log(key)
    newDataArr.push({ key, value });
    }
    // console.log(newDataArr);
    newDataArr.map((e, i) => {
      return (
      <h1>{e.key}</h1>
      )
    })
  };


    return (
        <div>
        <ChangeObjToArr/>
        </div>
    )
}

export default PetDetails
