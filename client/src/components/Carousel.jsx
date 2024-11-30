import React, { useEffect, useRef } from 'react'
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = (props) => {

    var items = [
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ed/5d/5c/ed5d5cb1-fb90-aa84-8109-313e8509872e/d37cc6c7-0707-4bf9-a907-c576cfb9cc07.png/980x551.jpg',
            buttonLabel: 'See the schedule',
            genre: null,
            description: "Watch Messi, every club, and every match—live.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Comedy',
            description: "Breakdown. Breakthrough",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/ed/5d/5c/ed5d5cb1-fb90-aa84-8109-313e8509872e/d37cc6c7-0707-4bf9-a907-c576cfb9cc07.png/980x551.jpg',
            buttonLabel: 'See the schedule',
            genre: null,
            description: "Watch Messi, every club, and every match—live.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/C34jADlGtR5wObjPAMbW4w/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Comedy',
            description: "Breakdown. Breakthrough",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/rQ9tx4HlD7su-j1sVFPebg/1250x703.jpg',
            buttonLabel: 'Stream now',
            genre: 'Thriller',
            description: "Any resemblance to persons living or dead is not a coincidence.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/S2T1FMcov5a0GzmninlU4Q/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Thriller',
            description: "Emmy® Award winner.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Ed-B4V6OY0yoxxlksKeulw/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Comedy',
            description: "The shady side of paradise.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/2eBqvT3JXPbdzHWj6HM5_w/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Action',
            description: "George Clooney and Brad Pitt are rival fixers stuck on the same job for one wild night.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/ageP1PYyLi7UlNiWMva32Q/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Comedy',
            description: "Kindness makes a comeback.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/44dJzkosAhD0-ugRepvsfw/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Drama',
            description: "Winner of 3 Emmy® Awards.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Sci-fi',
            description: "The truth will surface.",
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/980x551.jpg',
            buttonLabel: 'Stream now',
            genre: 'Thriller',
            description: "We're all different people at work.",
        },
    ]

    let finalSlideIndex = null;

    const slideIndex = useRef(0);

    // useEffect(() => {

    //     const handleLoad = () => { // run after DOM loads
    //         // console.log(props.cards)
    //         finalSlideIndex = props.cards?.length - props.itemsToShow;
    //         console.log(finalSlideIndex)
            

    //         const leftArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-prev`)
    //         const rightArrow = document.querySelector(`.swiperContainer${props.Key} > .swiper-button-next`)
    //         leftArrow.style.display = 'none';
    //         leftArrow.style.opacity = 0; 
    //         rightArrow.style.opacity = 0;


    //         const hoverCarousel = document.querySelector(`.swiperContainer${props.Key}`)

    //         hoverCarousel.addEventListener('mouseenter', () => {
    //             // make arrows visible
    //             if (slideIndex.current !== 0 ) {
    //                 leftArrow.style.opacity = 1;
    //                 rightArrow.style.opacity = 1; 
    //             } else {
    //                 rightArrow.style.opacity = 1; 
    //             } 
    //         });

    //         hoverCarousel.addEventListener('mouseleave', () => {
    //             // make arrows invisible when you unhover container
    //                 leftArrow.style.opacity = 0; 
    //                 rightArrow.style.opacity = 0; 
    //         })
    //     }

    //     window.addEventListener('load', handleLoad);

    //     return () => window.removeEventListener('load', handleLoad);

    // }, [])

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
        <div className='relative w-[1623px] mx-auto pb-8 overflow-visible'>

            <Swiper
                className={`mt-8 !overflow-visible swiperContainer`}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={'auto'}
                pagination={{ clickable: true }}
                centeredSlides
                loop       
                speed={1000}
                autoplay={{ delay: 3000}}
                // loopAdditionalSlides={30}
                // onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
                onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            >
                {
                    items.map(item => 
                        <SwiperSlide className='!w-fit'>
                            <div className='relative text-white !w-[1250px]'> 
                                <img className='h-[670px] w-full object-cover' src={item.img} alt="" /> 
                                <div className='absolute bottom-10 left-20 text-center'>
                                    <div className='flex items-center justify-center text-lg mt-2'>
                                        <button className='text-black rounded-full bg-white py-2 px-5 mr-4'>{item.buttonLabel}</button>
                                        {item.genre && <h2 className='font-bold'>{item.genre} •&nbsp;</h2>}      <h2>{item.description}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                )}

            </Swiper>
           
        </div>

    )
}

export default Carousel