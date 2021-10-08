import "./App.css";
import { useState, useEffect } from "react";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  const url ="https://api.rescuegroups.org/v5/public/orgs/9491/animals/search/dogs?include=pictures,statuses,locations,videos&sort=%2Banimals.name&page=2&limit=250";
  const url2 = "https://api.rescuegroups.org/v5/public/orgs/&limit=250";
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url2, {
      headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("internal data", data);
        setState(data);
      });
  }, []);

  return (
    <div>
      <div className="navBar">
        <span> hello</span>
        <span> hello2</span>
        <span> hello3</span>
      </div>
      <h1>test</h1>
    </div>
  );
}

export default App;
