import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {

  // vista global que muestre los datos poblacionales por continente (HOME)
  
  // menu de navegación que permita seleccionar un continente y cambiar de vista (navbar)
  // para poder ver los datos poblaciones de los países de dicho continente

  // campo que permita filtrar por el nº de población, limitando así los continentes (HOME)
  // o paises (vista continente) que cumplan la condición

  // Continentes: Asia, Africa, South America, North America, Europe, Antarctica, Oceania
  // Regiones: Asia, Africa, Americas, Europe, Antarctica, Oceania

  const [data, setData] = useState();
  const [continents, setContinents] = useState([]);

  const getPopulationbyRegion = (region) => {

  }

  useEffect(() => {
  
    const continent = "Europe";
    axios
      .get('https://restcountries.com/v3.1/all')
      // .get(`https://restcountries.com/v3.1/region/${continent}`)
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  
  
  return (
    <div>
      <h1>Lista de Continentes</h1>
      {data?.map((e, i) => {
        return (
          <div key={i}>
            <p>Continent: {e.region}</p>
            <p>Population: {e.population}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}
