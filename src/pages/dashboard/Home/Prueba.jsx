import React, { useEffect, useState } from "react";
import axios from "axios";
import { Graphic } from "../../../components/Graphic/Graphic";
import "./home.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./prueba.scss";

import asia from "/images/prueba/continents/asia.jpg";
import africa from "/images/prueba/continents/africa.jpg";
import americas from "/images/prueba/continents/americas.jpg";
import europe from "/images/prueba/continents/europe.png";
import oceania from "/images/prueba/continents/oceania.jpg";
import antarctic from "/images/prueba/continents/antarctic.jpg";

export const Prueba = () => {

  const navigate = useNavigate();

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

  const continents_images = [
    asia,
    africa,
    americas,
    europe,
    oceania,
    antarctic,
  ];

  const initialValue = {
    Asia: 0,
    Africa: 0,
    Americas: 0,
    Europe: 0,
    Antarctic: 0,
    Oceania: 0,
  };

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
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        getPopulationbyContinent(res.data); // para obtener la población de cada continente
        // setAllpopulations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // este useEffect permite filtrar por lo que vaya introduciendo en el input
  useEffect(() => {
    const tempArray = Object.entries(continents) // convierto el objeto continents en un array de arrays con clave, valor
      .filter(
        ([continent, population]) => population <= filter || filter === ""
      );

    setFindContinent(tempArray);
  }, [filter, continents]);

  // recoge lo que se introduce en el input
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const labels = Object.entries(continents).map((array) => array[0]);
  const populations = Object.entries(continents).map((array) => array[1]);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 300,
      once: false, // Animación solo una vez
    });
  }, []);

  return (
    <main className="main">
      <div className="bg">
        <header className="header">
          <h1>Discover the world thanks to data!</h1>
          <div className="mt-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>psed do eiusmod tempor incididunt</p>
          </div>
        </header>
      </div>
      <section className="section1" id="continents-section">
        <h2>What is your favourite continent?</h2>
        <div className="d-flex flex-column align-items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            quod Lorem
          </p>
          <p>ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        {findContinent !== undefined && (
          <>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              {findContinent?.map(([continent, population], index) => (
                <Card
                  onClick={() => navigate(`/region/${continent}`)}
                  key={index}
                  style={{ width: "18rem"}}
                  className="onecard" /* data-aos="zoom-in" */
                >
                  <Card.Img variant="top" src={continents_images[index]} />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="title">📍 {continent}</Card.Title>
                    <Card.Text>
                      <img
                        className="me-2"
                        src="/images/icons/user_icon.png"
                        alt="continent"
                      />
                      {population.toLocaleString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </>
        )}
        {findContinent?.length === 0 && (
          <p>No continents have been found with this population number</p>
        )}
      </section>
    </main>
  );
};