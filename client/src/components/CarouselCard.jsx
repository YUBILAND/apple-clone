import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import "react-multi-carousel/lib/styles.css";


const CarouselCard = (props) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1, // optional, default to 1.
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const {cardDelay, setCardDelay} = useContext(CarouselContext);

    const {carouselCards, showCarouselCards} = useContext(CarouselContext);

    const body = document.body;

    function showCarouselPopUp(card) {
        setCardDelay(true);

        showCarouselCards(prevCards => {
            const newState = [...prevCards];
            newState[card] = true;
            return newState;
        })
        body.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px'
        body.style.overflow = 'hidden'
    }

  return (
    <Carousel
        customTransition="transform 500ms ease-in-out"
        arrows={true}
        draggable={false}
        keyBoardControl
        renderArrowsWhenDisabled={true}
        renderDotsOutside={true}
        responsive={responsive}
        className='py-24 !overflow-visible w-[1680px]'
        ssr={true}
        > 
        {props.items.map((item, itemNum) => {
            return (
                <div onClick={() => showCarouselPopUp(itemNum)} className={`cursor-pointer relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl ${item.textColor === 'white' && 'text-white'}`}>
                    <img className='rounded-3xl w-[405px] h-[740px] object-cover object-bottom' src={item.img} alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 w-full'>
                    {/* TopText */}
                        <div className='text-lg font-semibold'>
                        {item.topText}
                        </div>
                    {/* BottomText */}
                        <h1 className={`w-[60%] font-semibold text-[28px] leading-[2.1rem] ${item.bottomTextRainbow && '!w-full text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'}`}>{item.bottomText}</h1>
                    </div>

                    <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                        <div className='group relative'>
                            <AddCircleRoundedIcon className=' relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                            <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                        </div>
                    </div>
                </div>
            )
        })}
    </Carousel>
  )
}

export default CarouselCard