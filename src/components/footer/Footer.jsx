import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Rachel Tjarksen</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#repos">Repositories</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/rachel-tjarksen-26a275259/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/rachel-tj" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Copyright 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer