import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {

  // vista global que muestre los datos poblacionales por continente (HOME)
  
  // menu de navegación que permita seleccionar un continente y cambiar de vista (navbar)
  // para poder ver los datos poblaciones de los países de dicho continente

  // campo que permita filtrar por el nº de población, limitando así los continentes (HOME)
  // o paises (vista continente) que cumplan la condición

  // Según la API: 
  // Continentes: Asia, Africa, South America, North America, Europe, Antarctic, Oceania
  // Regiones: Asia, Africa, Americas, Europe, Antarctic, Oceania

  // Para introducir un valor en un objeto con varios pares de clave: valor
  // console.log(continents["Asia"] = 10); // 

  const initialValue = {
    "Asia": 0 ,
    "Africa": 0,
    "South America": 0, 
    "North America": 0,
    "Europe": 0,
    "Antarctica": 0,
    "Oceania": 0
  }

  const [data, setData] = useState();
  const [continents, setContinents] = useState(initialValue);


  const getPopulationbyContinent = (countries) => {

    let updatedContinents = { ...continents };

    for (let country of countries) { 
      let peopleNumber = country.population; // obtengo la población del país
      let countryContinent = country.continents; // obtengo el continente del país

       updatedContinents[countryContinent] += peopleNumber;

      }
      setContinents(updatedContinents);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      // .get(`https://restcountries.com/v3.1/region/${continent}`)
      .then((res) => {
        console.log(res);

        getPopulationbyContinent(res.data); //  enviamos el array de datos

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  
  
  return (
    <div>
      <h1>Lista de Continentes</h1>
      {/* {data?.map((e, i) => {
        return (
          <div key={i}>
            <p>Continent: {e.region}</p>
            <p>Country: {e.name.common}</p>
            <p>Population: {e.population}</p>
            <br />
          </div>
        )
      })} */}

      {/* Convierto el objeto en un array de objetos para mapearlo */}
      {Object.entries(continents)?.map(([key, value]) => {
        return (
          <div key={key}>
            <p>Continent: {key}</p>
            <p>Population: {value}</p>
          </div>
        )
      })}
    </div>
  )
}
