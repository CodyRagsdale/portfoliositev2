import React from 'react';
import './home-page.scss';
import myPicture from '../../assets/images/image0cropped.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className=" container home-page">
      <div className="intro-section">
        <img src={myPicture} alt="Cody Ragsdale" className="profile-pic" />
        <h1>Hi, I'm Cody Ragsdale</h1>
        <h2>Full-stack Developer | Bad Movie Enthusiast | Cat Dad</h2>
      </div>
      <div className="description">
        <p>
          I'm driven by curiosity and the belief that every problem is an
          opportunity for a creative solution.
        </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
