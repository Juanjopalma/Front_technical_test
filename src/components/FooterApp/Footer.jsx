import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="p-4 pb-0 d-flex justify-content-center">
        <section className="mb-4">
          {/* Facebook */}
          <FontAwesomeIcon icon={faFacebook} />
          
          
          {/* Twitter */}
          <FontAwesomeIcon icon={faTwitter} />

          {/* Google */}
          <FontAwesomeIcon icon={faGoogle} />

          {/* Instagram */}
          <FontAwesomeIcon icon={faInstagram} />

          {/* Linkedin */}
          <FontAwesomeIcon icon={faLinkedin} />

          {/* Github */}
          <FontAwesomeIcon icon={faGithub} />
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "gray" }}>
        © 202 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">Juanjo Palma Liñán</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
