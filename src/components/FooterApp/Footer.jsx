import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="p-4 pb-0 d-flex justify-content-center bg-color pb-3">
        <section className="d-flex gap-3">

          <FontAwesomeIcon icon={faFacebook} style={{color: "black", fontSize: "2rem"}} />
          <FontAwesomeIcon icon={faTwitter} style={{color: "black", fontSize: "2rem"}} />
          <FontAwesomeIcon icon={faGoogle} style={{color: "black", fontSize: "2rem"}} />
          <FontAwesomeIcon icon={faInstagram} style={{color: "black", fontSize: "2rem"}} />
          <FontAwesomeIcon icon={faLinkedin} style={{color: "black", fontSize: "2rem"}} />
          <FontAwesomeIcon icon={faGithub} style={{color: "black", fontSize: "2rem"}} />
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "gray" }}>
        © 2024 Copyright:
        <a className="text-white" href="https://www.linkedin.com/in/juanjopalma/">Juanjo Palma Liñán</a>
      </div>
    </footer>
  );
}
