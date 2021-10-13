import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetDataTable from './PetDataTable'


function Pets() {
  const params = useParams();

  const url = `https://api.rescuegroups.org/v5/public/orgs/${params.searchID}/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250`;
  const [state, setState] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");

  const newDataArr = [];
  const ChangeObjToArr = (e) => {
    for (const [key, value] of Object.entries(e.attributes)) {
      newDataArr.push({ key, value });
    }
    // console.log(newDataArr);
  };

  useEffect(() => {
    const listCities = async () => {
      setNetworkStatus("pending");
      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        });
        const data = await response.json();
        setState(data.data[params.i]);
        setNetworkStatus("resolved");
        // console.log(state)
      } catch (error) {
        setNetworkStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listCities();
  }, [params.i, url]);

  return (
    <div >
      {networkStatus === "resolved" ? (
        <>
        <div style={{justifyContent: "center", alignItems: "center", display: "flex", alignSelf: 'center' }}>
          <h1>Hello! My name is {state.attributes.name}!</h1>
          </div>
          <div style={{justifyContent: "center", alignItems: "center", display: "flex", alignSelf: 'center' }}>
          <img src={state.attributes.pictureThumbnailUrl} alt="" style={{justifyContent: "center", alignItems: "center", display: "flex", alignSelf: 'center' }} />
          </div>
          {ChangeObjToArr(state)}
          {/* <PetDetails state={newDataArr} data={state}/> */}
          <PetDataTable internalData={state} arrData={newDataArr} />
        </>
      ) : (
        <h3 style={{
          position: "absolute",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}> Loading your new friend! </h3>
      )}
    </div>
  );
}

export default Pets;
