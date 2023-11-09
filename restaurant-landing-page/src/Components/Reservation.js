import React from 'react';
import './ReservationContact.css';

const ReservationContact = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    const phone = e.target.elements.phone.value;

    // Add your logic for handling the subscription here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Phone:', phone);

    // Clear the form fields (optional)
    e.target.reset();
  };

  return (
    <div className="reservation-contact-container">
      <div className="reservation">
        <h2>Make a Reservation</h2>
        <p>Choose a date and time for your reservation:</p>
        {/* Add reservation form or button as needed */}
        <button className="reserve-button">Reserve Now</button>

        {/* Time of Operations */}
        <div className="time-of-operations">
          <h3>Time of Operations</h3>
          <p>Monday - Sunday: 11:00 AM - 10:00 PM</p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>For inquiries and assistance, reach out to us:</p>
        {/* Add contact information or form as needed */}
        <p className="contact-info">Email: info@example.com</p>
        <p className="contact-info">Phone: +1 (123) 456-7890</p>

        {/* Subscription Form */}
        <div className="subscribe-form">
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe}>
           
            <input placeholder='Email' className="subscribe-input" type="email" name="email" required />

          
            <input  placeholder= 'Name' className="subscribe-input" type="text" name="name" />

        
            <input  placeholder='Phone' className="subscribe-input" type="tel" name="phone" />

            <button className="subscribe-button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationContact;
