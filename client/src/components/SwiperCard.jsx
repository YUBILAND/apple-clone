import React, { useEffect, useRef, useState, useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { CarouselContext } from '../contexts/CarouselContext';
import "react-multi-carousel/lib/styles.css";
import './SwiperCard.css'


const SwiperCard = (props) => {

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

  return (
    <div className={`w-screen min-w-[1000px]`}>
        <Swiper
            className={`mt-8 !overflow-visible swiperButtonOnBottom`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation
            onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
            onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            slidesOffsetAfter={200}
            > 
            {props.items.map((item, itemNum) => {
                return (

                    <SwiperSlide className='!w-[405px] !h-[740px]'>
                        <div onClick={() => showCarouselPopUp(itemNum)} className={`cursor-pointer relative  transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl ${item.textColor === 'white' && 'text-white'} !w-[405px] !h-[740px]`}>
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
                    </SwiperSlide>
                    
                )
            })}
        </Swiper>
    </div>
  )
}

export default SwiperCard