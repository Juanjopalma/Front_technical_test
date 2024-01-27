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
    "Americas": 0,
    "Europe": 0,
    "Antarctic": 0,
    "Oceania": 0
  }

  const [continents, setContinents] = useState(initialValue);
  const [findContinent, setFindContinent] = useState();
  const [filter, setFilter] = useState("");

  const getPopulationbyContinent = (countries) => {
    let updatedContinents = { ...initialValue }; // hago una copia de continents practicamente

    for (let country of countries) { 
      let peopleNumber = country.population; // obtengo la población del país
      let countryRegion = country.region; // obtengo el continente del país

       updatedContinents[countryRegion] += peopleNumber; // guardo en la copia la pobblación de cada país
      }

      setContinents(updatedContinents);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {
        getPopulationbyContinent(res.data); //  enviamos el array de datos
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  

  // este useEffect permite filtrar por lo que vaya introduciendo en el input
  useEffect(() => {
    const tempArray = Object.entries(continents) // convierto el objeto continents en un array de arrays con clave, valor
    .filter(([continent, population]) => population <= filter || filter === "");

    setFindContinent(tempArray);
  }, [filter, continents]);

  // recoge lo que se introduce en el input
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  
  return (
    <div>
      <h1>Lista de Continentes</h1>

      <input 
        onChange={handleChange} 
        placeholder="🔍..." 
        value={filter} 
      />

      <br />
      <br />

      {/* Convierto el objeto en un array de objetos para mapearlo */}
      {findContinent?.map(([continent, population ]) => (
        <div key={continent}>
          <p>Continent: {continent}</p>
          <p>Population: {population}</p>
        </div>
      ))}
      {findContinent?.length === 0 && (
        <p>No continents have been found with this population number</p>
      )}
    </div>
  )
}
