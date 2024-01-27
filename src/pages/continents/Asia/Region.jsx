import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Region = () => {

  const region = "Asia"
  // const { region } = useParams();
  // console.log(region);

  const [allpopulations, setAllpopulations] = useState([]);
  const [findCountry, setFindCountry] = useState();
  const [filter, setFilter] = useState("");
  const [number, setNumber] = useState();

  const addPopulation = (countries) => {
    setNumber(0);
    countries.forEach((country) => {
      let peopleNumber = country.population;
      setNumber( (prevNumber) => prevNumber + peopleNumber)
    })
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => {
        if (res.data) {
          addPopulation(res.data);
          setAllpopulations(res.data); // guardo la población de cada país
          setFindCountry(res.data) // guardo la población de cada país
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [region])

  // este useEffect permite filtrar por lo que vaya introduciendo en el input
  useEffect(() => {
    const tempArray = allpopulations.filter((e) => {
      return e.population <= filter || filter === "";
    });
    setFindCountry(tempArray);
  }, [filter]);

  // recoge lo que se introduce en el input
  const handleChange = (e) => {
    setFilter(e.target.value);
  };


  return (
    <div>
      <h2>{region}</h2>

      <input 
        onChange={handleChange} 
        placeholder="🔍..." 
        value={filter} 
      />

      {number && 
            <>
              <p>Total población: {number}</p>
            </>
      }
      <br />
      {findCountry?.map((e, i) => {
        return (
          <div key={i}>
            <p>Country: {e.name.common}</p>
            <p>Population: {e.population}</p>
            <br />
          </div>
        )
      })}
      {findCountry?.length === 0 && (
          <p>No countries have been found with this population number</p>
      )}
    </div>
  )
}
