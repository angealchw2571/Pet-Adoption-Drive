import "./App.css";
import Body from "./components/Body";
// import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {

  // const url =
  //   "https://api.rescuegroups.org/v5/public/orgs/9491/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250";
  // const url2 = "https://api.rescuegroups.org/v5/public/orgs/&limit=250";
  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   fetch(url2, {
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: process.env.REACT_APP_API_KEY,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("internal data", data);
  //       setState(data);
  //     });
  // }, []);

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
