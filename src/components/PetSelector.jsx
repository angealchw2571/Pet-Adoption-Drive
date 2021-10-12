import React from 'react'
import {useEffect, useState} from 'react'
import PetDisplay from './PetDisplay';

function PetSelector(props) {
    const searchID = props.search.id
    // console.log(searchID)
    const url =`https://api.rescuegroups.org/v5/public/orgs/${searchID}/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250`;
    const [state, setState] = useState([]);
    const [networkStatus, setNetworkStatus] = useState("pending");

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
            console.log("data from API", data)
            setState(data);
            setNetworkStatus("resolved");
            // console.log("internal", data)
          } catch (error) {
            setNetworkStatus("Item Fetch Error");
            console.log("Item data fetch fail!");
          }
        };
        listCities();
      }, [searchID]);


    return (
        <div>
             {networkStatus === "resolved" ? (
        <>
            <h1>Here you go!</h1>
            <PetDisplay data={state} id={searchID}/>
        </>
      ) : (
          <h1> Hello! I am {networkStatus}</h1>
      )}
        </div>
    )
}

export default PetSelector
