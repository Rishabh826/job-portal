// src/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ marginTop: '10rem' }}>
      <div className="container">
        <h2>What Attendees Say</h2>
        <div className="testimonial-card">
          <p>"This event helped me land my dream job!" - Alice Johnson</p>
        </div>
        <div className="testimonial-card">
          <p>"A fantastic opportunity to meet potential employers face-to-face." - Mark Lee</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
