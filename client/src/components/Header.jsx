import React, { useEffect, useRef, useState } from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EastIcon from '@mui/icons-material/East';
import CancelIcon from '@mui/icons-material/Cancel';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MediaQuery from "react-responsive";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from './IconButton';

const Header = (props) => {
    // header items
    const header_items = [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Vision',
        'Airpods',
        'TV & Home',
        'Entertainment',
        'Accessories',
        'Support',
    ]

    // changes each header item to a appropriate href link
    const header_items_to_href = header_items.map((item) => {
            return item
            .replace(/[^a-zA-Z0-9 ]/g, '') // remove special characters
            .replace(/\s\s+/g, ' ') // turn multiple whitespaces to one
            .replace(/\s+/g, '-') //replace whitespace with dash
            .toLowerCase();
        }) 

    const header_popMenu = [
        [ // Store
            [
                'Shop',
                'Shop the latest',
                'Mac',
                'iPad',
                'iPhone',
                'Apple Watch',
                'Apple Vision Pro',
                'Accessories',
            ],
            [
                'Quick Links',
                'Find a store',
                'Order status',
                'Apple Trade In',
                'Financing',
            ],
            [
                'Shop Special Stores',
                'Certified Refurbished',
                'Education',
                'Business',
                'Veterans and Military',
                'Government',
            ],
        ],
        [ // Mac
            [
                'Explore Mac',
                'Explore All Mac',
                'MacBook Air',
                'MacBook Pro',
                'iMac',
                'Mac Mini',
                'Mac Studio',
                'Mac Pro',
                'Displays',
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
                'More from mac',
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
        ],
        [ // iPad
            [
                'Explore iPad',
                'Explore All iPad',
                'iPad Pro',
                'iPad Air',
                'iPad',
                'iPad mini',
                'Apple Pencil',
                'Keyboards',
                'Compare iPad',
                'Why iPad',
            ],
            [
                'Shop iPad',
                'Shop iPad',
                'iPad Accessories',
                'Apple Trade In',
                'Financing',
            ],
            [
                'More from iPad',
                'iPad Support',
                'AppleCare+ for iPad',
                'iPadOS 18',
                'Apple Intelligence',
                'Apps by Apple',
                'iCloud+',
                'Education',
            ],
        ],
        [ // iPhone
            [
                'Explore iPhone',
                'Explore All iPhone',
                'iPhone 16 Pro',
                'iPhone 16',
                'iPhone 15',
                'iPhone 14',
                'iPhone SE',
                'Compare iPhone',
                'Switch from Android',
            ],
            [
                'Shop iPhone',
                'Shop iPhone',
                'iPhone Accessories',
                'Apple Trade In',
                'Carrier Deals at Apple',
                'Financing',
            ],
            [
                'More from iPhone',
                'iPhone Support ',
                'AppleCare+ for iPhone',
                'iOS 18',
                'Apple Intelligence',
                'Apps by Apple',
                'iPhone Privacy',
                'iCloud+',
                'Wallet, Pay, Card',
                'Siri',
            ],
        ],
        [ // Watch
            [
                'Explore Watch',
                'Explore All Apple Watch',
                'Apple Watch Series 10',
                'Apple Watch Ultra 2',
                'Apple Watch SE',
                'Apple Watch Nike',
                'Apple Watch Hermès',
                'Compare Watch',
                'Why Apple Watch',
            ],
            [
                'Shop Watch',
                'Shop Apple Watch',
                'Apple Watch Studio',
                'Apple Watch Bands',
                'Apple Watch Accessories',
                'Apple Trade In',
                'Financing',
            ],
            [
                'More from Watch',
                'Apple Watch Support',
                'AppleCare+ watchOS 11',
                'Apple Watch For Your Kids',
                'Apps by Apple',
                'Apple Fitness+',

            ],
        ],
        [ // Vision
            [
                'Explore Vision',
                'Explore Apple Vision Pro',
                'Guided Tour',
                'Tech Specs',
            ],
            [
                'Shop Vision',
                'Shop Apple Vision Pro',
                'Apple Vision Pro Accessories',
                'Book a Demo',
                'Financing',
            ],
            [
                'More from Vision',
                'Apple Vision Pro Support',
                'AppleCare+ ',
                'visionOS',
            ],
        ],
        [ // AirPods
            [
                'Explore AirPods',
                'Explore All AirPods',
                'AirPods 4',
                'AirPods Pro 2',
                'AirPods Max',
                'Compare AirPods',
            ],
            [
                'Shop AirPods',
                'Shop AirPods',
                'AirPods Accessories',
            ],
            [
                'More from AirPods',
                'AirPods Support',
                'AppleCare+ for Headphones',
                'Hearing Health',
                'Apple Music',
            ],
        ],
        [ // TV & Home
            [
                'Explore TV & Home',
                'Apple TV 4K',
                'HomePod',
                'HomePod mini',
            ],
            [
                'Shop TV & Home',
                'Shop Apple TV 4K',
                'Shop HomePod',
                'Shop HomePod mini',
                'Shop Siri Remote',
                'TV & Home Accessories',
            ],
            [
                'More from TV & Home',
                'Apple TV Support',
                'HomePod Support',
                'AppleCare+',
                'Apple TV app',
                'Apple TV+',
                'Home app',
                'Apple Music',
                'Siri ',
                'AirPlay',
            ],
        ],
        [ // Entertainment
            [
                'Explore Entertainment',
                'Explore Entertainment',
                'Apple One',
                'Apple TV+',
                'Apple Music',
                'Apple Arcade',
                'Apple Fitness+',
                'Apple News+',
                'Apple Podcasts',
                'Apple Books',
                'App Store',
            ],
            [
                'Support',
                'Apple TV+ Support',
                'Apple Music Support',
            ],
        ],
        [ // Accessories
            [
                'Shop Accessories',
                'Shop All Accessories',
                'Mac',
                'iPad',
                'iPhone',
                'Apple Watch',
                'Apple Vision Pro',
                'AirPods',
                'TV & Home',
            ],
            [
                'Explore Accessories',
                'Made by Apple',
                'Beats by Dr. Dre',
                'AirTag',
            ],
        ],
        [ // Support
            [
                'Explore Support',
                'iPhone',
                'Mac',
                'iPad',
                'Watch',
                'Apple Vision Pro',
                'AirPods',
                'Music',
                'TV',
                'Explore Support',
            ],
            [
                'Get Help',
                'Community',
                'Check Coverage',
                'Repair',
                'Contact Us',
            ],
            [
                'Helpful Topics',
                'Get AppleCare+',
                'Apple Account and Password',
                'Billing & Subscriptions',
                'Accessibility',

            ],
        ],
    ]

    // Doing Hover
    const [isHoverStore, setIsHoverStore] = useState(false);
    const [isHoverMac, setIsHoverMac] = useState(false);

    const [isHoverHeader, setIsHoverHeader] = useState(
        header_items_to_href.reduce((acc, str) => {
            acc[str] = false;
            return acc;
        }, {}) // turn array to hashmap where key is false
    );

    const [isClickSearchIcon, setIsClickSearchIcon] = useState(false);
    const [isHoverSearch, setIsHoverSearch] = useState(false);

    const [isClickShoppingBagIcon, setIsClickShoppingBagIcon] = useState(false);
    const [isHoverShoppingBag, setIsHoverShoppingBag] = useState(false);

    const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 834);

    const [isHoverSmallBurger, setIsHoverSmallBurger] = useState(false);

    const [animationDelayBuffer, setAnimationDelayBuffer] = useState({
        'store': false, 'mac': false, 'ipad': false, 'iphone': false, 'watch': false, 'vision': false, 'airpods': false, 'tv-home': false, 'entertainment': false, 'accessories': false, 'support': false, 'search' : false, 'shoppingbag' : false
    }) // when you hover over search pop menu and trigger mouse leave, even if you reenter within animation period it won't trigger event listener

    const animationDelayBufferRef = useRef({
        'store': false, 'mac': false, 'ipad': false, 'iphone': false, 'watch': false, 'vision': false, 'airpods': false, 'tv-home': false, 'entertainment': false, 'accessories': false, 'support': false, 'search' : false, 'shoppingbag' : false
    }) //ref to check if animationDelayBuffer is still true when event listener is triggered, delay needs to finish before event listener can be triggered again

    const ref1 = useRef(false);

    useEffect(() => { // add event listeners to icons, loads after DOM
        header_items_to_href.map(item => {
            const headerIconElement = document.getElementById(item);
            const headerElement = document.getElementById('header');

            if (headerIconElement) {
                headerIconElement.addEventListener('mouseenter', () => {
                    // Code to execute when the mouse enters the element

                    setIsHoverHeader((prev) => ({
                        ...Object.keys(prev).reduce((acc, key) => {
                            acc[key] = false; // set everything to false
                            return acc;
                        }, {}),
                        [item]: true // set item to true
                    }));

                    setAnimationDelayBuffer((prev) => ({
                        ...Object.keys(prev).reduce((acc, key) => {
                            acc[key] = false; // set everything to false
                            return acc;
                        }, {}),
                        [item]: true // set item to true
                    }));
                    

                });

                headerElement.addEventListener('mouseover', () => {
                    ref1.current = true;
                })

                headerElement.addEventListener('mouseleave', () => {
                    ref1.current = false;
                })

                headerIconElement.addEventListener('mouseleave', () => {
                    // Code to execute when the mouse leaves the element
                    if (!ref1.current) {
                        setIsHoverHeader((prev) => ({
                            ...prev,
                            [item] : false
                        }))
                        setAnimationDelayBuffer((prev) => ({
                            ...prev,
                            [item] : false
                        }));
                    }
                });
            }
        })

        // Search Icon, on click then hover
        const searchIconElement = document.getElementById('search');
        if (searchIconElement) {
            searchIconElement.addEventListener('click', () => {
                setIsHoverSearch(true);
                setAnimationDelayBuffer(((prev) => ({
                    ...prev,
                    'search' : true
                })))

                searchIconElement.addEventListener('mouseleave', () => {
                    closeSearch();
                    
                });
            });
        }

        // Shopping Bag Icon, on click then hover
        const shoppingBagIconElement = document.getElementById('shoppingBag');
        if (shoppingBagIconElement) {
            shoppingBagIconElement.addEventListener('click', () => {
                setIsHoverShoppingBag(true);
                setAnimationDelayBuffer(((prev) => ({
                    ...prev,
                    'shoppingbag' : true
                })))

                shoppingBagIconElement.addEventListener('mouseleave', () => {
                    setIsHoverShoppingBag(false);
                });
            });
        }

    }, [isLargeScreen])

    useEffect(() => { // hover on header pop menu 
        if(isHoverHeader) {
            const item = Object.entries(isHoverHeader).find(([key, val]) => val)?.[0]
            const popMenu = document.getElementById('popMenu' + item);
            if (popMenu) {
                popMenu.addEventListener('mouseenter', () => {
                    // Code to execute when the mouse enters the element
                        if (!animationDelayBufferRef.current[item]) {
                            setIsHoverHeader((prev) => ({
                                ...prev,
                                [popMenu.getAttribute('data-key')] : true
                            }))
                            setAnimationDelayBuffer(((prev) => ({
                                ...prev,
                                [item] : true
                            })))
                            animationDelayBufferRef.current[item] = true
                        }
                });
                popMenu.addEventListener('mouseleave', () => {
                    // Code to execute when the mouse leaves the element
                    // console.log('No longer hovering pop');
                    setIsHoverHeader((prev) => ({
                        ...prev,
                        [popMenu.getAttribute('data-key')] : false
                    }))

                    if(isHoverHeader) {
                        const item = Object.entries(isHoverHeader).find(([key, val]) => val)?.[0]

                        setTimeout(() => {
                            setAnimationDelayBuffer(((prev) => ({
                                ...prev,
                                [item] : false
                            })))
                            animationDelayBufferRef.current[item] = false

                        }, 300)
                    }
                });
            }
        }

    }, [isHoverHeader])
    

    useEffect(() => { // hover on search pop menu
        const searchPopMenu = document.getElementById('searchPopMenu');
        if (searchPopMenu) {
            searchPopMenu.addEventListener('mouseenter', () => {
                if (!animationDelayBufferRef.current['search']) {

                    setIsHoverSearch(true);
                    setAnimationDelayBuffer(((prev) => ({
                        ...prev,
                        'search' : true
                    })))
                    animationDelayBufferRef.current['search'] = true
                }

            });
            searchPopMenu.addEventListener('mouseleave', () => {
                closeSearch();

                setTimeout(() => {
                    setAnimationDelayBuffer(((prev) => ({
                        ...prev,
                        'search' : false
                    })))
                    animationDelayBufferRef.current['search'] = false

                }, 300)
            });
        }

        return () => { // removes event listener for search
            if (!isHoverSearch) {
                const searchIconElement = document.getElementById('search');
                searchIconElement.removeEventListener('mouseenter', () => {
                    setIsHoverSearch(true)});
                searchIconElement.removeEventListener('mouseleave', () => {
                    setIsHoverSearch(true)
                });

            }
        }
    }, [isHoverSearch])

    useEffect(() => {
        console.log(animationDelayBuffer)
    }, [animationDelayBuffer])

    useEffect(() => {
        console.log(isHoverHeader)
    }, [isHoverHeader])

    useEffect(() => { // hover on shopping bag pop menu
        const shoppingBagPopMenu = document.getElementById('shoppingBagPopMenu');
        if (shoppingBagPopMenu) {
            shoppingBagPopMenu.addEventListener('mouseenter', () => {
                if (!animationDelayBufferRef.current['shoppingbag']) {

                    setIsHoverShoppingBag(true);
                    setAnimationDelayBuffer(((prev) => ({
                        ...prev,
                        'shoppingbag' : true
                    })))
                    animationDelayBufferRef.current['shoppingbag'] = true
                }
            });
            shoppingBagPopMenu.addEventListener('mouseleave', () => {
                closeShopping();
                setTimeout(() => {
                    setAnimationDelayBuffer((prev) => ({
                        ...prev,
                        'shoppingbag' : false
                    }));
                    animationDelayBufferRef.current['shoppingbag'] = false

                }, 300)

            });
        }

        return () => { // removes event listener for search
            if (!isHoverShoppingBag) {
                const shoppingBagIconElement = document.getElementById('shoppingBag');
                shoppingBagIconElement.removeEventListener('mouseenter', () => {
                    setIsHoverShoppingBag(true)});
                shoppingBagIconElement.removeEventListener('mouseleave', () => {
                    setIsHoverShoppingBag(false)});
            }
        }
    }, [isHoverShoppingBag])

    const quickLinks = [
        'Find a Store',
        'Apple Vision Pro',
        'AirPods',
        'AirTag',
        'Apple Trade In'
    ]

    const myProfile = [
        'Orders',
        'Your Saves',
        'Account',
        'Sign In',
    ]

    const myProfileIcons = [
        ViewInArIcon,
        BookmarkBorderIcon,
        SettingsIcon,
        AccountCircleOutlinedIcon,
    ]

    function clickSearch () {
        setIsClickSearchIcon(true);
        //focus on search bar when icon is clicked
        document.getElementById("apple-search").focus();

        if (!isLargeScreen) {
            document.body.style.overflow = 'hidden'
        }
    }

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);  // Update state with the new value
      };

    const clearInput = () => {
        setInputValue('') // clear state
        document.getElementById("apple-search").focus(); // refocus on input field
    }

    function clickShoppingBag () {
        setIsClickShoppingBagIcon(true);
        if (!isLargeScreen) {
            document.body.style.overflow = 'hidden'
        }

    }

    const clickSmallBurger = () => {
        setIsHoverSmallBurger(true);
        if (!isLargeScreen) {
            document.body.style.overflow = 'hidden'
        }
    }

    const updateMedia = () => {
        setLargeScreen(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);

    const closeSearch = () => {
        setIsHoverSearch(false);
        clearInput(); // clear searchbar on unhover
        document.body.style.overflow = 'auto'
    }

    const closeShopping = () => {
        setIsHoverShoppingBag(false);
        document.body.style.overflow = 'auto'
    }

    const closeSmallBurger = () => {
        setIsHoverSmallBurger(false)
        document.body.style.overflow = 'auto'
    }

    

  return (
    <div className='select-none'>
        {/* putting pop menu before header because otherwise fixed element will show on top unless i put negative z-index */}

            {/* when search icon is clicked on */}
            <>  
                <div className={`fixed ${isHoverSearch ? 'z-30 opacity-100' : 'opacity-0 z-30'} ${!animationDelayBuffer['search'] && '!z-0'} transition-opacity duration-300 top-0 left-0 w-screen md:pt-[44px] ${props.dark ? 'header_color' : 'white_header_color text-[#313131]'}`} id='searchPopMenu' >
                    {!isLargeScreen &&
                        <div className='flex justify-end'>
                            <CloseIcon onClick={() => closeSearch()} className='text-[#86868B]'/>
                        </div>
                    }
                    <div className={`select-none  text-center text-white mb-6 px-12 `}>
                        <div className='text-left max-w-[980px] w-full mx-auto md:my-10 '>
                            
                            <div className='flex items-center mb-8'>
                                <SearchIcon className='' sx={{fontSize: '1.8rem', color: inputValue.length ? (props.dark ? 'white' : 'black') : '#86868B', transition: 'color 0.5s ease', marginRight: '4px'}}/>
                                <input value={inputValue} onChange={handleChange} id='apple-search' placeholder={`${isLargeScreen ? 'Search apple.com' : 'Search'}`} className={`leading-none placeholder-[#86868B]
                                ${props.dark ? 'header_color text-white' : 'white_header_color text-[#313131]'} font-semibold w-full outline-none md:text-2xl text-3xl`} type="text" />
                                <CancelIcon onClick={clearInput} className={`${!inputValue.length && '!hidden'} ${props.dark ? 'glow' : 'glow_dark'}`} sx={{color: '#86868B', transition: 'color 0.5s ease'}}/>
                            </div>
                            <div className='md:text-xs text-xl'>
                                <div className='dark_gray mb-2'>Quick Links</div>
                                {quickLinks.map(item => {
                                    return <a className={`group ${props.dark ? 'text-[#e6e6e6] hover:text-white hover:bg-[#1D1D1F]' : 'text-[#333336] hover:text-black hover:bg-[#F5F5F7]'} flex items-center mb-1 py-1 rounded-md`} href="">
                                    <EastIcon className={`${props.dark ? 'group-hover:text-white' : 'group-hover:text-black'}`} sx={{ fontSize: '0.7rem', marginRight: '8px', color: '#86868B', marginTop: '3px',}}/>
                                    <ul>{item}</ul>
                                </a>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`fixed top-0 left-0 w-screen h-screen ${isHoverSearch ? 'backdrop-blur' : 'backdrop-blur-none'} transition-all duration-300 ${!animationDelayBuffer['search'] ? 'z-0' : 'z-[5]'} md:bg-transparent`}></div>
            </>

            {/* when shopping bag icon is clicked on */}
            <>
                <div className={`fixed ${isHoverShoppingBag ? 'z-30 opacity-100' : 'opacity-0 z-30'} ${!animationDelayBuffer['shoppingbag'] && '!z-0'} transition-opacity duration-300 top-0 left-0 w-screen md:mt-[44px] mt-4 z-30 bg-white`} id='shoppingBagPopMenu'>
                    {!isLargeScreen &&
                        <div className='flex justify-end'>
                            <CloseIcon onClick={() => closeShopping()} className='text-[#86868B]'/>
                        </div>
                    }
                    <div className={`select-none ${props.dark ? 'header_color' : 'white_header_color text-[#313131]'} text-center text-white pb-10 px-12`}>
                        <div className='text-left w-[980px] mx-auto md:my-10  '>
                            <div className='md:text-2xl text-3xl mb-5 text-black'>Your Bag is empty.</div>
                            <div className='md:text-xs text-lg mb-8 dark_gray'>
                                <a className='underline text-[#2997FF]' href="/signin">Sign in</a>&nbsp;to see if you have any saved items</div>
                            <div className='flex flex-col md:text-xs text-xl'>
                                <div className='mb-3 dark_gray'>My Profile</div>
                                {myProfile.map((text, index) => {
                                    return <IconButton icon={myProfileIcons[index]} text={text} dark={props.dark} isLargeScreen={isLargeScreen}/>
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-screen h-screen ${isHoverShoppingBag ? 'backdrop-blur' : 'backdrop-blur-none'} transition-all duration-300 ${!animationDelayBuffer['shoppingbag'] ? 'z-0' : 'z-[5]'} md:bg-transparent`}></div>
            </>


        { isHoverSmallBurger && // when small hamburger icon is hovered on
            <>
                <div className='fixed top-0 left-0 w-screen h-screen mt-4 z-50' >
                    {!isLargeScreen &&
                        <div className='flex justify-end'>
                            <CloseIcon onClick={() => closeSmallBurger()} className='text-[#86868B]'/>
                        </div>
                    }

                    <div className='flex flex-col mx-8 text-2xl font-semibold'>
                        {header_items.map((item, i) => {
                            return (
                                <a id={header_items_to_href[i]} className={`${props.dark ? 'glow' : 'glow_dark'} h-full`} href={header_items_to_href[i]}>
                                <span id='child' className='px-2 leading-[44px] align-middle'>{item}</span>
                                </a>
                            )
                        })} 
                    </div>
                
                </div>
                <div className='fixed top-0 left-0 w-screen h-screen md:backdrop-blur md:z-[5] z-20 md:bg-transparent bg-white'></div>
            </>
        }

        <div id='header' className={`z-30 ${props.fixed && 'fixed'} top-0 left-0 w-screen h-[44px] 
        ${props.dark  ? 'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' : 
        (props.light ? 'bg-[rgba(245,_245,_247,_0.8)] text-[#313131]' : 
        'bg-[[rgba(250,_250,_252,_0.8)]] text-[#313131]')} backdrop-blur`}>

            {isLargeScreen 
            ?
                <header className='flex items-center justify-between max-w-[980px] w-full mx-auto text-xs px-2 h-full'>
                    <a href="/">
                        <AppleIcon className={`${props.dark ? 'glow' : 'glow_dark'}`} sx={{color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </a>
                    
                    {/* Letter Icons */}
                    {header_items.map((item, i) => {
                        return (
                            <a id={header_items_to_href[i]} className={`${props.dark ? 'glow' : 'glow_dark'} h-full
                            md:block hidden`} href={header_items_to_href[i]}>
                            <span id='child' className='px-2 leading-[44px] align-middle'>{item}</span>
                            </a>
                        )
                    })} 
                    
                    {/* Search Icon */}
                    <div onClick={clickSearch} id='search' className='h-full cursor-pointer flex items-center'>
                        <SearchIcon className={`${props.dark ? 'glow' : 'glow_dark'} leading-[44px]`} sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </div>

                    {/* Shopping Bag Icon */}
                    <div onClick={clickShoppingBag} id='shoppingBag' className='h-full cursor-pointer flex items-center'>
                        <WorkOutlineIcon className={`${props.dark ? 'glow' : 'glow_dark'}`} sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </div>
                </header>

            :
                <header className='flex items-center justify-between w-full h-full text-xs px-4'>
                    <a href="/">
                        <AppleIcon className={`${props.dark ? 'glow' : 'glow_dark'}`} sx={{color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </a>

                    <div className='grid grid-cols-3 gap-6 items-center'>
                        <div id='search'>
                            <SearchIcon onClick={clickSearch} className={`${props.dark ? 'glow' : 'glow_dark'} leading-[44px]`} sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                        </div>
                        <WorkOutlineIcon id='shoppingBag' onClick={clickShoppingBag} className={`${props.dark ? 'glow' : 'glow_dark'}`} sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                        
                        <DragHandleIcon onClick={() => clickSmallBurger()}/>
                    </div>
                </header>
            }

        </div>

        { isHoverHeader && // when header icon is hovered on
        Object.entries(isHoverHeader).map(([key, val], ind) => {
            return (
            <>
                <div data-key={key} id={'popMenu' + key} className={`${val ? 'z-30 opacity-100' : 'opacity-0 z-30'} ${!animationDelayBuffer[key] && '!z-0'} transition-opacity duration-300 fixed top-0 left-0 w-full mt-[44px] ${props.dark ? 'header_color' : 'bg-[#f5f5f7] text-[#313131]'}  text-center text-white`}>
                    <div className='text-left w-[980px] mx-auto my-10 flex'>
                        {header_popMenu[ind].map((col, col_i) => {
                            if (col_i === 0) { // first col, bigger text
                                return (
                                    <div className='mr-20 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) { // title
                                                return <div className={`${props.dark ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'}  text-xs pb-4`}>{item}</div>
                                            } else {
                                                return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'}  block leading-none font-bold text-xl pb-4`}>{item}</a>
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
                                                return <div className={`${props.dark ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'} text-xs pb-4`}>{item}</div>
                                            } else {
                                                return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'}  block text-xs pb-2`}>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className={`fixed w-screen h-screen backdrop-blur ${val ? 'backdrop-blur' : 'backdrop-blur-none'} ${!animationDelayBuffer[key] ? 'z-0' : 'z-[5]'}`}></div>


            </> 
            )
        })}

        


    </div>
  )
}

export default Header