import React from 'react';
//import './HomePage.css';

function HomePage() {
  return (
    <>

      {/* Hero Section */}
      <h1>Welcome to Our Salon</h1>
      <p>Discover the best services for your beauty needs.</p>
      <a href="/login">Login</a>
      <a href="/register">Sign Up</a>


      {/* About Section */}
      <h2>About Us</h2>
      <p>We are a team of experienced professionals dedicated to providing top-notch salon services.</p>


      {/* Services Section */}
      <h2>Our Services</h2>
      <ul>
        <li>Haircuts</li>
        <li>Styling</li>
        <li>Coloring</li>
        <li>Manicures</li>
        <li>Pedicures</li>
      </ul>


      {/* Contact Section */}
      <h2>Contact Us</h2>
      <p>Book your appointment today!</p>

    </>
  );
}

export default HomePage;
