import React, { useState, useEffect} from "react";
import axios from 'axios';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description'
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
      <h1>Astronomy Picture of the Day</h1>

      <Title date={apod.date} title={apod.title} />
      <Image url={apod.url} />
      <Description explanation={apod.explanation} copy={apod.copy} />
    </div>
  );
}

export default App;
