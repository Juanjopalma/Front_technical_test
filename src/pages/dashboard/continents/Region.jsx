import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Graphic } from '../../../components/Graphic/Graphic';
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './region.scss';
import { Card } from 'react-bootstrap';
import { Footer } from '../../../components/FooterApp/Footer';

export const Region = () => {

  const { region } = useParams();

  // for Carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [allpopulations, setAllpopulations] = useState([]);
  const [findCountry, setFindCountry] = useState();
  const [filter, setFilter] = useState("");
  const [number, setNumber] = useState();
  const [row, setRow] = useState([]);

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
          setAllpopulations(res.data); // guardo la población de cada país (mapear)
          setFindCountry(res.data) // guardo la población de cada país (filtro)
          // console.log(res.data);
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

  // animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
      once: false, // Animación solo una vez
    });
  }, []);

  // Función para obtener cuantas filas de 10 países tiene el continente
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }


  // graphic variables
  const labels = allpopulations?.map((e) => e.name.common);
  const populations = allpopulations?.map((e) => e.population);

  const rowsArray = findCountry ? chunkArray(findCountry, 30) : [];
  console.log("rowsArray", rowsArray);


  return (
    <div className='region'>
        <header className="container-fluid header">
          <div className="row padding-y-section">
            <div className="titles col-12 col-md-7 d-flex flex-column justify-content-center align-items-lg-start">
              <h3>WE ARE DEVELOPERS</h3>
              <h2>HAVE A LOOK TO ALL THE INFO OF {region.toLocaleUpperCase()}</h2>
              <hr />
              <p>Everything that can be measured can be improved! </p>
            </div>
            <div className="image col-5 pt-5 d-none d-md-flex justify-content-end">
              <img src="/images/person/person1.png" alt="trabajador" />
            </div>
          </div>
        </header>
      <main>
        <section className='section3'>
          <h2 className='text-center'>{region}</h2>

          <input
            className="filterinput"
            onChange={handleChange}
            placeholder=" 🔍 Filter by population number"
            value={filter}
          />

          <div className="d-flex flex-column align-items-center">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
              quod Lorem
            </p>
            <p className="text-center">ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          {findCountry !== undefined && (
               <>
               {rowsArray.map((rowItems, rowIndex) => (
                 <Carousel
                   key={rowIndex}
                   responsive={responsive}
                   infinite={true}
                   className="owl-carousel owl-theme skill-slider"
                 >
                   {rowItems.map((e, i) => (
                     <Card
                       key={i}
                       style={{ width: "18rem"}}
                       className="onecard"  
                       data-aos="zoom-in" 
                     >
                       <Card.Img variant="top" src={e.flags.png} className='imagecard'/>
                       <Card.Body className="d-flex flex-column align-items-center">
                         <Card.Title className="title">📍 {e.name.common}</Card.Title>
                         <Card.Text>
                           <img
                             className="me-2"
                             src="/images/icons/user_icon.png"
                             alt="continent"
                           />
                           {e.population.toLocaleString()}
                         </Card.Text>
                         <Card.Text>
                           Country {i + 1 + rowIndex * 10}
                         </Card.Text>
                       </Card.Body>
                     </Card>
                   ))}
                 </Carousel>
               ))}
             </>
            )}
            {findCountry?.length === 0 && (
                <p>No countries have been found with this population number</p>
            )}
        </section>
        <section className='section4'>
          <h2 className='text-center mb-3'>Stadistics about {region}</h2>
          {number && 
                <>
                  <p className='text-center'>Total population: {number.toLocaleString()}</p>
                </>
          }

          <Graphic 
            className="graphic"
            labels = {labels} 
            populations = {populations}
          />
        </section>
      </main>
      <Footer />

    </div>
  )
}
