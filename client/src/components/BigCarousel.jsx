import React, { useEffect, useRef } from 'react'
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './BigCarousel.css'

const BigCarousel = (props) => {

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
   
    return (

        <div className='relative w-full pb-8 overflow-hidden'>

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
                // onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            >
                {
                    items.map(item => 
                        <SwiperSlide className='!w-fit cursor-pointer'>
                            <div className='relative text-white 2xl:!w-[1250px] lg:!w-[980px] md:!w-[690px] !w-[274px]'> 
                                <img className='2xl:h-[670px] lg:h-[520px] md:h-[370px] h-[495px] w-full object-cover' src={item.img} alt="" /> 
                                <div className='absolute bottom-10 left-20 text-center'>
                                    <div className='flex items-center justify-center text-lg mt-2'>
                                        <button className='text-black rounded-full py-2 px-5 mr-4 bg-[#f3f6f6] hover:bg-white'>{item.buttonLabel}</button>
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

export default BigCarousel