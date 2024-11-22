import { BrowserRouter as Router, Routes, useLocation, Route } from 'react-router-dom';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import StorePage from './components/StorePage';
import MacPage from './components/MacPage';
import LineUp from './components/LineUp';
import { CarouselContext } from './contexts/CarouselContext';
import { useState } from 'react';


function App() {


  const location = useLocation(); // Get the current location object
  const isStorePage = location.pathname === '/store'; // Check if we're on the "/store" path

  if (isStorePage) document.body.style.background = '#f5f5f7'

  const [carouselCards, showCarouselCards] = useState(
    [false, false, false, false, false, false, false]
  );

  const [smallCarouselCards, showSmallCarouselCards] = useState(
    [false, false, false, false, false, false, false]
  );

  const [cardDelay, setCardDelay] = useState(false);

  const [smallCardDelay, setSmallCardDelay] = useState(false);


  return (
    <CarouselContext.Provider value={{cardDelay, setCardDelay, carouselCards, showCarouselCards, smallCarouselCards, showSmallCarouselCards, smallCardDelay, setSmallCardDelay}} >
          <Routes>
            <Route path="/" element={
              <>
                  <Header darkMode={true}/>
                  <FrontPage />
                  <Carousel />
                  <SlideShow />
                  <Footer />
              </>
            }/>

            <Route path="/store" element={
              <>
                  <Header darkMode={false} light='store'/>
                  <StorePage />
                  <Footer />
              </>
            }/>

            <Route path="/mac" element={
              <>
                  
                  <MacPage />
                  {/* <LineUp /> */}
                  {/* <Footer /> */}
              </>
            }/>



          </Routes>
    </CarouselContext.Provider>
  );
}

export default App;
