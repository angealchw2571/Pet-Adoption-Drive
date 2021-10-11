import React from 'react'
import {useParams} from 'react-router-dom'
import {useState, useEffect } from 'react'

function Pets() {
    const params = useParams()

    const url =`https://api.rescuegroups.org/v5/public/orgs/${params.searchID}/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250`;
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
            console.log(data.data[0])
          } catch (error) {
            setNetworkStatus("Item Fetch Error");
            console.log("Item data fetch fail!");
          }
        };
        listCities();
      }, []);



      const testing = () => {
        for (const [key, value] of Object.entries(state.attributes)) {
        return (<h1>`${key}: ${value}`</h1>)
    }
    }


    return (
        <div>
             {networkStatus === "resolved" ? (
                <>
                <h1>hey!</h1>
                 {testing}
                 </>
      ) : (
        <h1> Loading your new friend! </h1>
      )}
        </div>
    )
}

export default Pets
