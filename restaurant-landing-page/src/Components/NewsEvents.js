import React from 'react';
import './NewsEvents.css';

const NewsEvents = () => {
  return (
    <div className="news-events-container">
      <h4 className="news-events-heading1">Don't Miss</h4>
      <h1 className="news-events-heading">Our News and Events</h1>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit<br></br> o quisquam est qui dolorem ipsum qui</p>
      <div className="news-events-row">
        <div className="news-event">
          <img src="n1.jpg" alt="News 1" />
          <div className='we'>
            <h4>Category</h4>
            <p>Duis ultricies felis eget efficitur interdum. Sed hendrerit facilisis sapien, sit amet luctus sem bibida risus malesuada a. Sed vel congue velit. Fusce a hendrerit lectus. Donec cursus magna in mauris bibendum rhoncus. Quisque auctor bibendum sapien, vel pharetra quam euismod nec. Phasellus pharetra euismod purus, ac vestibulum felis mollis sit</p>
          </div>
        </div>
        <div className="news-event">
          <img src="n2.jpg" alt="News 2" />
          <div className='we'>
            <h4>Category</h4>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vitae bibendum elit. Vivamus id ex et purus rhoncus tincidunt. Integer vel congue felis. Aenean vulputate neque nec augue tincidunt blandit. Proin volutpat augue vel sapien tincidunt, ut scelerisque dui sagittis.</p>
          </div>
        </div>
        <div className="news-event">
          <img src="n3.jpg" alt="News 3" />
          <div className='we'>
            <h4>Category</h4>
            <p>Phasellus dapibus interdum arcu a gravida. Nunc pulvinar aliquet hendrerit.sellus dapibus interdum arcu a gravida. dapibus interdum arcu a gravida. Nunc pulvinar aliquet hendnterdum arcu a gravida. Nunc pulvinar aliquet hend Nunc pulvinar aliquet hend Vivamus eget arcu vitae justo imperdiet malesuada. Proin imperdiet ipsum id urna tempor, </p>
          </div>
          <br></br>
        
        </div>
       
      </div>
      <div className='but' > <button >Read More</button> </div>
    </div>
  );
};

export default NewsEvents;
