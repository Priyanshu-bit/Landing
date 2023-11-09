import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonial-heading">Customer Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            "This is the first testimonial. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            "The second testimonial. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            "Testimonial number three. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span>★★★★★</span>
          </div>
          <p>
            "The fourth testimonial. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque non justo ut mi dictum fringilla."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
