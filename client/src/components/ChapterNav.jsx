import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ChapterNav.css'

const ChapterNav = (props) => {

    const [triggerSwiper, setTriggerSwiper] = useState(window.screen.width >= 1220);

    const updateMedia = () => {
        setTriggerSwiper(window.screen.width >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);



      useEffect(() => {

        const handleLoad = () => {
            const buttonNext = document.querySelector('.chapterNavSwiper > .swiper-button-next')
            const buttonPrev = document.querySelector('.chapterNavSwiper > .swiper-button-prev')
            if(buttonNext)
                buttonNext.classList.remove('swiper-button-lock')
                buttonNext.classList.remove('swiper-button-disabled')
                buttonPrev.classList.remove('swiper-button-lock')
                buttonPrev.classList.remove('swiper-button-disabled')


        }

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);

    }, [])


        


  return (
    <div className='bg-[#fafafc] pb-8 pt-4 px-[34px]'>
        <div className='w-[1150px] mx-auto flex justify-between items-center'>
            <Swiper 
            className={`mt-8 !overflow-visible chapterNavSwiper`}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={'auto'}
            navigation
            // onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
            // onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
            
            >

                {props.items.map(item => {
                    return (
                        <SwiperSlide className='!w-fit'>
                            <a href='' className='relative flex flex-col items-center w-fit'>
                                <img className={item.title === 'Sequoia' && 'w-[35px] object-fit'} src={item.img} alt="" />
                                <span className='text-sm'>{item.title}</span>
                                {item.new && <span className='absolute w-fit bottom-[-14px] left-0 right-0 mx-auto text-xs text-[#BD4410]'>New</span>}
                            </a>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
  )
}

export default ChapterNav