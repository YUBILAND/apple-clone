import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import SlideShow from './components/SlideShow';

function App() {
  return (
    <div className="App">
      <Header /> 
      <FrontPage />
      <Carousel />
      <SlideShow />
      <Footer />
    </div>
  );
}

export default App;
