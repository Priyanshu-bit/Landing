import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SecondPage from './Components/SecondPage';
import Third from './Components/Third'
import ImageGallery from './Components/ImageGallery';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SecondPage/>
     <Third/>
     <ImageGallery/>
     <Testimonials/>
    </div>
  );
}

export default App;
