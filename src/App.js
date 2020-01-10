import React, {useEffect, useState}  from "react";
import "./App.css";
import axios from "axios";
import article from "./components/article/article.js";
import header from "./components/header/header.js";
import main from "./components/main/main.js";

const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=XOf7Jm8Jgj31CYSJIv0gNAj9INWSDwYoEnikMz0N";

function App() {
  
  const [data, setData] =useState(null);

  useEffect(() => {
    axios.get(nasaApi)
      .then(response => setData(response.data))
      .catch(error => error)
  }, [])

  return (data && (
    <div className="Application">
      <div id="body">
        <header
        title={data.title}
        version={data.service_version}
        />
        <main
        image={data.url}
        />
        <article
        date={data.date}
        explanation={data.explanation}
        mediaType={data.mediaType}
        />
      </div>
    </div>
  )
  );

}

export default App;
