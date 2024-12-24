import { BrowserRouter as Router, Routes, useLocation, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import MacPage from './components/MacPage';
import { CarouselContext } from './contexts/CarouselContext';
import { useState } from 'react';
import NewStorePage from './components/NewStorePage';
import SwiperCarousel from './components/SwiperCarousel';
import TopBanner from './components/TopBanner';
import BigCarousel from './components/BigCarousel';
import ContinousCarousel from './components/ContinousCarousel';


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
                  <Header fixed white />
                  <TopBanner headerFixed/>
                  <FrontPage />
                  <BigCarousel />
                  <ContinousCarousel />
                  <Footer />
              </>
            }/>

            <Route path="/store" element={
              <>
                  <Header />
                  <TopBanner stretch/>
                  <NewStorePage />
                  <Footer />
              </>
            }/>

            <Route path="/mac" element={
              <>
                  <Header white/>
                  <MacPage />
                  <Footer />
              </>
            }/>



          </Routes>
    </CarouselContext.Provider>
  );
}

export default App;
