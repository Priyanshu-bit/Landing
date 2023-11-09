import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <div className="cart-icon">Cart Icon</div>
      </nav>
      <div className="content">
        <img src="pic1.jpg" alt="Restaurant Image" />
        <div className="button-container">
          <button className="view-menu-button">View Menu</button>
          <button className="reservation-button">Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
