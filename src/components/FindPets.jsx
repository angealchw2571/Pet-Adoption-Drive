import React from "react";
import { useEffect, useState } from "react";
import CitySelect from "./CitySelect";
import PetSelector from "./PetSelector";

  const centeredStyle ={
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    alignSelf: "center",
  }

function FindPets() {
  const url2 = "https://api.rescuegroups.org/v5/public/orgs/&limit=250";
  const [state, setState] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");
  const [display, setDisplay] = useState({'name': "test", "id": 0 })

  useEffect(() => {
    const listCities = async () => {
      setNetworkStatus("pending");
      try {
        const response = await fetch(url2, {
          headers: {
            Accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        });
        const data = await response.json();
        setState(data);
        setNetworkStatus("resolved");
      } catch (error) {
        setNetworkStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listCities();
  }, []);


  return (
      <>
    <div >
      <h1 style={centeredStyle}> Find a pet rescue near you!</h1>
      {networkStatus === "resolved" ? (
        <div style={centeredStyle}>
        <CitySelect data={state.data} setDisplay={setDisplay} />
        </div >
      ) : (
        <h4 style={centeredStyle}>Please wait, I'm fetching the cutest dogs for you</h4>
      )}
    </div>
    {/* <div>
        <h4>name: {display.name}</h4>
        <h4>id: {display.id}</h4>
    </div> */}
    {display.id !== 0 ? (
        <PetSelector search={display}/>
      ) : (
        <h4 style = {centeredStyle}> Thank you for giving these pets a second chance! </h4>
      )}
    </>
  );
}

export default FindPets;
