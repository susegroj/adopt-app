import React from 'react';

import { FiFacebook, FiInstagram, FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import './footer.scss';

const Footer = () => (
  <footer className="main-footer">
    <h3>Adoptapp</h3>
    <section className="icons-wrapper">
      <FiFacebook className="icon" />
      <FaWhatsapp className="icon" />
      <FiInstagram className="icon" />
      <FiPhone className="icon" />
      <FiMail className="icon" />
    </section>
    <p className="rights">
      <small>Powered by Redminds development</small>
    </p>
  </footer>
  );

export default Footer;
