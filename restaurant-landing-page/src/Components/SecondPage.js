import React from 'react';
import './SecondPage.css';

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="text-container">
        <h2>Page Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          justo ut mi dictum fringilla. In sit amet lorem vitae eros vehicula
          lacinia.
        </p>
      </div>
      <div className="image-container">
        <img src="pic2.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default SecondPage;
