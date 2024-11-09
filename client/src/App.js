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

function App() {


  const location = useLocation(); // Get the current location object
  const isStorePage = location.pathname === '/store'; // Check if we're on the "/store" path

  if (isStorePage) document.body.style.background = '#f5f5f7'

  return (
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
                  <Header darkMode={false} light='mac'/>
                  <MacPage />
                  {/* <LineUp /> */}
                  {/* <Footer /> */}
              </>
            }/>



          </Routes>
  );
}

export default App;
