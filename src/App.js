import React, { useState, useEffect} from "react";
import axios from 'axios';
import Card from './components/Card'
import "./App.css";

function App() {
  const [apod, setApod] = useState([])

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=KfdxNrcSxqbCqd5cFklyV3awjQ3FDaE4rbNGeySy")
      .then((result) => {
        setApod(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.log(apod)

  return (
    <div className="App">
      <Card props={apod}/>
    </div>
  );
}

export default App;
