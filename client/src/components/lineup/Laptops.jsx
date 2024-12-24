import React, { useEffect, useRef, useState, useContext } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Colors from '../Colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "react-multi-carousel/lib/styles.css";
import './Laptops.css'

const Laptops = (props) => {

    // Laptop
    const laptop_product_title_items = [
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png',
            colors: ['black', 'summitstone'],
            new: true,
            product_header: 'MacBook Pro 14" and 16"',
            product_subheader : 'M4, M4 Pro, or M4 Max chip',
            product_desc: 'The most advanced Mac laptops for demanding workflows.',
            product_price: 'From $1599 or $133.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png',
            colors: ['black', 'cloudpink', 'sagegray', 'summitstone'],
            new: false,
            product_header: 'MacBook Air 13” and 15”',
            product_subheader : 'M2 or M3 chip',
            product_desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
            product_price: 'From $999 or $83.25/mo. for 12 mo.*',
        },
    ]
    const laptop_product_spec_items = [
        [
            {
                topText: '',
                middleText: '14.2” or 16.2”',
                img: '',
                width: '',
                bottomText: 'Liquid Retina XDR display with up to 1600 nits peak brightness, 1,000,000:1 contrast ratio, and up to 120Hz refresh rates9',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro_max__d90fsmfhy6ky_large.png',
                width: '122px',
                bottomText: 'Apple M4, M4 Pro, or M4 Max chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: 'Up to',
                middleText: '24 hours',
                img: '',
                width: '',
                bottomText: 'battery life3',
            },
            {
                topText: '',
                middleText: '7 ports',
                img: '',
                width: '',
                bottomText: '3x Thunderbolt 4 (USB‑C) or 3x Thunderbolt 5 (USB‑C), HDMI, SDXC, headphone jack, MagSafe',
            },
            {
                topText: '',
                middleText: '3.4 lb. or 4.7 lb.',
                img: '',
                width: '',
                bottomText: 'Weight',
            },
        ],
        [
            {
                topText: '',
                middleText: '13.6” or 15.3”',
                img: '',
                width: '',
                bottomText: 'Liquid Retina display with 500 nits of brightness and support for 1 billion colors9',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png',
                width: '80px',
                bottomText: 'Apple M2 or M3 chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: 'Up to',
                middleText: '18 hours',
                img: '',
                width: '',
                bottomText: 'battery life3',
            },
            {
                topText: '',
                middleText: '4 ports',
                img: '',
                width: '',
                bottomText: '2x Thunderbolt / USB 4, headphone jack, MagSafe',
            },
            {
                topText: '',
                middleText: '2.7 lb. or 3.3 lb.',
                img: '',
                width: '',
                bottomText: 'Weight',
            },
        ],
    ]

    // Desktop
    const desktop_product_title_items = [
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png',
            colors: ['blue', 'purple', 'red', 'orange', 'yellow', 'green', 'silver'],
            new: true,
            product_header: 'iMac',
            product_subheader : 'M4 chip',
            product_desc: 'A stunning all-in-one desktop for creativity and productivity.',
            product_price: 'From $1299 or $108.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large.png',
            colors: [],
            new: true,
            product_header: 'MacBook Air 13” and 15”',
            product_subheader : 'M2 or M3 chip',
            product_desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
            product_price: 'From $999 or $83.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png',
            colors: [],
            new: false,
            product_header: 'Mac Studio',
            product_subheader : 'M2 Max or M2 Ultra chip',
            product_desc: 'Powerful performance and extensive connectivity for pro workflows.',
            product_price: 'From $1999 or $166.58/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png',
            colors: [],
            new: false,
            product_header: 'Mac Pro',
            product_subheader : 'M2 Ultra chip',
            product_desc: 'A pro workstation with PCIe expansion for demanding workflows.',
            product_price: 'From $6999 or $583.25/mo. for 12 mo.*',
        },
    ]
    const desktop_product_spec_items = [
        [
            {
                topText: '',
                middleText: '24”',
                img: '',
                width: '',
                bottomText: '4.5K Retina display with 500 nits of brightness delivers sharp and vibrant detail.11',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4__dneah1uqjlme_large.png',
                width: '38px',
                bottomText: 'Apple M4, M4 Pro, or M4 Max chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: 'Up to',
                middleText: '6 ports',
                img: '',
                width: '',
                bottomText: '2x Thunderbolt / USB 4 or 4x Thunderbolt 4, Gigabit Ethernet, headphone jack',
            },
        ],
        [
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro__elktsjpc0ui6_large.png',
                width: '80px',
                bottomText: 'Apple M4 or M4 Pro chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '8 ports',
                img: '',
                width: '',
                bottomText: '3x Thunderbolt 4 or 3x Thunderbolt 5, 2x USB‑C, HDMI, Gigabit Ethernet, headphone jack',
            },
        ],
        [
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large.png',
                width: '80px',
                bottomText: 'Apple M2 Max or M2 Ultra chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '12 ports',
                img: '',
                width: '',
                bottomText: 'Up to 6x Thunderbolt 4, 2x USB‑A, up to 2x USB‑C, HDMI, 10Gb Ethernet, SDXC, headphone jack',
            },
        ],
        [
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large.png',
                width: '36px',
                bottomText: 'Apple M2 Ultra chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: '',
                middleText: 'PCIe',
                img: '',
                width: '',
                bottomText: 'Features seven expansion slots, six of which are PCle gen 4',
            },
            {
                topText: '',
                middleText: '18 ports',
                img: '',
                width: '',
                bottomText: '8x Thunderbolt 4, 3x USB‑A, 2x HDMI, 2x 10Gb Ethernet, 2x Serial ATA, headphone jack',
            },
        ],
    ]

    // Display
    const display_product_title_items = [
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png',
            colors: [],
            new: false,
            product_header: 'Studio Display',
            product_subheader : '',
            product_desc: 'A 5K Retina display with stellar camera and audio.',
            product_price: 'From $1599 or $133.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png',
            colors: [],
            new: false,
            product_header: 'Pro Display XDR',
            product_subheader : '',
            product_desc: 'An advanced 6K XDR display for pro workflows.',
            product_price: 'From $4999 or $416.58/mo. for 12 mo.*',
        },
    ]
    const display_product_spec_items = [
        [
            {
                topText: '',
                middleText: '27”',
                img: '',
                width: '',
                bottomText: 'Retina display with 5120 by 2880 pixels12',
            },
            {
                topText: '',
                middleText: '5K',
                img: '',
                width: '',
                bottomText: 'Retina display for gorgeous color and spectacular detail',
            },
            {
                topText: '',
                middleText: '600 nits',
                img: '',
                width: '',
                bottomText: 'brightness for brilliant color',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_video__br4ndidbu11e_large.png',
                width: '48px',
                bottomText: '12MP Ultra Wide camera with Center Stage for more natural video calls',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png',
                width: '45px',
                bottomText: 'True Tone, anti-reflective coating, and a nano-texture glass option for optimal viewing in any light',
            },
            {
                topText: '',
                middleText: '4 ports',
                img: '',
                width: '',
                bottomText: 'Thunderbolt 3 (USB‑C), 3x USB‑C',
            },
        ],
        [
            {
                topText: '',
                middleText: '32”',
                img: '',
                width: '',
                bottomText: 'Retina XDR display with 6016 by 3384 pixels12',
            },
            {
                topText: '',
                middleText: '6K',
                img: '',
                width: '',
                bottomText: 'Retina XDR display for the most immersive viewing experience',
            },
            {
                topText: '',
                middleText: '1000 nits',
                img: '',
                width: '',
                bottomText: 'brightness for dazzling color; up to 1600 nits peak brightness',
            },
            {
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png',
                width: '45px',
                bottomText: 'True Tone, anti-reflective coating, and a nano-texture glass option for optimal viewing in any light',
            },
            {
                topText: '',
                middleText: '4 ports',
                img: '',
                width: '',
                bottomText: 'Thunderbolt 3 (USB‑C), 3x USB‑C',
            },
        ],
    ]

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 300)
    }, [])

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
        const leftButton = document.querySelector('.swiperButtonOnBottom2 .swiper-button-prev')
        const rightButton = document.querySelector('.swiperButtonOnBottom2 .swiper-button-next')

        let itemLength = 0;

        if (props.laptop) {
            itemLength = laptop_product_title_items.length;
        } 
        else if (props.desktop) {
            itemLength = desktop_product_title_items.length;
        }
        else {
            itemLength = display_product_title_items.length;
        }

        if (window.screen.width >= 1746 && itemLength == 4 || window.screen.width >= 786 && itemLength == 2) {
            leftButton.style.display = 'none';
            rightButton.style.display = 'none';
        }

        else {
            const leftButton = document.querySelector('.swiperButtonOnBottom2 .swiper-button-prev')
            const rightButton = document.querySelector('.swiperButtonOnBottom2 .swiper-button-next')
            leftButton.style.display = '';
            rightButton.style.display = '';
            const offset = (75 + (window.screen.width) / 100) //tested these values for button offset
            leftButton.style.left = `calc(${offset}% + 0px)`;
            rightButton.style.left = `calc(${offset}% + 50px)`;
        }

    };

    useEffect(() => {
        updateMedia()
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);



  return (

    <Swiper 
        className={`flex ${!visible && 'opacity-0'} transition-opacity duration-700 !overflow-visible swiperButtonOnBottom2`}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={'auto'}
        navigation
        onSlideChange={(slide) => handleSlideChange(slide.activeIndex)}
        onSwiper={(swiper) => slideIndex.current = swiper.activeIndex}
    >
        {
        (props.laptop ? laptop_product_title_items : props.desktop ? desktop_product_title_items : display_product_title_items).map((item, itemNum) => {
            return (
            <SwiperSlide className='ml-4 !w-[372px]'>
                <div className='mt-20 md:text-center text-left flex flex-col md:items-center '>

                {/* Image */}
                    <div className={`flex items-end justify-center
                    ${props.laptop ? 
                        'lg:w-[354px] lg:h-[190px] md:w-[270px] md:h-[145px] w-[228px] h-[123px]' 
                        :
                        props.desktop ?
                        'lg:w-[316px] lg:h-[302px] md:w-[294px] md:h-[280px] w-[214px] h-[203px]'
                        :
                        'lg:w-[354px] lg:h-[252px] md:w-[304px] md:h-[228px] w-[232px] h-[173px]'
                    } `}>
                        <img className='w-full transition-transform duration-300 hover:scale-105' src={item.product_img} alt="" />
                    </div>
                    
                {/* Color and New */}
                    <div className='w-full md:text-center text-left'>
                        <div className='mt-12'>
                            <Colors colors={item.colors} desktops={props?.desktop}/>
                        </div>

                        <span className={`${!item.new && 'invisible'} inline-block mt-4 mb-2 font-bold text-xs text-[#BD4410]`}>New</span>
                    </div>
                {/* Item Description */}
                    <div className='flex flex-col mb-12 md:items-center '> 
                        <span className='font-semibold lg:text-[28px] lg:leading-normal text-xl md:pr-0 pr-[60px]'>{item.product_header}</span>
                        <span className='font-semibold md:text-[17px] text-sm md:pr-0 pr-[60px]'>{item.product_subheader}</span>
                        <span className='inline-block mt-3 w-[300px] md:text-[17px] text-sm md:pr-0 pr-[60px]'>{item.product_desc}</span>
                        <span className='inline-block mt-3 font-semibold md:text-[17px] text-sm '>{item.product_price}</span>

                        <div className='mt-8 flex items-center md:justify-between justify-start md:gap-0 gap-8 w-[260px] md:mx-auto md:px-4 md:text-[17px] md:leading-normal text-sm'>
                            <button className='text-white rounded-full px-5 py-2  bg-[#0072e0] hover:bg-[#0077ED]'>Learn more</button>

                            <a className='group flex items-end text-[#196899] ' href="">
                                <div className='flex items-center mr-6'>
                                    <div className='group-hover:underline'>Buy</div>
                                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                </div>
                            </a>
                        </div>
                    </div>

                {/* horizontal line */}
                    <hr className='border-[#cececf] my-6 w-full' />

                {/* Item Specs */}
                    <div className={`grid  ${props.laptop ? 'grid-rows-6 lg-apl:h-[770px] md:h-[756px] h-[726px]' : props.desktop ? 'grid-rows-5 lg-apl:h-[615px] md:h-[621px] h-[629px]' : 'grid-rows-6 lg-apl:h-[745px] md:h-[731px] h-[736px]' } gap-10 pt-6 `}>
                        {(props.laptop ? laptop_product_spec_items : props.desktop ? desktop_product_spec_items : display_product_spec_items)[itemNum].map((item, i) => {

                            return (
                                <div className='flex flex-col md:items-center items-start justify-center'>
                                    <span className={` ${!item.topText && 'invisible'} text-sm md:mb-2 mb-1 h-[20px]`}>{item.topText ? item.topText : 'nothing'}</span>
                                    { item.middleText && <span className='font-semibold md:text-[28px] text-xl md:mb-3 mb-2'>{item.middleText}</span>}
                                    { item.img && <img className={`w-[${item.width}] object-fit md:mb-4 mb-3`} src={item.img} alt="" />}
                                    { item.bottomText && <span className='text-xs w-[300px] text-balance'>{item.bottomText}</span>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default Laptops