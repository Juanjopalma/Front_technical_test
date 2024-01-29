import React, { useEffect, useState } from "react";
import axios from "axios";
import { Graphic } from "../../../components/Graphic/Graphic";
import "./home.scss";
import { Button, Card, Col, Row } from "react-bootstrap";

import asia_territory from "/images/territories/asia_territory.jpg"; // 800 x 798 - 286 x 268
import africa_territory from "/images/territories/africa_territory.jpg"; // 550 x 829 - 286 x 285
import americas_territory from "/images/territories/americas_territory.jpg"; // 800 x 559 286 x 431
import europe_territory from "/images/territories/europe_territory.jpg"; // 286 x 233
import oceania_territory from "/images/territories/oceania_territory.jpg"; // 286 x 377
import antarctic_territory from "/images/territories/antarctic_territory.jpg"; // 286 x 200

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

export const Home = () => {
  const territories_images = [
    asia_territory,
    africa_territory,
    americas_territory,
    europe_territory,
    oceania_territory,
    antarctic_territory,
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
  // const [allpopulations, setAllpopulations] = useState();
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

  return (
    <div>
      <section className="section1">
        <video
          className="video"
          src="/videos/video.mp4"
          height="100vw"
          autoPlay
          loop
          muted
        ></video>
        <h1 className="titulo text-center">Your trusted data website</h1>
      </section>
      <section className="section2">
        <h2>List of Continents</h2>

        <input
          className="mb-3"
          onChange={handleChange}
          placeholder="🔍..."
          value={filter}
        />

        {/* Convierto el objeto en un array de objetos para mapearlo */}
        <Row>
          {findContinent?.map(([continent, population], index) => (
            <Col key={continent} lg={4} md={6} className="d-flex justify-content-center mb-4">
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={territories_images[index]} />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="title">📍 {continent}</Card.Title>
                  <Card.Text className="text">
                      <img src="/images/icons/user_icon.png" alt="user icon" />{population.toLocaleString()}</Card.Text>
                  <Button variant="primary">Go to {continent}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {findContinent?.length === 0 && (
          <p>No continents have been found with this population number</p>
        )}
      </section>

      <Graphic labels={labels} populations={populations} />
    </div>
  );
};
