import React from 'react';
import NavBar from '../components/NavBar'; // Correct path to NavBar.jsx
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Products from "../components/Products"; // Import the Products component
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Products /> 
      <Footer />
    </div>
  );
};

export default HomePage;
