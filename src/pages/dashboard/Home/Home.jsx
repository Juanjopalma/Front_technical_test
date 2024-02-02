import React, { useEffect, useState } from "react";
import { Graphic } from "../../../components/Graphic/Graphic";
import "./home.scss";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./home.scss";

import asia from "/images/continents/asia.jpg";
import africa from "/images/continents/africa.jpg";
import americas from "/images/continents/americas.jpg";
import europe from "/images/continents/europe.png";
import oceania from "/images/continents/oceania.jpg";
import antarctic from "/images/continents/antarctic.jpg";

export const Home = ({ setScroll }) => {

  const navigate = useNavigate();

  // ressponsive for Carousel
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

  // have the images in an array
  const continents_images = [
    asia,
    africa,
    americas,
    europe,
    oceania,
    antarctic,
  ];

  // to add population of each continent
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
    let updatedContinents = { ...initialValue }; 

    for (let country of countries) {
      let peopleNumber = country.population; 
      let countryRegion = country.region; 

      updatedContinents[countryRegion] += peopleNumber; 
    }

    setContinents(updatedContinents);
  };


  let url = "https://restcountries.com/v3.1/all"; 
  const {response, error} = useFetch(url);

  useEffect(() => {
    if(response !== null) {
      getPopulationbyContinent(response); 
    }
  }, [response])
  

  // allows you to filter by what you enter in the input
  useEffect(() => {
    const tempArray = Object.entries(continents) 
      .filter(
        ([continent, population]) => population <= filter || filter === ""
      );

    setFindContinent(tempArray);
  }, [filter, continents]);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  // for the graphic
  const labels = Object.entries(continents).map((array) => array[0]);
  const populations = Object.entries(continents).map((array) => array[1]);

  // for the animations
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 300,
      once: false,
    });
  
    // for the navbar
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="home">
      <div className="bg">
        <header className="header">
            <h1>Discover the world thanks to data!</h1>
            <div className="mt-3">
              <p>We are no longer in the information age,</p>
              <p>we are in the age of information management.</p>
            </div>
        </header>
      </div>
      <main>
        <section className="section1" id="continents-section">
          <h2 className="text-center">All your data here!</h2>

          <input
            className="filterinput"
            onChange={handleChange}
            placeholder=" 🔍 Filter by population number"
            value={filter}
          />

          <div className="d-flex flex-column align-items-center">
            <p className="text-center">
              Thanks to the data, we have statistics for the continents of the world
            </p>
            <p className="text-center">
              You can see cards with population data of the continents
            </p>
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
                    className="onecard"  data-aos="zoom-in" 
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
        <section className="section2" id="continents-graphic">  
          <h2 className="text-center">Stadistics about the Continents</h2>

          <Graphic 
            className="graphic"
            labels={labels} 
            populations={populations} 
          />
        </section>
      </main>
    </div>
  );
};
