import React, { useEffect, useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LineUp from './LineUp';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';
import Carousel from "react-multi-carousel";
import './MacPage.css'
import Header from './Header';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';


const MacPage = () => {

    const chapterNav_items = [
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg',
            title: 'MacBook Air',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg',
            title: 'MacBook Pro',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/imac_light__cx5ex9nbqxme_large.svg',
            title: 'iMac',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg',
            title: 'Mac mini',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg',
            title: 'Mac Studio',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg',
            title: 'Mac Pro',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg',
            title: 'Compare',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/displays_light__d67yrnk0qsa6_large.svg',
            title: 'Displays',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg',
            title: 'Accessories',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_os_light__6mb5pqhztcie_large.svg',
            title: 'Sequoia',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_shop_light__f0m72gc7jguq_large.svg',
            title: 'Shop Mac',
            new: false,
        },
    ]

    const [scale, setScale] = useState(1);
    const [rounded, setRounded] = useState(0);


    useEffect(() => {
        const handleScroll = () => {

            // Get the current scroll position
            const scrollY = window.scrollY - 200;
      
            // Calculate the scale based on scroll position
            const newScale = 
            (1 - scrollY / 100 * 0.02 <= 0.88) ? 0.88 :
            (1 - scrollY / 100 * 0.02 >= 1) ? 1 : 
            1 - scrollY / 100 * 0.02
            // Adjust the divisor to control the scaling speed. min is 0.88 and max is 1

            const newRounded = 
            (scrollY / 100 * 0.5 <= 0) ? 0 :
            (scrollY / 100 * 0.5 >= 3) ? 3 :
            scrollY / 100 * 0.5
            // Convert scrolled Y position to border radius. min is 0 and max is 3
      
            // Set a minimum scale (prevent image from disappearing)
            if (newScale >= 0.88 && newScale <= 1) {
              setScale(newScale);
              //can go down 6 scrols
            }
            console.log(newRounded)
            if (newRounded >= 0 && newRounded <= 3) {
                setRounded(newRounded);
                //can go down 6 scrols
            }
            
          };
            // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const [dropDown, setDropDown] = useState(1)

    function changeDropDown(ind) {
        setDropDown(ind);
    }

    const mac_essential_items = [
        {
            topText: 'Mac accessories',
            middleText: 'Explore keyboards, mice, and other essentials.',
            link: 'Shop Mac accessories',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/essentials/essentials_accessories__dglhsic54owi_xlarge.jpg',
        },
        {
            topText: 'Studio Display',
            middleText: 'The 27-inch 5K Retina display pairs beautifully with any Mac.',
            link: 'Learn more',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/essentials/essentials_display__bk3i351qm0c2_xlarge.jpg',
        },
    ]


    const header_popMenu = [
        [
            'Explore Mac',
            'Explore All Mac',
            'MacBook Air',
            'MacBook Pro',
            'iMac',
            'Mac mini',
            'Mac Studio',
            'Mac Pro',
            'Displays',
            'Compare Mac',
            'Switch from PC to Mac',
        ],
        [
            'Shop Mac',
            'Shop Mac',
            'Help Me Choose',
            'Mac Accessories',
            'Apple Trade In',
            'Financing',
        ],
        [
            'More from Mac',
            'Mac Support',
            'AppleCare+ for Mac',
            'macOS Sequoia',
            'Apple Intelligence',
            'Apps by Apple',
            'Continuity',
            'iCloud+',
            'Mac for Business',
            'Education',
        ],
    ]

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

    const carousel_items = [
        {
            textColor: 'black',
            topText: 'Apple Intelligence and macOS',
            bottomText: 'Hello, Apple Intelligence.',
            bottomTextRainbow: true,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_intelligence__esfi0qmvis6e_xlarge.jpg',
        },
        {
            textColor: 'white',
            topText: 'Performance and Battery Life',
            bottomText: 'Go fast. Go far.',
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg',
        },
        {
            textColor: 'black',
            topText: 'Mac iPhone',
            bottomText: 'Dream team.',
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg',
        },
        {
            textColor: 'black',
            topText: 'Compatibility',
            bottomText: 'Mac runs your favorite apps.',
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_compatibility__cu59oukz81ci_large.jpg',
        },
        {
            textColor: 'white',
            topText: 'Privacy and Security',
            bottomText: "Your business is nobody else's.",
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_security__gfwda10khdym_large.jpg',
        },
        {
            textColor: 'white',
            topText: 'Durability',
            bottomText: 'Built to stand the test of time.',
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_durability__epiwcuk7zkeq_large.jpg',
        },
        {
            textColor: 'white',
            topText: 'Apple Values',
            bottomText: 'Our values drive everything we do.',
            bottomTextRainbow: false,
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_values__c9gck9qi4kia_large.jpg',
        },
    ]

    const [carouselCards, showCarouselCards] = useState([
        false, false, false, false, false, false, false
    ]);

    const body = document.body;

    function showCarouselPopUp(card) {
        showCarouselCards(prevCards => {
            const newState = [...prevCards];
            newState[card] = true;
            return newState;
        })

        body.style.paddingRight = (window.innerWidth - document.body.clientWidth) + 'px'
        body.style.overflow = 'hidden'

    }

    function closeCarouselPopUp(card) {
        showCarouselCards(prevCards => {
            const newState = [...prevCards];
            newState[card] = false;
            return newState;
        })

        setTimeout(() => {

            body.style.paddingRight = '0px'
            body.style.overflow = 'auto'

        }, 500)

    }

    const card_items = [
        {
            blackText: 'Familiar as iPhone.',
            grayText: 'You’ll feel right at home on Mac, with many of the same apps as iPhone — like Messages, Photos, Notes, and FaceTime.',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_02__ersykwizabgy_large.jpg',
            paddingBottom: true,
        },
        {
            blackText: 'Fully loaded.',
            grayText: 'Get started with apps you’ll use every day, like Mail, Calendar, and Safari for surfing the web. And if you want to create documents, spreadsheets, or presentations, there are powerful built-in productivity apps like Pages, Numbers, and Keynote.',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_03__cdkxh4vwzsxe_large.jpg',
            paddingBottom: false,
        },
        {
            blackText: 'Simple setup.',
            grayText: 'Migration Assistant makes it easy to transfer your data — including documents, photos, settings, and user accounts — from your previous Mac or PC.',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_04__gc6ql3ilxxua_large.jpg',
            paddingBottom: true,
        },
    ]



  return (
        

        <div className='apple_black'>
            <div onClick={() => {closeCarouselPopUp(0)}} className={`fixed w-full h-full z-20 backdrop-blur-lg bg-black transition-opacity duration-500 bg-opacity-50 ${carouselCards[0] ? 'opacity-100' : 'opacity-0 pointer-events-none'} overflow-auto`}>
                <div className='w-[1260px] rounded-3xl mx-auto h-fit pb-[76px] my-[44px] bg-white'>
                    
                    <div className='h-[76px] flex justify-end items-center mr-4'>
                        <div onClick={() => {closeCarouselPopUp(0)}} className='group relative'>
                            <AddCircleRoundedIcon className='rotate-45 relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                            <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                        </div>
                    </div>

                    <div className='px-[76px] relative'>

                        <div>
                            <div className='text-[19px] font-semibold'>
                                Apple Intelligence and macOS
                            </div>
                            <div className='text-[56px] font-semibold'>
                                Easy to use. Easy to love.
                            </div>
                        </div>
                        <div>
                            <div className='relative mt-16 '>
                                <div class=" bg-gradient-custom font-semibold rounded-[24px] w-full h-[862px] flex justify-center items-center after:rounded-[24px] content-none after:w-[calc(100%-7px)] after:h-[calc(100%-7px)] after:absolute">
                                    <div className='w-[calc(100%-24px)] h-[calc(100%-24px)] bg-white rounded-[24px] z-20 flex flex-col justify-between'>

                                    {/* TopText */}
                                        <div className='w-[917px] mx-auto text-[28px] pt-16 store_light_gray leading-[32px]'>
                                            <div className='apple_black float-left'>Hello, Apple Intelligence.</div> 
                                            &nbsp;Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.1
                                        </div>
                                    {/* Image */}
                                        <img className='rounded-[24px]' src="https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_01__cpbsq0243sty_large.jpg" alt="" />

                                    </div>
                                </div>

                                {card_items.map(item => {

                                    return (
                                        <div className={`${item.paddingBottom ? 'py-16' : 'pt-16'} bg-[#fafafa] rounded-[24px] z-20 flex flex-col justify-between font-semibold mt-4`}>

                                    {/* TopText */}
                                        <div className='w-[917px] mx-auto text-[28px] store_light_gray leading-[32px]'>
                                            <div className='apple_black float-left'>{item.blackText}</div> 
                                            &nbsp;{item.grayText}
                                        </div>
                                    {/* Image */}
                                        <img className={`${!item.paddingBottom && 'rounded-[24px]'} pt-8`} src={item.img} alt="" />

                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
        </div> 


            <Header darkMode={false} light='mac'/>

        {/* Chapter Nav */}
            <div className='bg-[#fafafc] pb-8 pt-4'>
                <div className='w-[1150px] mx-auto flex justify-between items-center'>

                    {chapterNav_items.map(item => {
                        return (
                            <a href='' className='relative flex flex-col items-center'>
                                <img className={item.title === 'Sequoia' && 'w-[35px] object-fit'} src={item.img} alt="" />
                                <span className='text-sm'>{item.title}</span>
                                {item.new && <span className='absolute w-fit bottom-[-14px] left-0 right-0 mx-auto text-xs text-[#BD4410]'>New</span>}
                            </a>
                        )
                    })}

                </div>
            </div>

        {/* Title */}
            <div className='bg-[white] my-[80px]'>

                <div className='w-[1700px] mx-auto'>
                    <div className='grid grid-cols-2'>
                        <leftgrid className='font-bold text-7xl text-left store_dark_gray'>Mac</leftgrid>
                        <div className='font-semibold text-3xl text-right ml-auto store_dark_gray'>
                            <div className='w-[300px] text-left'>
                                If you can dream it, Mac can do it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Mac Video */}
            <div className=''>
                <video style={{transform: `scale(${scale}`, borderRadius: `${rounded}rem`}} className={`w-screen h-[756px] 
                transform-scale duration-100
                object-cover`} loop autoplay='autoplay' muted >
                    <source src='https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge.mp4' />
                </video>
            </div>

        {/* Get to know Mac + Help me choose*/}
            <div className='bg-[white] mb-[140px]'>
                <div className='w-[1700px] mx-auto'>

        {/* Get to Know Mac + Carousel*/}
                    <div>
                        <div className='pt-[150px] font-semibold text-6xl text-left store_dark_gray'>Get to know Mac.</div>
                        <div>
                        <Carousel
                        // customTransition="transform 8000ms linear"
                        arrows={true}
                        // centerMode={true}
                        draggable={false}
                        // focusOnSelect={true}
                        // infinite
                        // keyBoardControl
                        // minimumTouchDrag={80}
                        // pauseOnHover
                        renderArrowsWhenDisabled={true}
                        // renderButtonGroupOutside={false}
                        renderDotsOutside={true}
                        responsive={responsive}
                        // rewind={false}
                        // rewindWithAnimation={false}
                        // rtl={false}
                        // shouldResetAutoplay={false}
                        // showDots={true}
                        // slidesToSlide={1}
                        className='py-24'
                        ssr={true}
                        > 
                        {carousel_items.map(item => {
                            return (
                                <div onClick={() => showCarouselPopUp(0)} className={`relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl ${item.textColor === 'white' && 'text-white'}`}>
                                    <img className='rounded-3xl w-[405px] h-[740px] object-cover object-bottom' src={item.img} alt="" />
                                    <div className='absolute top-0 left-0 ml-8 mt-8'>
                                        <div className='text-lg font-semibold'>
                                        {item.topText}
                                        </div>
                                        <h1 className={`font-semibold text-3xl ${item.bottomTextRainbow && 'text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'}`}>{item.bottomText}</h1>
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
                        </div> 
                    </div>

        {/* Help me choose */}
                    <div>
                        <div className='pt-[140px] font-semibold text-6xl text-left store_dark_gray'>Help me choose.</div>
                        <div className='my-24'>
                            <a href='' className='w-full transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex bg-[#f5f5f7] py-12'>

                                <div className='rounded-l-3xl basis-2/5 flex justify-center items-center text-center'>
                                    <div className=''>
                                        <div className='w-[440px] text-3xl font-semibold mb-8'>
                                        Answer a few questions to find the best Mac for you.
                                        </div>
                                        <button className='text-white rounded-full px-5 py-2 text-lg bg-[#0072e0] hover:bg-[#0077ED]'>Get started</button>
                                    </div>
                                </div>
                                <div className='rounded-l-3xl basis-3/5'>
                                
                                    <img className=' ' src="https://www.apple.com/v/mac/home/cb/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_xlarge.jpg" alt="" />

                                </div>
                                
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        {/* Lineup */}
            <LineUp />

        {/* Significant Others + Mac Essentials*/}

            <div className='bg-[white] mb-[140px]'>

                <div className='w-[1700px] mx-auto'>

                {/* Significant Others */}
                    <div>
                        <div className='pt-[140px] font-semibold text-6xl text-left store_dark_gray'>Significant others.</div>

                        <div className='mt-24 ml-4'>
                            <div className='w-full shadow-lg rounded-3xl flex bg-[#fafafc] py-12 '>

                {/* Left Text */}
                
                                <div className='rounded-l-3xl basis-[35%] p-[120px] text-left w-[590px] h-[756px] flex flex-col justify-center'>

                    {/* Dropdowns */}
                                    <div className=''>
                        {/* Dropdown 1 */}
                                        <div >
                                            <div onClick={() => changeDropDown(1)} className={` ${dropDown !== 1 ? 'cursor-pointer' : 'select-none' } text-3xl font-semibold py-4 flex items-center justify-between`}>
                                                <div >
                                                    Mac and iPhone
                                                </div>
                                                {dropDown === 1 ?
                                                    <ExpandLessRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                :
                                                    <ExpandMoreRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                }

                                            </div>
                                        {dropDown === 1 &&
                                            <p className='pr-11 text-balance text-[17px] mb-6'>Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.</p>
                                        }
                                        </div>
                                        <hr className='border-[#cececf] ' />

                        {/* Dropdown 2 */}
                                        <div>
                                            <div onClick={() => changeDropDown(2)} className={`${dropDown !== 2 ? 'cursor-pointer' : 'select-none' }
                                            text-3xl font-semibold py-4 flex items-center justify-between`}>
                                                <div >
                                                    Mac and iPad
                                                </div>
                                                {dropDown === 2 ?
                                                    <ExpandLessRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                :
                                                    <ExpandMoreRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                }
                                            </div>
                                        {dropDown === 2 &&
                                            <p className='pr-11 text-balance text-[17px] mb-6'>Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.</p>
                                        }
                                        </div>
                                        <hr className='border-[#cececf]' />
                        {/* Dropdown 3 */}
                                        <div>
                                            <div onClick={() => changeDropDown(3)} className={`${dropDown !== 3 ? 'cursor-pointer' : 'select-none' } text-3xl font-semibold py-4 flex items-center justify-between`}>
                                                <div >
                                                    Mac and Apple Watch
                                                </div>
                                                {dropDown === 3 ?
                                                    <ExpandLessRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                :
                                                    <ExpandMoreRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                }
                                            </div>
                                            {dropDown === 3 &&
                                                <p className='pr-11 text-balance text-[17px] mb-6'>Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.</p>
                                            }
                                        </div>

                                    </div>
                                </div>

                {/* Right Image */}
                                <div className='rounded-l-3xl basis-[65%] flex items-center'>

                                    {dropDown === 1 &&
                                        <img className='mx-auto' src="https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg" alt="" />
                                    }

                                    {dropDown === 2 &&
                                        <img className='mx-auto' src="https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_ipad__d9mjiijkul0m_xlarge.jpg" alt="" />
                                    } 

                                    {dropDown === 3 &&
                                        <img className='mx-auto' src="https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_watch__dckn1orrpkqe_xlarge.jpg" alt="" />
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                {/* Mac Essentials */}
                    <div>

                    {/* Title Container*/}
                        <div>
                            <div className='pt-[140px] font-semibold store_dark_gray flex justify-between'>

                        {/* Title Left*/}
                                <div className='text-6xl text-left w-[600px]'>Mac essentials.</div>

                        {/* Title Right */}
                                <div className='text-right flex text-lg justify-end'>
                                    <a className='group flex items-end text-[#196899] ' href="">
                                        <div className='flex items-center mr-6'>
                                            <div className='group-hover:underline'>All Mac accessories</div>
                                            <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    {/* Banners Container */}
                        <div className='flex justify-between items-center'>
                            {mac_essential_items.map(item => {

                            {/* Banner */}
                                return <div className='my-24 w-[830px] shadow-lg rounded-3xl bg-[#fafafa]'>

                            {/* Banner Top (Text) */}
                                    <div className='py-12 flex flex-col items-center'>
                                        <div className='text-3xl font-semibold mb-3'>{item.topText}</div>
                                        <div className='text-lg mb-3'>{item.middleText}</div>

                                        <a className='group flex text-[#196899] ' href="">
                                            <div className='flex items-center'>
                                                <div className='group-hover:underline text-lg font-semibold'>{item.link}</div>
                                                <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                            </div>
                                        </a>

                                    </div>

                            {/* Banner Bottom (Image) */}
                                    <div className='flex justify-center'>
                                        <img className='rounded-3xl w-fit  object-cover object-bottom' src={item.img} alt="" />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>

                </div>


            </div>

    {/* Mac Pop Menu */}
            <div className='bg-[#fafafc]'>
                <div className='w-[1700px] mx-auto py-32'>

            {/* Title */}
                    <div className='mb-12 text-6xl font-semibold'>Mac</div>
                    
            {/* Mac Pop Menu */}
                    <div className='text-left w-[980px] mt-10 flex'>
                        {header_popMenu.map((col, col_i) => {
                            if (col_i === 0) { // first col, bigger text
                                return (
                                    <div className='mr-20 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) { // title
                                                return <div className='text-[#6E6E73] text-lg mb-[14px]'>{item}</div>
                                            } else if (i === col.length - 1 || i === col.length - 2) {
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold text-[17px] mt-4'>{item}</a>
                                            } else {
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold text-[28px] mb-2'>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            } 
                            else {
                                return (
                                    <div className='mr-12 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) {
                                                return <div className='text-[#6E6E73] text-lg mb-[14px]'>{item}</div>
                                            } else {
                                                return <a href='/' className='text-[#333336] block text-[17px] mb-2 font-semibold'>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>

                </div>
            </div>

            <Footer />
            
        </div>
  )
}

export default MacPage