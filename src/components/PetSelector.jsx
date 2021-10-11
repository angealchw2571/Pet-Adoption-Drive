import React from 'react'
import {useEffect, useState} from 'react'

function PetSelector(props) {
    console.log(props.search.id)
    const searchID = props.search.id
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
            setState(data);
            setNetworkStatus("resolved");
            console.log(data)
          } catch (error) {
            setNetworkStatus("Item Fetch Error");
            console.log("Item data fetch fail!");
          }
        };
        listCities();
      }, []);


    return (
        <div>
            <h1> hi this works now</h1>
        </div>
    )
}

export default PetSelector
