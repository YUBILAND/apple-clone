import React, { useContext, useRef } from 'react'
import Carousel from "react-multi-carousel";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './SmallCarousel.css'


const SmallCarousel = (props) => {

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

    const {smallCardDelay, setSmallCardDelay} = useContext(CarouselContext);

    const {smallCarouselCards, showSmallCarouselCards} = useContext(CarouselContext);

    const body = document.body;

    function showCarouselPopUp(card) {
        setSmallCardDelay(true);

        showSmallCarouselCards(prevCards => {
            const newState = [...prevCards];
            newState[card] = true;
            return newState;
        })
        body.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px'
        body.style.overflow = 'hidden'
    }

    let finalSlideIndex = null;

    const slideIndex = useRef(0);

    const handleSlideChange = (slideInd) => {
        
        // handles left and right arrow visibility after first Arrow press since it doesn't trigger on mount
        slideIndex.current = slideInd;

        const leftArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-prev`);

        const rightArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-next`);

        if (leftArrow) {
            if (slideInd > 0) {
                setTimeout(() => {
                    leftArrow.removeAttribute('disabled');
                    leftArrow.style.display = 'block';
                    leftArrow.style.opacity = 1;
                }, 0)
            } else {
                setTimeout(() => {
                    leftArrow.style.display = 'none';
                    leftArrow.style.opacity = 0;
                }, 0)
            }
        }

        if (rightArrow) {
            if (slideInd < finalSlideIndex) {
                setTimeout(() => {
                    rightArrow.removeAttribute('disabled');
                    rightArrow.style.display = 'block';
                    rightArrow.style.opacity = 1;
                }, 0)
            } else {
                setTimeout(() => {
                    rightArrow.style.display = 'none';
                    rightArrow.style.opacity = 0;
                }, 0)
            }
        }

    }

    {/* <Carousel
customTransition="transform 500ms ease-in-out"
arrows={true}
draggable={false}
keyBoardControl
renderArrowsWhenDisabled={true}
renderDotsOutside={true}
responsive={responsive}
className='py-24'
ssr={true}
> 
{props.items.map((item, itemNum) => {
    return (

        <div onClick={() => showCarouselPopUp(itemNum)} className='relative bg-white w-[405px] h-[300px] transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg cursor-pointer select-none'>
            
            <div className=' px-8 pt-6 pb-12 text-black '>
                <item.icon sx={{fontSize: '3.5rem'}} />
                <div className='text-[24px] leading-tight font-semibold '>
                {item.topText}</div>
                <div>{item.bottomText}</div>
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
</Carousel> */}

  return (

    <Swiper 
      className={`mt-8 !overflow-visible smallSwiperButtonOnBottom`}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={'auto'}
      navigation
      onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
      onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
      // slidesOffsetAfter={200}
      > 
        {props.items.map((item, itemNum) => {
            return (
              <SwiperSlide className='!w-[405px] !h-[300px]'>
                <div onClick={() => showCarouselPopUp(itemNum)} className='relative bg-white w-[405px] h-[300px] transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg cursor-pointer select-none'>
                    
                    <div className=' px-8 pt-6 pb-12 text-black '>
                        <item.icon sx={{fontSize: '3.5rem'}} />
                        <div className='text-[24px] leading-tight font-semibold '>
                        {item.topText}</div>
                        <div>{item.bottomText}</div>
                    </div>

                    <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                        <div className='group relative'>
                            <AddCircleRoundedIcon className=' relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                            <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            )
        })}
    </Swiper>
    
  )
}

export default SmallCarousel