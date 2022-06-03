import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


function App() {
  //se crea el state respuesta
  let [respuesta, setRespuesta] = useState([]);

  //se consulta el api
  const consultarAPI = async () => {
    try {
      let url="https://newsapi.org/v2/top-headlines?country=mx&apiKey=5366d8ad722e4f489df66b7f910137ea";
      let res = await axios({
          url,
          method: 'GET',
          dataType: 'json',
          ContentType: 'application/json',
      });
      setRespuesta(res.data.articles);
      console.log(respuesta);
      console.log("Se consultó el API");
    } catch (error) {
      console.log(error);
    }
  }
  let pausa=0;
  useEffect(() => {
    consultarAPI();
  },[pausa]);
  
  return (
    <div className="App">
      <div className="container">
        <h1>Examen 2</h1>
        <h2>Torres Chávez Nava José Miguel</h2>
          {
            respuesta.map((data) => (
              <div className="row py-3 border border-dark" key={data.url}>
                <div className='col-md-4' >
                  <img src={data.urlToImage} width="100%"></img>
                </div>
                <div className='col-md-8'>
                  <p><b>Título:</b> {data.title}</p>
                  <p><b>Autor:</b> {data.author}</p>
                  <p><b>Descripción:</b> {data.description}</p>
                  <p><b>Fecha de publicación:</b> {data.publishedAt}</p>
                  <p><b>Fuente:</b> <a href={data.url}>{data.source.name}</a></p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default App;
