import React, {useEffect, useState}  from "react";
import "./App.css";
import axios from "axios";
import Article from "./components/Article/Article.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

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
        <Header
        title={data.title}
        version={data.service_version}
        />
        <Main
        image={data.url}
        />
        <Article
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
