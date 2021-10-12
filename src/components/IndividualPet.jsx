import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PetDataTable from './PetDataTable'

function Pets() {
  const params = useParams();
  console.log(params.i)

  const url = `https://api.rescuegroups.org/v5/public/orgs/${params.searchID}/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250`;
  const [state, setState] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");

  const newDataArr = [];
  const ChangeObjToArr = (e) => {
    for (const [key, value] of Object.entries(e.attributes)) {
      newDataArr.push({ key, value });
    }
    console.log(newDataArr);
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
  }, []);

  return (
    <div>
      {networkStatus === "resolved" ? (
        <>
          <h1>Hey! {state.attributes.name}!</h1>
          <img src={state.attributes.pictureThumbnailUrl} alt=""/>
          {ChangeObjToArr(state)}
          {/* <PetDetails state={newDataArr} data={state}/> */}
          <PetDataTable internalData={state} arrData={newDataArr}/>
        </>
      ) : (
        <h1> Loading your new friend! </h1>
      )}
    </div>
  );
}

export default Pets;
