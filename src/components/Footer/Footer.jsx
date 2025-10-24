import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <><section className="footer">
      <div className="footer-content">
        <img src="/inno3.png" alt="logo" />
        <p>
      Crafting the Future with 3D Technology
        </p>

        <div className="icons">
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </div>
      </div>

      <div className="footer-content">
        <h4>Projects</h4>
        <ul>
          <li><Link href="#">Project 1</Link></li>
          <li><Link href="#">Project 2</Link></li>
          <li><Link href="#">Project 3</Link></li>
          <li><Link href="#">Project 4</Link></li>
        </ul>
      </div>

      <div className="footer-content">
        <h4>About</h4>
        <ul>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Terms</Link></li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>About</h4>
        <ul>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Contact</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Terms</Link></li>
        </ul>
      </div>

      <div className="footer-content">
        <h4>Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6572551143404!2d82.06422457544727!3d17.08940988374785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378165aaaaaaab%3A0x481e8b12b4b80715!2sAditya%20Engineering%20College!5e0!3m2!1sen!2sin!4v1722665377262!5m2!1sen!2sin"
          width="300"
          height="200"
          style={{ border: 0, borderRadius: '50px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>


    </section><div className="footer-bottom">
        © {currentYear} Inno3DTECH. All rights reserved.
      </div></>
  );
};

export default Footer;
