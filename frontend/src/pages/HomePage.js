// frontend/src/pages/HomePage.js
import React from 'react';

function HomePage() {
    return (
        <div className="container">
            <h1>Welcome to the Salon Website</h1>
            <img src="https://via.placeholder.com/960x400" alt="Salon" />
            <p>Book your appointment today!</p>

            <section id="about">
                <h2>About Us</h2>
                <p>This is a placeholder for the about us section.</p>
            </section>

            <section id="gallery">
                <h2>Gallery</h2>
                <img src="https://via.placeholder.com/300x200" alt="Gallery 1" />
                <img src="https://via.placeholder.com/300x200" alt="Gallery 2" />
                <img src="https://via.placeholder.com/300x200" alt="Gallery 3" />
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <p>This is a placeholder for the contact us section.</p>
            </section>
        </div>
    );
}

export default HomePage;
