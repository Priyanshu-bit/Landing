import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <>
    <div className="image-gallery">
      <div className="image-row">
        <div className="image">
          <img src="img1.jpg" alt="Image 1" />
          <div className="image-info">
            <p>Name: Item 1</p>
            <p>Price: $10.00</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 2" />
          <div className="image-info">
            <p>Name: Item 2</p>
            <p>Price: $12.50</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 3" />
          <div className= "image-info">
            <p>Name: Item 3</p>
            <p>Price: $8.75</p>
          </div>
        </div>
      </div>

      <div className="image-row">
        <div className="image">
          <img src="img1.jpg" alt="Image 4" />
          <div className="image-info">
            <p>Name: Item 4</p>
            <p>Price: $15.00</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 5" />
          <div className="image-info">
            <p>Name: Item 5</p>
            <p>Price: $9.99</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 6" />
          <div className="image-info">
            <p>Name: Item 6</p>
            <p>Price: $11.25</p>
          </div>
        </div>
      </div>
      
      <div className="image-row">
        <div className="image">
          <img src="img1.jpg" alt="Image 7" />
          <div className="image-info">
            <p>Name: Item 7</p>
            <p>Price: $14.50</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 8" />
          <div className="image-info">
            <p>Name: Item 8</p>
            <p>Price: $12.00</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 9" />
          <div className="image-info">
            <p>Name: Item 9</p>
            <p>Price: $17.99</p>
          </div>
        </div>
      </div>

      <div className="image-row">
        <div className="image">
          <img src="img1.jpg" alt="Image 10" />
          <div className="image-info">
            <p>Name: Item 10</p>
            <p>Price: $19.99</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 11" />
          <div className="image-info">
            <p>Name: Item 11</p>
            <p>Price: $14.75</p>
          </div>
        </div>
        <div className="image">
          <img src="img1.jpg" alt="Image 12" />
          <div className="image-info">
            <p>Name: Item 12</p>
            <p>Price: $13.50</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ImageGallery;
