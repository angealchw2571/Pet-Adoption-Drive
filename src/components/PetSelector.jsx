import React from "react";
import { useEffect, useState } from "react";
import PetAlbumDisplay from "./PetAlbumDisplay";


const centeredStyle ={
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  alignSelf: "center",
  padding: 40

}

function PetSelector(props) {
  const searchID = props.search.id;
  // console.log(searchID)
  const url = `https://api.rescuegroups.org/v5/public/orgs/${searchID}/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250`;
  const [state, setState] = useState([]);
  const [networkStatus, setNetworkStatus] = useState("pending");

  useEffect(() => {
    const listCities = async () => {
      setNetworkStatus("Pending");
      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
        });
        const data = await response.json();
        // console.log("data from API", data)
        setState(data);
        setNetworkStatus("resolved");
        // console.log("internal", data)
      } catch (error) {
        setNetworkStatus("Item Fetch Error");
        console.log("Item data fetch fail!");
      }
    };
    listCities();
  }, [url]);

  return (
    <div>
      {networkStatus === "resolved" ? (
        <>
          <PetAlbumDisplay data={state} id={searchID} />
        </>
      ) : (
        <h3 style={centeredStyle}> {networkStatus}... Finding the best pets in the area</h3>
      )}
    </div>
  );
}

export default PetSelector;
