import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BackgroundCard from './cards/BackgroundCard';
import ProductCard from './cards/ProductCard';
import IconCard from './cards/IconCard';
import './SwiperCarousel.css'

const SwiperCarousel = (props) => {

    let finalSlideIndex = null;

    const slideIndex = useRef(0);

    useEffect(() => {

        const handleLoad = () => { // run after DOM loads
            // console.log(props.cards)
            finalSlideIndex = props.cards?.length - props.itemsToShow;
            
            const leftArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-prev`)
            const rightArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-next`)
            leftArrow.style.display = 'none';
            leftArrow.style.opacity = 0; 
            rightArrow.style.opacity = 0;

            const hoverCarousel = document.querySelector(`.swiperContainer${props.Key}`);

            ['mouseenter', 'touchstart'].forEach(event => {
                hoverCarousel.addEventListener(event, () => {
                    // make arrows visible
                    if (slideIndex.current !== 0 ) {
                        leftArrow.style.opacity = 1;
                        rightArrow.style.opacity = 1; 
                    } else {
                        rightArrow.style.opacity = 1; 
                    } 
                });
            });

            ['mouseleave'].forEach(event => {
                hoverCarousel.addEventListener(event, () => {
                    // make arrows invisible when you unhover container
                        leftArrow.style.opacity = 0; 
                        rightArrow.style.opacity = 0; 
                })
            })

        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);

    }, [])

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

    const [isMediumScreen, setMediumScreen] = useState(window.screen.width >= 768);

    const updateMedia = () => {
        setMediumScreen(window.screen.width >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);

  return (
    <div className={`w-screen min-w-[1000px] `}>
        <Swiper
            className={`mt-8 !overflow-visible swiperNormal swiperContainer${props.Key}`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation
            onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
            onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            slidesOffsetAfter={1000}

        >
            {props.cards && props.cards.map((card, itemNum) => {
                return (
                    <SwiperSlide className='!w-fit !h-[500px]'>
                    {card.background // if BackgroundCard
                    ? 
                    <BackgroundCard card={card} width={(isMediumScreen ? ( props.small ? 'w-[400px]' : 'w-[480px]') : 'w-[309px]')} height={isMediumScreen ? 'h-[500px]' : 'h-[450px]'} isMediumScreen={isMediumScreen} /> 
                    :
                    card.product ? // if ProductCard
                    <ProductCard card={card} width={isMediumScreen ? 'w-[313px]' : 'w-[309px]'} height={isMediumScreen ? 'h-[500px]' : 'h-[450px]'}/>
                    :
                    card.double ? // if double IconCard
                        <div className={`flex flex-col justify-between items-center h-full ${!isMediumScreen && 'pb-[50px]'}`}>
                            <IconCard card={card.double[0]} icon={card.double[0].icon} width={isMediumScreen ? 'w-[313px]' : 'w-[309px]'} height={isMediumScreen ? 'h-[240px]' : 'h-[215px]'}/>
                            <IconCard card={card.double[1]} icon={card.double[1].icon} width={isMediumScreen ? 'w-[313px]' : 'w-[309px]'} height={isMediumScreen ? 'h-[240px]' : 'h-[215px]'}/>
                        </div>
                    : // else normal IconCard
                    <IconCard /> 
                    }
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default SwiperCarousel