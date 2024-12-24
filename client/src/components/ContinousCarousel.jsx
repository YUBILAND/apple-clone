import React, { useEffect, useRef, useState } from 'react'
import './ContinousCarousel.css'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const ContinousCarousel = () => {

    var items = [
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/bd/60/67/bd6067ae-64ac-04df-dc96-4757069c37dd/6610be22-3caa-493c-90b0-a8f73520c9bf.png/417x236.jpg',
            caption: 'NBA 2K25 Arcade Edition',
            appleGenre: 'Arcade',
            hoverText: 'Play now',
            bottomShadow: true,
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/4f/7b/a4/4f7ba464-a015-0990-5ea6-787983ee4424/6c7b6096-c386-4b28-962f-b449a14ee94a.png/834x472.jpg',
            caption: 'Improve Your Posture with Pilates',
            appleGenre: 'Fitness+',
            hoverText: 'Watch now',
            bottomShadow: true,
        },

        {
            albumImg: 'https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/f8/63/ad/f863adff-a4fc-0d4b-c6a4-c0a807dfba34/d30964d4-1295-41b7-a3a3-a7f3a64ab442.png/392x392SC.DN01.jpg?l=en-US',
            backgroundColor: 'bg-[rgb(235,231,224)]',
            albumCaption: "Today's Country",
            appleGenre: 'Music',
            hoverText: 'Listen now',
            dark: true,
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/417x236.jpg',
            caption: 'Hello Kitty Island Adventure',
            appleGenre: 'Arcade',
            hoverText: 'Play now',
            bottomShadow: true,
        },
        {
            img: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/15/cc/06/15cc06e6-f756-e170-4525-3886ff0ea46b/media-ST_KN_0073-9431976-Artwork-iOS-312273.png/834x472.jpg',
            caption: 'Strengthen with Kim',
            appleGenre: 'Fitness+',
            hoverText: 'Watch now',
            bottomShadow: true,
        },
        
        {
            albumImg: 'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/e0/3d/ef/e03def81-ea3a-16d6-7910-2f37060c6342/f01eda0f-9b8c-4b34-bb6f-fd4fa703c9da.png/196x196SC.DN01.jpg?l=en-US',
            backgroundColor: 'bg-[rgb(226,127,109)]',
            albumCaption: 'The Crate',
            appleGenre: 'Music',
            hoverText: 'Listen now',
        },
    ]

    const swiperRef = useRef(null);

    const currentTranslate = useRef(null);

    const [carouselPlaying, setCarouselPlaying] = useState(true);
    const carouselPlayingRef = useRef(true);


    const handleButtonClick = () => {
        if (carouselPlaying) {
            stopAnimation();
        } else {
            restartAnimation();
        }
        setCarouselPlaying(!carouselPlaying);
        carouselPlayingRef.current = !carouselPlayingRef.current

    }

    const translateNextSlide = useRef(0)

    const stopAnimation = () => { 
        setTimeout(() => {
            currentTranslate.current = swiperRef.current.getTranslate();
            const swiperWidth = ( isLargeScreen ? 432 : isMediumScreen ? 301 : 253 )

            //how many slides the translate goes to, correlate to modulo
            translateNextSlide.current = Math.floor(currentTranslate.current / -swiperWidth)

            // currentTranslate.current = currentTranslate.current % swiperWidth

            console.log((((currentTranslate.current + swiperWidth ) * 6000 ) / swiperWidth) + 6000 * translateNextSlide.current)
            swiperRef.current.setTranslate(currentTranslate.current); 
            swiperRef.current.autoplay.stop();
            swiperRef.current.params.speed = 6000;
        }, 0)

    };

    const restartAnimation = () => {
            //   432 because width (417) + gap between (15) = 432
        setTimeout(() => {

            const swiperWidth = ( isLargeScreen ? 432 : isMediumScreen ? 301 : 253 )
            swiperRef.current.slideTo(swiperRef.current.activeIndex,(((currentTranslate.current + swiperWidth ) * 6000 ) / swiperWidth) + 6000 * translateNextSlide.current, false)
            // console.log('IMPORTANT HERE', ( ( (currentTranslate.current + swiperWidth * translateNextSlide.current ) * 6000 ) / swiperWidth * translateNextSlide.current ) )
            
            swiperRef.current.autoplay.start();
            swiperRef.current.params.speed = 6000;
            // console.log((currentTranslate.current + swiperWidth ) * 6000 / swiperWidth)
        }, 0)


        
      }; 

    const slowDownAnimation = () => {
        currentTranslate.current = swiperRef.current.getTranslate();
        swiperRef.current.setTranslate(currentTranslate.current); 
        swiperRef.current.autoplay.stop();
        
        setTimeout(() => {
            //   432 because width (417) + gap between (15) = 432
            const swiperWidth = ( isLargeScreen ? 432 : isMediumScreen ? 301 : 253 )
            swiperRef.current.slideTo(swiperRef.current.activeIndex, (( currentTranslate.current + swiperWidth ) * 20000 ) / swiperWidth
            , false)
            swiperRef.current.autoplay.start();
        
            swiperRef.current.params.speed = 20000;
        }, 0)

    }

    const speedUpAnimation = () => {
        currentTranslate.current = swiperRef.current.getTranslate();
        swiperRef.current.setTranslate(currentTranslate.current); 
        swiperRef.current.autoplay.stop();

        setTimeout(() => {
            const swiperWidth = ( isLargeScreen ? 432 : isMediumScreen ? 301 : 253 )
            swiperRef.current.slideTo(swiperRef.current.activeIndex,
                //   432 because width (417) + gap between (15) = 432
            ( ( currentTranslate.current + swiperWidth ) * 6000 ) / swiperWidth
            , false)
            swiperRef.current.autoplay.start();

            swiperRef.current.params.speed = 6000;
        }, 0)

    }

    const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1024);

    const [isMediumScreen, setMediumScreen] = useState(window.innerWidth >= 768);
    
    const updateMedia = () => {
        setLargeScreen(window.innerWidth >= 1024);
        setMediumScreen(window.innerWidth >= 768);
        console.log(carouselPlayingRef.current)
        if(carouselPlayingRef.current) {
            restartAnimation();
        } else {
            stopAnimation();
        }
    };

    useEffect(() => {
        const swiperWidth = ( isLargeScreen ? 432 : isMediumScreen ? 301 : 253 )
        console.log(swiperWidth)
    }, [isLargeScreen, isMediumScreen])

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);
        
    return (
        <div>
            <div className='relative w-full overflow-hidden' 
            onMouseEnter={() => {
                if (carouselPlaying) slowDownAnimation();
            }}
            onMouseLeave={() => {
                if (carouselPlaying) speedUpAnimation();
            }}
            >
                <Swiper
                    className={`mt-8 !overflow-visible swiperContinous`}
                    modules={[Autoplay]}
                    spaceBetween={15}
                    slidesPerView={'auto'}
                    loop
                    allowTouchMove={false}
                    speed={6000}
                    autoplay={{ delay: 0}}
                    
                    // onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                >
                    {
                        items.map(item => 
                            <SwiperSlide className='!w-fit cursor-pointer'>
                                <div className='flex flex-col'>
                                <div className='relative text-white lg:w-[417px] lg:h-[236px] md:w-[286px] md:h-[161px] w-[238px] h-[134px]'> 
                                    {item.img 
                                        ?
                                    // IMG
                                    <img className='w-full h-full object-cover' src={item.img} alt="" />
                                        :
                                    // Otherwise Album
                                    isLargeScreen ?
                                    <div className={`w-full h-full ${item.backgroundColor} grid grid-cols-2`}>
                                        <div className='flex justify-end items-center'>
                                            <img className='lg:w-[196px] lg:h-[196px] w-[131px] h-[131px] object-cover rounded-xl' src={item.albumImg} alt="" />
                                        </div>
                                        <div className='flex justify-center items-center font-semibold'>
                                            <h1 className={`w-full ml-4 ${item?.dark && 'apple_black'}`}>{item.albumCaption}</h1>
                                        </div>
                                    </div>
                                    :
                                    <div className={`w-full h-full ${item.backgroundColor} flex justify-center items-center`}>
                                        <img className='w-[131px] h-[131px] object-cover rounded-xl' src={item.albumImg} alt="" />
                                    </div>
                                    }

                                    {item?.bottomShadow && 
                                    <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0)_50%,_rgba(0,0,0,0.4)_100%)]'>
                                        {/* shadow component */}
                                    </div>
                                    }

                                    {(item?.caption && isLargeScreen) && 
                                    <div className='absolute bottom-0 left-0 pb-[20px] pl-[15px]'>
                                        <div className={`text-[17px] font-semibold ${item?.dark && 'apple_black'}`}>{item.caption}</div>
                                    </div>
                                    }

                                    <div className='absolute bottom-0 right-0 lg:pb-[20px] pb-[10px] pr-[15px] flex justify-center items-center'>
                                        <AppleIcon className={`${item?.dark && 'apple_black'} lg:!w-4 !w-2`}/>
                                        <div className={`lg:text-[17px] text-sm lg:font-semibold ${item?.dark && 'apple_black'}`}>{item.appleGenre}</div>
                                    </div>

                                    <div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,_0,_0,_0)] hover:bg-[rgba(0,_0,_0,_0.4)] duration-300 transition-all flex justify-center items-center group'>
                                        <button className='bg-white rounded-full text-black py-2 px-5 transition-opacity duration-300 group-hover:opacity-100 opacity-0'>{item.hoverText}</button>
                                    </div>

                                    
                                </div>
                                {!isLargeScreen && 
                                <div className='pt-2 text-[14px] font-semibold'>{item?.albumCaption ? item.albumCaption : item.caption}</div>
                        
                        }
                        </div>
                            </SwiperSlide>
                    )}

                </Swiper>
            
            </div>

            <div className='text-right mt-4 mr-4'>
                {carouselPlaying 
                ?
                    <PauseIcon onClick={() => handleButtonClick()} className='rounded-full bg-[#d0cfd3] p-1 cursor-pointer hover:bg-[#C8C8CE] ' />
                :
                    <PlayArrowIcon onClick={() => handleButtonClick()} className='rounded-full bg-[#d0cfd3] p-1 cursor-pointer hover:bg-[#C8C8CE]'  />
                    
                }
                
            </div>
        </div>

    )
}

export default ContinousCarousel