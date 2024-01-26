import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Africa = () => {

  const [data, setData] = useState();
  const [number, setNumber] = useState(0);

  const addPopulation = (countries) => {
    setNumber(0);
    countries.forEach((country) => {
      let peopleNumber = country.population;
      setNumber( (prevNumber) => prevNumber + peopleNumber)
    })
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/Africa`)
      .then((res) => {
        addPopulation(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h2>Africa</h2>
      {number !== 0 && 
            <>
            <p>Total población: {number}</p>
            </>
      }
      <br />
      {data?.map((e, i) => {
        return (
          <div key={i}>
            <p>Country: {e.name.common}</p>
            <p>Population: {e.population}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}
