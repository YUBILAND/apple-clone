import React, { useContext, useEffect, useRef, useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import LineUp from './lineup/LineUp';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';
import Carousel from "react-multi-carousel";
import './MacPage.css'
import Header from './Header';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import CarouselCard from './CarouselCard';
import { CarouselContext } from '../contexts/CarouselContext';
import ChapterNav from './ChapterNav';
import SwiperCard from './SwiperCard';
import Title from './Title';


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

    useEffect(() => { // scroll event listener
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
            // console.log(newRounded)
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

    const [dropDown, setDropDown] = useState(0)

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
            mediumImg: 'https://www.apple.com/v/mac/home/cb/images/overview/essentials/essentials_display__bk3i351qm0c2_large_2x.jpg'
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

    const {carouselCards, showCarouselCards} = useContext(CarouselContext);

    const body = document.body;

    const {cardDelay, setCardDelay} = useContext(CarouselContext);

    function closeCarouselPopUp(card) {

        setCardDelay(false);
        body.style.pointerEvents = 'none'
        
        setTimeout(() => {
            showCarouselCards(prevCards => {
                const newState = [...prevCards];
                newState[card] = false;
                return newState;
            })

            body.style.paddingRight = '0px'
            body.style.overflow = 'auto'
            body.style.pointerEvents = 'auto'

        }, 500)
    }

    const card_header = [
        {
            topText: 'Apple Intelligence and macOS',
            bottomText: 'Easy to use. Easy to love.',
        },
        {
            topText: 'Performance and Battery Life',
            bottomText: 'Go fast. Go far.',
        },
        {
            topText: 'Mac and iPhone',
            bottomText: 'Dream team.',
        },
        {
            topText: 'Compatibility',
            bottomText: 'Mac runs your favorite apps.',
        },
        {
            topText: 'Privacy and Security',
            bottomText: 'Your business is nobody else’s.',
        },
        {
            topText: 'Durability',
            bottomText: 'Built to stand the test of time.',
        },
        {
            topText: 'Apple Values',
            bottomText: 'Our values drive everything we do.',
        },
    ]
    
    const card_items = [
    // Item 1
        [
            {
                neon: true,
                blackText: 'Hello, Apple Intelligence.',
                grayText: 'Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.',
                sup: '1',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_01__cpbsq0243sty_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'Familiar as iPhone.',
                grayText: 'You’ll feel right at home on Mac, with many of the same apps as iPhone — like Messages, Photos, Notes, and FaceTime.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_02__ersykwizabgy_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Fully loaded.',
                grayText: 'Get started with apps you’ll use every day, like Mail, Calendar, and Safari for surfing the web. And if you want to create documents, spreadsheets, or presentations, there are powerful built-in productivity apps like Pages, Numbers, and Keynote.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_03__cdkxh4vwzsxe_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'Simple setup.',
                grayText: 'Migration Assistant makes it easy to transfer your data — including documents, photos, settings, and user accounts — from your previous Mac or PC.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_intelligence_04__gc6ql3ilxxua_large.jpg',
                paddingBottom: true,
            },
        ],
    // Item 2
        [
            {
                neon: false,
                blackText: 'Supercharged by Apple silicon.',
                grayText: 'Apple silicon brings game-changing power and speed to Mac. It integrates the CPU, GPU, and Neural Engine onto a single power-efficient chip, accelerating everything you do. And thanks to Apple silicon, the incredible AI performance on Mac enhances your creativity and productivity.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_01__slniatu7x8yi_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Seize the day on a single charge.',
                grayText: 'Thanks to the efficiency of Apple silicon, Mac laptops deliver up to 24 hours of battery life with incredible performance whether you’re plugged in or not.',
                sup: '3',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_02__b1m37qedkb6q_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'Work smart. And fast.',
                grayText: 'From designing a stunning presentation to making an epic spreadsheet, Mac lets you get more done faster — whether you’re running to class or running a business.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_03__eapkd2ag65oy_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Create at the speed of your imagination.',
                grayText: 'From recording a podcast to editing your first feature film, you can do, make, and create in all-new ways with the speed and power of the ultracapable Mac.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_04__gkxbhujaspme_large.jpg',
                paddingBottom: true,
            },
        ],
    // Item 3
        [
            {
                neon: false,
                blackText: 'Use your iPhone from your Mac.',
                grayText: 'With iPhone Mirroring, you can see and use what’s on your iPhone from your Mac — without having to reach for it.',
                sup: '4',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_mac_iphone_01__d31agqfjcxiu_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Mac answers the call.',
                grayText: 'You can answer calls or messages from your iPhone directly on your Mac. And all the messages that appear on your iPhone appear on your Mac, too.',
                sup: '5',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_mac_iphone_02__bwopmn2e8rhy_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'Capture on iPhone. See it on Mac.',
                grayText: 'Use your iPhone to take a picture, record video, or scan a document and have it automatically appear on your Mac.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_mac_iphone_03__fayx0vk3pe2q_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'Start here. Finish there.',
                grayText: 'Start an email on your iPhone and finish it on your Mac. With Handoff, when your Mac and iPhone are near each other, you can seamlessly pass what you’re doing from one device to the other.',
                sup: '6',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_performance_04__gkxbhujaspme_large.jpg',
                paddingBottom: true,
            },
        ],
    // Item 4
        [
            {
                neon: false,
                blackText: 'The apps you love. Right on your Mac.',
                grayText: 'From Microsoft 365 to Adobe Creative Cloud to Zoom,2 all your go-to apps are superfast and snappy on Mac.',
                sup: '2',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_compatibility_01__dxaxtbfxpoia_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Well connected.',
                grayText: 'Mac comes with all the ports you need to use your favorite accessories, like external displays, hard drives, cameras, and printers.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_compatibility_02__cl2otknevx1e_large.jpg',
                paddingBottom: true,
            },
        ],
    // Item 5
        [
            {
                neon: false,
                blackText: 'Designed to protect your privacy.',
                grayText: 'Mac gives you the freedom to choose what you share and how you share it, so you can use apps more securely, protect your data, and keep yourself safer on the web. With groundbreaking privacy protections, Apple Intelligence gives you peace of mind that no one else can access your data — not even Apple. And with Private Cloud Compute, your data is never stored and is used only for your requests.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_security_01__bi7nitjtbhxy_large.png',
                paddingBottom: true,
                width: '134px',
                height: '175px',
            },
            {
                neon: false,
                blackText: 'Advanced security comes standard on Mac.',
                grayText: 'By integrating Mac with Apple silicon and macOS, Apple builds security protections into Mac from the ground up. Every Mac comes with industry-leading encryption and robust virus protections. And automatic free security updates help keep your Mac protected.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_security_04__cbsna3srpk3m_large.png',
                paddingBottom: true,
                width: '148px',
                height: '177px',
            },
            {
                neon: false,
                blackText: 'Unlock it all with the touch of your finger.',
                grayText: 'Touch ID keeps all your passwords at the touch of your finger. So you can use it to unlock your Mac, access passkeys, make payments, and sign in to apps and sites.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_security_02__f0q4rcv2huq2_large.jpg',
                paddingBottom: false,
            },
            {
                neon: false,
                blackText: 'One app to find it all.',
                grayText: 'If you can’t find your Mac or other Apple devices, the Find My app makes it easy to pinpoint where they are. If your device ever falls into the wrong hands, you can use Find My to lock it down or erase it from afar.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_security_03__e67v26fulxg2_large.jpg',
                paddingBottom: false,
            },
        ],
    // Item 6
        [
            {
                neon: false,
                blackText: 'Super-duper durable.',
                grayText: 'We design our products with durability in mind. Made with recycled aluminum enclosures, Mac computers are exceptionally well built and ready for pretty much anything.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_durability_01__ecn2so52g342_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Reliably up to date.',
                grayText: 'macOS updates deliver the latest features and help keep Mac — and the apps you rely on — running smoothly and securely. And macOS updates are free and can even be set to download automatically.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_durability_02__cvo3enplo8cy_large.jpg',
                paddingBottom: true,
            },
        ],
    // Item 7
        [
            {
                neon: false,
                blackText: 'For a better future.',
                grayText: 'We’re transforming how we make, assemble, and recycle Mac. We use 100% recycled aluminum in the enclosures of Mac mini, MacBook Air, and MacBook Pro. MacBook Air contains 50% recycled content. And the new Mac mini is our first carbon neutral Mac.7 Because the earth won’t wait. And neither will we.',
                sup: '7',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_values_01__bcgexiqnh1n6_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Good for you. Good for the planet.',
                grayText: 'With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn’t eligible for credit, we’ll recycle it for free.',
                sup: '8',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_values_02__5x3csdgu94i2_large.jpg',
                paddingBottom: true,
            },
            {
                neon: false,
                blackText: 'Accessibility for all.',
                grayText: 'With customizable Display Settings, VoiceOver, Personal Voice, Live Captions, Vocal Shortcuts, and more, Mac has industry-leading built-in accessibility features that help you connect, create, and do what you love — in the ways that work best for you.',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/consider/boc_values_03__gg2onmibavyy_large.jpg',
                paddingBottom: false,
            },
        ],
    ]

    const significant_others_items = [
        {
            title: 'Mac and iPhone',
            desc: 'Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.',
            height: '255px',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg',
        },
        {
            title: 'Mac and iPad',
            desc: 'Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.',
            height: '178.5px',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_ipad__d9mjiijkul0m_xlarge.jpg',
        },
        {
            title: 'Mac and Apple Watch',
            desc: 'Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.',
            height: '102px',
            img: 'https://www.apple.com/v/mac/home/cb/images/overview/augment/world_mac_watch__dckn1orrpkqe_xlarge.jpg',
        },
    ]

    const videoRef = useRef(null);

    const [videoPlaying, setVideoPlaying] = useState(true);

    function handleVideoClick(e) {
        e.preventDefault();

        if (videoRef.current.paused) {
            videoRef.current.play()
            setVideoPlaying(true);
        } else {
            videoRef.current.pause()
            setVideoPlaying(false);
        }
    }

    const [isMediumScreen, setMediumScreen] = useState(window.screen.width >= 736);
    const [isLargeScreen, setLargeScreen] = useState(window.screen.width >= 1068);
    const [isExtraLargeScreen, setExtraLargeScreen] = useState(window.screen.width >= 1442);



    const updateMedia = () => {
        setMediumScreen(window.screen.width >= 736);
        setLargeScreen(window.screen.width >= 1068);
        setExtraLargeScreen(window.screen.width >= 1442);


    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);
    

  return (

    <div className='apple_black w-screen overflow-hidden'>

    {/* Carousel Card Pop Up */}
        <div onClick={() => closeCarouselPopUp(carouselCards.findIndex(truthy => truthy))} className={`top-0 left-0 fixed w-full h-full z-20 backdrop-blur-lg bg-black transition-opacity duration-500 bg-opacity-50 ${cardDelay ? 'opacity-100' : 'opacity-0 pointer-events-none'} overflow-auto`}>
            {/* Stop propagation prevents parent onclick from triggering when clicking on child */}
            <div className='px-[6.25%]'>
                <div onClick={(e) => e.stopPropagation()} className='max-w-[1260px] w-full rounded-3xl mx-auto h-fit pb-[76px] my-[44px] bg-white'>
                    
                    <div className='h-[76px] flex justify-end items-center mr-4 sticky top-0'>
                        <div onClick={() => {closeCarouselPopUp(carouselCards.findIndex(truthy => truthy))}} className='group relative cursor-pointer'>
                            <AddCircleRoundedIcon className='rotate-45 relative text-[#343436] z-20' sx={{fontSize: '2.7rem'}} />
                            <div className='group-hover:bg-white transition-colors duration-300 absolute w-5 h-5 bg-[#D6D6D7] top-0 bottom-0 left-0 right-0 mx-auto my-auto z-10'/>
                        </div>
                    </div>

                    <div className='px-[76px]'>

                        <div>
                            <div className='text-[19px] font-semibold'>
                                {card_header[carouselCards.findIndex(truthy => truthy)]?.topText}
                            </div>
                            <div className='text-[56px] font-semibold'>
                            {card_header[carouselCards.findIndex(truthy => truthy)]?.bottomText}
                            </div>
                        </div>

                        <div className='relative mt-16 '>
                            
                            {carouselCards.findIndex(truthy => truthy) != -1 && card_items[carouselCards.findIndex(truthy => truthy)].map(item => {
                                return(
                                    item.neon 
                                    ?
                                    <div class=" bg-gradient-custom font-semibold rounded-[24px] w-full h-[862px] flex justify-center items-center after:rounded-[24px] content-none after:w-[calc(100%-7px)] after:h-[calc(100%-7px)] after:absolute">
                                        <div className='w-[calc(100%-24px)] h-[calc(100%-24px)] bg-white rounded-[24px] z-20 flex flex-col justify-between'>

                                        {/* TopText */}
                                            <div className='w-full lg:px-[100px] px-[8%] text-[28px] pt-16 store_light_gray leading-[32px]'>
                                                <div className='apple_black float-left'>{item.blackText}</div> 
                                                &nbsp;{item.grayText}
                                                <sup className='cursor-pointer underline hover:text-[#0066CC] text-lg font-bold'>
                                                {item?.sup}
                                                </sup>
                                            </div>

                                        {/* Image */}
                                            <img className='rounded-[24px]' src={item.img} alt="" />

                                        </div>
                                    </div>
                                    :
                                    <div className={`${item.paddingBottom ? 'py-16' : 'pt-16'} bg-[#fafafa] rounded-[24px] z-20 flex flex-col justify-between font-semibold mt-4`}>

                                    {/* TopText */}
                                        <div className='w-full lg:px-[100px] px-[8%] md:text-[28px] text-[21px] store_light_gray md:leading-[32px] leading-[26px]'>
                                            <div className='apple_black float-left'>{item.blackText}</div> 
                                            &nbsp;{item.grayText}
                                            <sup className='cursor-pointer underline hover:text-[#0066CC] text-lg font-bold'>
                                                {item?.sup}
                                            </sup>
                                        </div>
                                    {/* Image */}
                                        {/* <div className=' w-[1044px] h-[500px] flex justify-center items-center'> */}
                                            <img className={`${!item.paddingBottom && 'rounded-[24px]'} mt-8 mx-auto`} style={{
                                                width: item?.width, 
                                                height: item?.height}} src={item.img} alt="" />
                                        {/* </div> */}
                                    </div>
                                )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div> 

    {/* Chapter Nav */}
        <ChapterNav items={chapterNav_items}/>

    {/* Title */}
        <div className='bg-[white] md:my-[80px] my-[56px]'>

            <div className='w-screen px-[6.25%]'>
                <div className={'grid md:grid-cols-2 grid-cols-1'}>
                    <div className='font-bold lg:text-7xl md:text-6xl text-5xl leading-tight text-left store_dark_gray'>Mac</div>
                    <div className='font-semibold lg:text-[28px] md:text-[24px] text-[21px] leading-[28px] md:ml-auto store_dark_gray flex items-center '>
                        <div className='text-left lg:w-[250px] md:w-[220px] w-[220px] md:pt-0 pt-2'>
                            If you can dream it, Mac can do it.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* Mac Video */}
        <div className=' 
            transform-scale duration-100
             relative w-full h-[756px]'
             style={{transform: `scale(${scale}`}}>
                {console.log(scale)}
            <video onClick={handleVideoClick}
                 ref={videoRef} style={{borderRadius: `${rounded}rem`}} className={`w-full h-full object-cover`} loop autoplay='autoplay' muted >
                <source src='https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge.mp4' />
                    
            </video>

            { 
            videoPlaying 
                ?
            <div className='sticky bottom-0 right-0'>
                <PauseRoundedIcon onClick={handleVideoClick} className='cursor-pointer absolute bottom-12 right-14 rounded-full bg-[#ededef] bg-opacity-[56%]' sx={{color: 'rgba(0, 0, 0, 0.56)', width: '36px', height: '36px', padding: '6px'}}/>
            </div>
                :
            <div className='sticky bottom-0 right-0'>
                <PlayArrowRoundedIcon onClick={handleVideoClick} className='cursor-pointer absolute bottom-12 right-14 rounded-full bg-[#ededef] bg-opacity-[56%]' sx={{color: 'rgba(0, 0, 0, 0.56)', width: '36px', height: '36px', padding: '4px'}}/>
            </div>

            }
            
        </div>

    {/* Get to know Mac + Help me choose*/}
        <div className='w-screen px-[6.25%] bg-[white]'>
            
        {/* Get to Know Mac + Carousel*/}
            <div>
                <Title title='Get to know Mac.'/>

                <SwiperCard className='!overflow-visible' items={carousel_items} itemsToShow={5}/>
            </div>

        {/* Help me choose */}
            <div>
                <Title title='Help me choose.'/>
                <div className='lg:pb-[150px] md:pb-[120px] pb-[90px] lg:mt-[80px] md:mt-[64px] mt-[48px]'>

                    {isLargeScreen 
                        ?
                        <a href='' className='w-full xl:h-[580px] h-[480px] transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex bg-[#f5f5f7] py-12'>
                            <div className='rounded-l-3xl basis-2/5 flex justify-center items-center text-center'>
                                <div className=''>
                                    <div className='w-[440px] text-3xl font-semibold mb-8 2xl:text-wrap text-balance'>
                                    Answer a few questions to find the best Mac for you.
                                    </div>
                                    <button className='text-white rounded-full px-5 py-2 text-lg bg-[#0072e0] hover:bg-[#0077ED]'>Get started</button>
                                </div>
                            </div>
                            <div className='rounded-l-3xl basis-3/5 overflow-hidden'>
                                <img className='xl:min-w-[910px] min-w-[750px] ' src="https://www.apple.com/v/mac/home/cb/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_xlarge.jpg" alt="" />
                            </div>
                        </a>
                        :
                        <a href='' className='w-full h-fit transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex flex-col items-center bg-[#f5f5f7] py-12'>

                            <div className='rounded-l-3xl overflow-hidden mb-4'>
                                <img className='max-w-[509px] w-full' src="https://www.apple.com/v/mac/home/cb/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_xlarge.jpg" alt="" />
                            </div>

                            <div className='rounded-l-3xl flex justify-center items-center text-center'>
                                <div className=''>
                                    <div className='max-w-[440px] px-4 text-2xl font-semibold mb-8 text-wrap'>
                                    Answer a few questions to find the best Mac for you.
                                    </div>
                                    <button className='text-white rounded-full px-5 py-2 text-lg bg-[#0072e0] hover:bg-[#0077ED]'>Get started</button>
                                </div>
                            </div>
                            
                            
                        </a>
                    }
                </div>
            </div>

        </div>

    {/* Lineup (Explore Lineup, Apple Trade In, Why Apple is the best*/}
        <LineUp />

    {/* Significant Others + Mac Essentials*/}
        <div className='bg-[white] mb-[90px]'>
            <div className='w-screen px-[6.25%]'>

            {/* Significant Others */}
                <div>
                    <Title title='Significant others.'/>

                    {/* Dropdown Card */}
                    <div className='lg:mt-[80px] md:mt-[64px] mt-[48px] ml-4'>

                        {isLargeScreen ? 

                        <div className='min-w-[1410px] shadow-lg rounded-3xl flex bg-[#fafafc] h-[784px]'>

                        {/* Left Text */}
                            <div className='rounded-l-3xl basis-[35%] p-[120px] text-left min-w-[590px] h-[756px] flex flex-col justify-center'>

                            {/* Dropdowns */}
                                <div className=''>

                                    {significant_others_items.map((item, itemNum) => {
                                        return <>
                                            <div>
                                                <div onClick={() => changeDropDown(itemNum)} className={`${dropDown !== itemNum && 'cursor-pointer'} text-3xl font-semibold py-4 flex items-center justify-between`}>
                                                    <div className={`${dropDown === itemNum && 'cursor-default'}`}>
                                                        {item.title}
                                                    </div>
                                                    {dropDown === itemNum ?
                                                        <ExpandLessRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                    :
                                                        <ExpandMoreRoundedIcon sx={{fontSize: '3rem', color: '#868687'}} />
                                                    }

                                                </div>
                                                    <p className={`pr-11 text-balance text-[17px] ${dropDown === itemNum && 'mb-6'} transition-all transform overflow-hidden duration-500 ease-in-out ${dropDown === itemNum 
                                                        ? 
                                                        (dropDown === 0 
                                                            ? 
                                                        'max-h-[255px]'
                                                            :
                                                        (dropDown === 1
                                                            ?
                                                        'max-h-[178.5px]'
                                                            :
                                                        'max-h-[102px]'
                                                        ))
                                                        :
                                                        'max-h-0' }`}>{item.desc}</p>
                                            </div>
                                        {itemNum !== 2 &&
                                        <hr className='border-[#cececf]' />
                                        }
                                    </>
                                    })}
                                </div>
                            </div>

                        {/* Right Image */}
                            <div className='rounded-l-3xl basis-[65%] flex items-center '>
                                <img className='mx-auto' src={significant_others_items[dropDown].img} alt="" />
                            </div>
                        </div>
                    :
                        <div className='w-full shadow-lg rounded-3xl flex bg-[#fafafc] h-fit'>
                            <div className='rounded-l-3xl p-[45px] text-left flex flex-col justify-center'>

                            {/* Dropdowns */}
                                <div className=''>

                                    {significant_others_items.map((item, itemNum) => {
                                        return <>
                                            <div>
                                                <div onClick={() => changeDropDown(itemNum)} className={`${dropDown !== itemNum && 'cursor-pointer'} md:text-3xl text-lg font-semibold py-4 flex items-center justify-between`}>
                                                    <div className={`${dropDown === itemNum && 'cursor-default'}`}>
                                                        {item.title}
                                                    </div>
                                                    {dropDown === itemNum ?
                                                        <ExpandLessRoundedIcon className='md:!text-[3rem] !text-[2rem]' sx={{color: '#868687'}} />
                                                    :
                                                        <ExpandMoreRoundedIcon className='md:!text-[3rem] !text-[2rem]' sx={{color: '#868687'}} />
                                                    }

                                                </div>

                                                <div className={`${dropDown === itemNum ? (dropDown === 0 ? 'max-h-[500px]' : dropDown === 1 ? 'max-h-[600px]' : 'max-h-[440px]') : 'max-h-0'} transition-all transform overflow-hidden duration-700 ease-in-out ' }`}>
                                                    <p className={`h-full pr-11 md:text-[17px] text-[15px] mb-6 md:leading-normal leading-tight md:tracking-normal tracking-tighter`}>{item.desc}</p>
                                                    <img className={`w-full ${ itemNum === 0 ? 'md:h-[324px] h-[146px]' : itemNum === 1 ? 'md:h-[459px] h-[186px]' : 'md:h-[289px] h-[143px]'}  object-contain mx-auto mb-6`} src={item.img} alt="" />
                                                 </div>

                                            </div>
                                        {itemNum !== 2 &&
                                        <hr className='border-[#cececf]' />
                                        }
                                    </>
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                </div>

            {/* Mac Essentials */}
                <div>

                    <Title title='Mac essentials.' hyperlink={['All Mac accessories']}/>
                        
                {/* Banners Container */}
                    <div className='lg:mt-[80px] md:mt-[64px] mt-[48px] flex justify-between items-center gap-6 '>
                        {mac_essential_items.map(item => {

                        {/* Banner */}
                            return <div className=' w-full flex flex-col justify-between
                            xl-apl:max-w-[812.5px] xl-apl:h-[620px]
                            md:max-w-[620px] md:h-[560px] 
                            max-w-[312px] h-[480px]
                            shadow-lg rounded-3xl bg-[#fafafa] overflow-hidden'>

                            {/* Banner Top (Text) */}
                                <div className='md:pt-12 pt-8 flex flex-col items-center'>
                                    <div className='lg:text-[28px] md:text-2xl text-[21px] font-semibold mb-3'>{item.topText}</div>
                                    <div className='md:text-[17px] text-sm mb-3 text-center xl-apl:w-fit max-w-[400px] w-full'>{item.middleText}</div>

                                    <a className='group flex text-[#196899] ' href="">
                                        <div className='flex items-center'>
                                            <div className='group-hover:underline md:text-[17px] text-sm font-semibold'>{item.link}</div>
                                            <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                        </div>
                                    </a>

                                </div>

                            {/* Banner Bottom (Image) */}
                                <div className='flex justify-center'>
                                    
                                    {isExtraLargeScreen ?
                                        <img className='rounded-3xl xl-apl:min-h-[416px] lg:min-h-[324px] min-h-[252px] object-cover object-bottom' src={item.img} alt="" />
                                    : (item?.mediumImg ?
                                        <img className='rounded-3xl xl-apl:min-h-[416px] lg:min-h-[324px] min-h-[252px] object-cover object-bottom' src={item.mediumImg} alt="" />
                                        :
                                        <img className='rounded-3xl xl-apl:min-h-[416px] lg:min-h-[324px] min-h-[252px] object-cover object-bottom' src={item.img} alt="" />
                                    )

                                    }
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </div>

    {/* Mac Pop Menu */}
        <div className='bg-[#fafafc]'>
            <div className='w-screen px-[6.25%] py-32'>

            {/* Title */}
                <Title title='Mac'/>
                
            {/* Mac Pop Menu */}
                <div className='text-left mt-10 flex lg-apl:flex-row flex-col gap-6'> 
                    {/* if large screen, flex-row everything go straight to false ternary*/}

                    {!isLargeScreen && isMediumScreen ?
                    //if medium screen , i repeated twice first div normal second div has flex 
                    <div className='flex flex-col gap-8'>
                        {/* first row  */}
                        {header_popMenu.map((col, col_i) => {
                            if (col_i === 0) { // first col, bigger text
                                return (
                                    <div className='mr-20 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) { // title
                                                return <div className='text-[#6E6E73] md:text-[17px] text-[14px] mb-[14px] w-fit'>{item}</div>
                                            } else if (i === col.length - 1 || i === col.length - 2) { // last two items are smaller
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold lg-apl:text-[17px] md-apl:text-[14px] mt-4 w-fit'>{item}</a>
                                            } else { // normal
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold lg-apl:text-[28px] md-apl:text-2xl text-[21px] mb-2 w-fit'>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                        
                        {/* second row is flex-row */}
                        <div className='flex'> 
                            
                            {header_popMenu.map((col, col_i) => {
                                if (col_i > 0) {
                                    return (
                                        <div className='mr-12 select-none '>
                                            {col.map((item, i) => {
                                                if (i === 0) {
                                                    return <div className='text-[#6E6E73] text-lg mb-[14px] w-fit'>{item}</div>
                                                } else {
                                                    return <a href='/' className='text-[#333336] block text-[17px] mb-2 font-semibold w-fit'>{item}</a>
                                                }
                                            })}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    
                    :
                        // straight down, small screen
                        header_popMenu.map((col, col_i) => {
                            if (col_i === 0) { // first col, bigger text
                                return (
                                    <div className='mr-20 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) { // title
                                                return <div className='text-[#6E6E73] md:text-[17px] text-[14px] mb-[14px] w-fit'>{item}</div>
                                            } else if (i === col.length - 1 || i === col.length - 2) { // last two items are smaller
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold lg-apl:text-[17px] md-apl:text-[14px] mt-4 w-fit'>{item}</a>
                                            } else { // normal
                                                return <a href='/' className='text-[#333336] block leading-tight font-semibold lg-apl:text-[28px] md-apl:text-2xl text-[21px] mb-2 w-fit'>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            } 
                            else {
                                return (
                                    <div className='mr-12 select-none '>
                                        {col.map((item, i) => {
                                            if (i === 0) { //title
                                                return <div className='text-[#6E6E73] lg-apl:text-[17px] text-[14px] mb-[14px] w-fit'>{item}</div>
                                            } else {
                                                return <a href='/' className='text-[#333336] block lg-apl:text-[17px] text-[14px] mb-2 font-semibold w-fit'>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })

                    }

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default MacPage