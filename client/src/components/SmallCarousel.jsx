import React, { useContext, useEffect, useRef } from 'react'
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

    const updateMedia = () => {
        const leftButton = document.querySelector('.smallSwiperButtonOnBottom .swiper-button-prev')
        const rightButton = document.querySelector('.smallSwiperButtonOnBottom .swiper-button-next')

        const offset = (70 + (window.screen.width - 500) / 138)
        
        leftButton.style.left = `calc(${offset}% + 0px)`;
        rightButton.style.left = `calc(${offset}% + 50px)`;

    };

    useEffect(() => {
        updateMedia()
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);

  return (

    <Swiper 
      className={`lg:mt-[80px] md:mt-[64px] mt-[48px] !overflow-visible smallSwiperButtonOnBottom`}
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
              <SwiperSlide className='2xl:!w-[405px] lg:!w-[372px] md:!w-[344px] md:!h-[300px] !w-[260px] !h-[270px] '>
                <div onClick={() => showCarouselPopUp(itemNum)} className='relative bg-white w-full h-full transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg cursor-pointer select-none'>
                    
                    <div className='px-6 pt-6 pb-12 text-black '>

                    {/* Icon */}
                        <item.icon sx={{fontSize: '3.5rem'}} />

                    {/* TopText */}
                        <div className='lg:text-[28px] md:text-[24px] text-[21px] leading-tight font-semibold'>{item.topText}</div>

                    {/* BottomText */}
                        <div className='pt-3 leading-tight md:text-[17px] text-[14px]'>{item.bottomText}</div>
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