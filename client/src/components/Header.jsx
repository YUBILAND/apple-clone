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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
                ['Shop'],
                [
                    'Shop the latest',
                    'Mac',
                    'iPad',
                    'iPhone',
                    'Apple Watch',
                    'Apple Vision Pro',
                    'Accessories',
                ]
            ],
            [
                ['Quick Links'],
                [
                    'Find a store',
                    'Order status',
                    'Apple Trade In',
                    'Financing',
                ]
            ],
            [
                ['Shop Special Stores'],
                [
                    'Certified Refurbished',
                    'Education',
                    'Business',
                    'Veterans and Military',
                    'Government',
                ]
            ],
        ],
        [ // Mac
            [
                ['Explore Mac'],
                [
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
                    'Compare Mac',
                    'Switch from PC to Mac'
                ]
                
            ],
            [
                ['Shop Mac'],
                [
                    'Shop Mac',
                    'Help Me Choose',
                    'Mac Accessories',
                    'Apple Trade In',
                    'Financing',
                ],

            ],
            [
                ['More from mac'],
                [
                    'Mac Support',
                    'AppleCare+ for Mac',
                    'macOS Sequoia',
                    'Apple Intelligence',
                    'Apps by Apple',
                    'Continuity',
                    'iCloud+',
                    'Mac for Business',
                    'Education',
                ]
            ],
        ],
        [ // iPad
            [
                ['Explore iPad'],
                [
                    'Explore All iPad',
                    'iPad Pro',
                    'iPad Air',
                    'iPad',
                    'iPad mini',
                    'Apple Pencil',
                    'Keyboards',
                ],
                [    
                    'Compare iPad',
                    'Why iPad',
                ]
            ],
            [
                ['Shop iPad'],
                [
                    'Shop iPad',
                    'iPad Accessories',
                    'Apple Trade In',
                    'Financing',
                ]
            ],
            [
                ['More from iPad'],
                [
                    'iPad Support',
                    'AppleCare+ for iPad',
                    'iPadOS 18',
                    'Apple Intelligence',
                    'Apps by Apple',
                    'iCloud+',
                    'Education',
                ]
            ],
        ],
        [ // iPhone
            [
                ['Explore iPhone'],
                [
                    'Explore All iPhone',
                    'iPhone 16 Pro',
                    'iPhone 16',
                    'iPhone 15',
                    'iPhone 14',
                    'iPhone SE',
                ],   
                [
                    'Compare iPhone',
                    'Switch from Android',
                ]
            ],
            [
                ['Shop iPhone'],
                [
                    'Shop iPhone',
                    'iPhone Accessories',
                    'Apple Trade In',
                    'Carrier Deals at Apple',
                    'Financing',
                ]
            ],
            [
                ['More from iPhone'],
                [
                    'iPhone Support ',
                    'AppleCare+ for iPhone',
                    'iOS 18',
                    'Apple Intelligence',
                    'Apps by Apple',
                    'iPhone Privacy',
                    'iCloud+',
                    'Wallet, Pay, Card',
                    'Siri',
                ]
            ],
        ],
        [ // Watch
            [
                ['Explore Watch'],
                [
                    'Explore All Apple Watch',
                    'Apple Watch Series 10',
                    'Apple Watch Ultra 2',
                    'Apple Watch SE',
                    'Apple Watch Nike',
                    'Apple Watch Hermès',
                ],    
                [    
                    'Compare Watch',
                    'Why Apple Watch',
                ]
            ],
            [
                ['Shop Watch'],
                [
                    'Shop Apple Watch',
                    'Apple Watch Studio',
                    'Apple Watch Bands',
                    'Apple Watch Accessories',
                    'Apple Trade In',
                    'Financing',
                ]    
            ],
            [
                ['More from Watch'],
                [
                    'Apple Watch Support',
                    'AppleCare+ watchOS 11',
                    'Apple Watch For Your Kids',
                    'Apps by Apple',
                    'Apple Fitness+',
                ]
            ],
        ],
        [ // Vision
            [
                ['Explore Vision'],
                [
                    'Explore Apple Vision Pro',
                ],
                [    
                    'Guided Tour',
                    'Tech Specs',
                ]
            ],
            [
                ['Shop Vision'],
                [
                    'Shop Apple Vision Pro',
                    'Apple Vision Pro Accessories',
                    'Book a Demo',
                    'Financing',
                ]
            ],
            [
                ['More from Vision'],
                [
                    'Apple Vision Pro Support',
                    'AppleCare+ ',
                    'visionOS',
                ]
            ],
        ],
        [ // AirPods
            [
                ['Explore AirPods'],
                [
                    'Explore All AirPods',
                    'AirPods 4',
                    'AirPods Pro 2',
                    'AirPods Max',
                ],
                [    
                    'Compare AirPods',
                ]
            ],
            [
                ['Shop AirPods'],
                [
                    'Shop AirPods',
                    'AirPods Accessories',
                ]
            ],
            [
                ['More from AirPods'],
                [
                    'AirPods Support',
                    'AppleCare+ for Headphones',
                    'Hearing Health',
                    'Apple Music',
                ]
            ],
        ],
        [ // TV & Home
            [
                ['Explore TV & Home'],
                [
                    'Apple TV 4K',
                    'HomePod',
                    'HomePod mini',
                ]
            ],
            [
                ['Shop TV & Home'],
                [
                    'Shop Apple TV 4K',
                    'Shop HomePod',
                    'Shop HomePod mini',
                    'Shop Siri Remote',
                    'TV & Home Accessories',
                ]
            ],
            [
                ['More from TV & Home'],
                [
                    'Apple TV Support',
                    'HomePod Support',
                    'AppleCare+',
                    'Apple TV app',
                    'Apple TV+',
                    'Home app',
                    'Apple Music',
                    'Siri ',
                    'AirPlay',
                ]
            ],
        ],
        [ // Entertainment
            [
                ['Explore Entertainment'],
                [
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
                ]
            ],
            [
                ['Support'],
                [
                    'Apple TV+ Support',
                    'Apple Music Support',
                ]
            ],
        ],
        [ // Accessories
            [
                ['Shop Accessories'],
                [
                    'Shop All Accessories',
                    'Mac',
                    'iPad',
                    'iPhone',
                    'Apple Watch',
                    'Apple Vision Pro',
                    'AirPods',
                    'TV & Home',
                ]
            ],
            [
                ['Explore Accessories'],
                [
                    'Made by Apple',
                    'Beats by Dr. Dre',
                    'AirTag',
                ]
            ],
        ],
        [ // Support
            [
                ['Explore Support'],
                [
                    'iPhone',
                    'Mac',
                    'iPad',
                    'Watch',
                    'Apple Vision Pro',
                    'AirPods',
                    'Music',
                    'TV',
                ],
                [    
                    'Explore Support',
                ]
            ],
            [
                ['Get Help'],
                [
                    'Community',
                    'Check Coverage',
                    'Repair',
                    'Contact Us',
                ]
            ],
            [
                ['Helpful Topics'],
                [
                    'Get AppleCare+',
                    'Apple Account and Password',
                    'Billing & Subscriptions',
                    'Accessibility',
                ]

            ],
        ],
    ]

    const [isHoverHeader, setIsHoverHeader] = useState(
        header_items_to_href.reduce((acc, str) => {
            acc[str] = false;
            return acc;
        }, {}) // turn array to hashmap where key is false
    );

    const quickLinks = [
        'Find a Store',
        'Apple Vision Pro',
        'AirPods',
        'AirTag',
        'Apple Trade In',
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

    const [isHoverSearch, setIsHoverSearch] = useState(false);
    const [isHoverShoppingBag, setIsHoverShoppingBag] = useState(false);
    const [isHoverSmallBurger, setIsHoverSmallBurger] = useState(false);

    const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 834);

    const [animationDelayBuffer, setAnimationDelayBuffer] = useState({
        'store': false, 'mac': false, 'ipad': false, 'iphone': false, 'watch': false, 'vision': false, 'airpods': false, 'tv-home': false, 'entertainment': false, 'accessories': false, 'support': false, 'search' : false, 'shoppingbag' : false, 'hamburger': false
    }) // when you hover over search pop menu and trigger mouse leave, even if you reenter within animation period it won't trigger event listener

    const animationDelayBufferRef = useRef(false); //ref to check if animationDelayBuffer is still true when event listener is triggered, delay needs to finish before event listener can be triggered again

    const hoverHeaderWhiteSpaceRef = useRef(false); // used for making pop menu remain when hovering over header but not icon

    const hoveringRef = useRef({
        'store': false, 'mac': false, 'ipad': false, 'iphone': false, 'watch': false, 'vision': false, 'airpods': false, 'tv-home': false, 'entertainment': false, 'accessories': false, 'support': false, 'search' : false, 'shoppingbag' : false
    }); // prevent setTimeout animationDelayBuffer from triggering when rehovering over icon within the 300ms timeframe, prevents it from setting to false while you are hovered which would make pop menu disappear while hovering

    const stateReset = (stateDict) => { // set all to false
        var newStateDict = {};
        for (let key in stateDict) {
            newStateDict[key] = false;
        }
        return newStateDict;
    }

    const iconRefs = useRef({}); // ref, replace getElementbyId

    const [displayChange, setDisplayChange] = useState(false); // changes when display size changes from desktop to mobile, vice versa

    useEffect(() => { // Header Icons Event Listener

        header_items_to_href.map(item => { // for each icon add event listener
            const headerIconElement = document.getElementById(item);
            const headerElement = document.getElementById('header');

            if (headerIconElement) { // When DOM loads

                const handleMouseEnter = () => { // for that event listener if mouse hovered over
                    // When mouse hovers over icon

                    removePopMenu('small')
                    hoveringRef.current[item] = true;
                    setIsHoverHeader(
                        { ...stateReset(isHoverHeader), [item]: true }
                    );

                    isLargeScreen &&
                    setAnimationDelayBuffer(
                        { ...stateReset(animationDelayBuffer), [item]: true }
                    );
                };

                const handleMobileClick = () => { // MOBILE ONLY. Mouseenter worked for first clicked but after scroll the mouse enter doesn't trigger so i had to use click event instead, same function.
                    if (!isLargeScreen) {

                        // hoveringRef.current = stateReset(hoveringRef.current)
                        // hoveringRef.current[item] = true;

                        hoveringRef.current = {...stateReset(hoveringRef.current), [item] : true }
                        
                        setIsHoverHeader(
                            { ...stateReset(isHoverHeader), [item]: true }
                        );
                        isLargeScreen &&
                        setAnimationDelayBuffer(
                            { ...stateReset(animationDelayBuffer), [item]: true }
                        );
                    }

                };

                const handleMouseLeave = () => {
                    // When mouse leaves icon
                    if (!hoverHeaderWhiteSpaceRef.current && isLargeScreen) { // if mouse hovers over another icon then remove pop menu, else don't since you rehover over same icon
                        //going in here means you hovered over another icon
                        hoveringRef.current[item] = false;
                        setIsHoverHeader((prev) => ({
                            ...prev,
                            [item] : false
                        }))
                        setAnimationDelayBuffer((prev) => ({
                            ...prev,
                            [item] : false
                        }));
                    }
                };

                const headerMouseOver = () => {
                    hoverHeaderWhiteSpaceRef.current = true;
                };

                const headerMouseLeave = () => {
                    hoverHeaderWhiteSpaceRef.current = false;
                };

                const handleWheel = () => { //any scroll movement should remove pop menu
                    if (isLargeScreen) removePopMenu();
                };

                headerIconElement.addEventListener('mouseenter', handleMouseEnter);
                headerIconElement.addEventListener('click', handleMobileClick);
                headerIconElement.addEventListener('mouseleave', handleMouseLeave);
                headerElement.addEventListener('mouseover', headerMouseOver);
                headerElement.addEventListener('mouseleave', headerMouseLeave);
                document.body.addEventListener('wheel', handleWheel);

                return () => {
                    headerIconElement.removeEventListener('mouseenter', handleMouseEnter);
                    headerIconElement.removeEventListener('click', handleMobileClick);
                    headerIconElement.removeEventListener('mouseleave', handleMouseLeave);
                    headerElement.removeEventListener('mouseover', headerMouseOver);
                    headerElement.removeEventListener('mouseleave', headerMouseLeave);
                    document.body.removeEventListener('wheel', handleWheel);
                };
            }
        })

    }, [displayChange]) // add event listener on mount and on display change

    useEffect(() => { // Search Icon Event Listener
        const searchIconElement = iconRefs.current['search'];
        // Search Icon, on click
        if (searchIconElement) {
            const searchIconClick= () => {
                setAnimationDelayBuffer(
                    { ...stateReset(animationDelayBuffer), 'search' : true }
                );
            };
            searchIconElement.addEventListener('click', searchIconClick);
            return () => {
                searchIconElement.removeEventListener('click', searchIconClick);
            };
        }
    }, [])

    useEffect(() => { // Shopping Bag Icon Event Listener
        const shoppingBagIconElement = iconRefs.current['shoppingBag'];
        // Shopping Bag Icon, on click
        if (shoppingBagIconElement) {
            const shoppingBagIconClick = () => {
                setAnimationDelayBuffer(
                    { ...stateReset(animationDelayBuffer), 'shoppingbag': true }
                );
            };
            shoppingBagIconElement.addEventListener('click', shoppingBagIconClick);
            return () => {
                shoppingBagIconElement.removeEventListener('click', shoppingBagIconClick);
            };
        }
    }, [])

    useEffect(() => { // Hamburger Icon Event Listener
        const hamburgerIconElement = iconRefs.current['hamburger'];
        // Hamburger Icon, on click
        if (hamburgerIconElement) {
            const hamburgerIconClick = () => {
                // setHoverHamburger(true)
                setAnimationDelayBuffer(
                    { ...stateReset(animationDelayBuffer), 'hamburger': true }
                );
            };
            hamburgerIconElement.addEventListener('click', hamburgerIconClick);
            return () => {
                hamburgerIconElement.removeEventListener('click', hamburgerIconClick);
            };
        }
    }, [])
    
    useEffect(() => { // hover on header pop menu 
        if(isHoverHeader) {
            const item = Object.entries(isHoverHeader).find(([key, val]) => val)?.[0]
            const popMenu = document.getElementById('popMenu' + item);
            if (popMenu) {
                const timeoutIds = [];
                const popMenuMouseEnter = () => {
                    if (isLargeScreen) {
                        // Code to execute when the mouse hovers over icon
                        setIsHoverSearch(false);
                        setIsHoverShoppingBag(false);
                        // prevent rehover pop menu, closing animation remainss
                        if (!animationDelayBufferRef.current ) {
                            setIsHoverHeader(
                                { ...stateReset(isHoverHeader), [popMenu.getAttribute('data-key')]: true }
                            );
                            setAnimationDelayBuffer(
                                { ...stateReset(animationDelayBuffer), [item]: true }
                            );
                            animationDelayBufferRef.current = true
                        }
                    };

                };
                const popMenuMouseLeave = () => {
                    if (isLargeScreen) {
                        // Code to execute when the mouse leaves the element
                        // console.log('No longer hovering pop');
                        const timeoutId = setTimeout(() => { // this waits for ref to change (headerElement mouseenter)
                            if (!hoverHeaderWhiteSpaceRef.current) { // if hovering over another icon then set false

                                // setIsHoverHeader(stateReset(isHoverHeader));

                                setIsHoverHeader((prev) => ({
                                    ...prev,
                                    [popMenu.getAttribute('data-key')] : false
                                }))
                                
                                if(isHoverHeader) {
                                    const timeoutId2 = setTimeout(() => {
                                        // nothing is being hovered on
                                        if (!Object.entries(hoveringRef.current).find(([key, val]) => val)) {
                                            setAnimationDelayBuffer(stateReset(animationDelayBuffer))
                                            animationDelayBufferRef.current = false;
                                        }
                                    }, 300)
                                    timeoutIds.push(timeoutId2); // Store the second timeout ID
                                }
                            }
                        }, 0)
                        timeoutIds.push(timeoutId); // Store the first timeout ID
                    }

                };

                popMenu.addEventListener('mouseenter', popMenuMouseEnter);
                popMenu.addEventListener('mouseleave', popMenuMouseLeave);

                return () => {
                    timeoutIds.forEach(clearTimeout);

                    popMenu.removeEventListener('mouseenter', popMenuMouseEnter);
                    popMenu.removeEventListener('mouseleave', popMenuMouseLeave);
                };
            }
        }
    }, [isHoverHeader])

    useEffect(() => { // hover on search pop menu
        const searchPopMenu = iconRefs.current['searchPopMenu'];
        if (searchPopMenu) {
            const timeoutIds = [];
            const searchPopMenuMouseEnter = () => {
                if (!animationDelayBufferRef.current) {
                    setIsHoverSearch(true);
                    setIsHoverHeader(stateReset(isHoverHeader)); // fixes 'support' pop menu from displaying when flicking from search icon to support icon
                    setAnimationDelayBuffer(
                        { ...stateReset(animationDelayBuffer), 'search': true }
                    );
                    animationDelayBufferRef.current = true
                }

            };
            const searchPopMenuMouseLeave = () => {
                const timeoutId = setTimeout(() => { // this waits for ref to change (headerElement mouseenter)
                   
                    if (!hoverHeaderWhiteSpaceRef.current && isLargeScreen) { // if hovering over icon then set false

                        closeSearch();
                        // removePopMenu();
                        const timeoutId2 = setTimeout(() => {
                            setAnimationDelayBuffer(stateReset(animationDelayBuffer))
                            animationDelayBufferRef.current = false
                        }, 300)
                        timeoutIds.push(timeoutId2); // Store the second timeout ID
                    }
                },0)
                timeoutIds.push(timeoutId); // Store the first timeout ID
            };

            searchPopMenu.addEventListener('mouseenter', searchPopMenuMouseEnter);
            searchPopMenu.addEventListener('mouseleave', searchPopMenuMouseLeave);

            return () => {
                timeoutIds.forEach(clearTimeout);

                searchPopMenu.removeEventListener('mouseenter', searchPopMenuMouseEnter);
                searchPopMenu.removeEventListener('mouseleave', searchPopMenuMouseLeave);
            };
        }
    }, [isHoverSearch])

    useEffect(() => { // hover on shopping bag pop menu
        const shoppingBagPopMenu = iconRefs.current['shoppingBagPopMenu'];
        if (shoppingBagPopMenu) {
            const timeoutIds = [];
            const shoppingBagPopMenuMouseEnter = () => {
                if (!animationDelayBufferRef.current) {
                    setIsHoverShoppingBag(true);
                    setIsHoverHeader(stateReset(isHoverHeader)); // fixes 'support' pop menu from displaying when flicking from search icon to support icon
                    setAnimationDelayBuffer(
                        { ...stateReset(animationDelayBuffer), 'shoppingbag' : true }
                    );
                    animationDelayBufferRef.current = true
                }
            };
            const shoppingBagPopMenuMouseLeave = () => {
                const timeoutId = setTimeout(() => { // this waits for ref to change (headerElement mouseenter)
                    if (!hoverHeaderWhiteSpaceRef.current && isLargeScreen) { // if hovering over icon then set false
                        closeShopping();
                        const timeoutId2 = setTimeout(() => {
                            setAnimationDelayBuffer(stateReset(animationDelayBuffer));
                            animationDelayBufferRef.current = false;
                        }, 300)
                        timeoutIds.push(timeoutId2); // Store the second timeout ID
                    }
                }, 0)
                timeoutIds.push(timeoutId); // Store the first timeout ID
            };

            shoppingBagPopMenu.addEventListener('mouseenter', shoppingBagPopMenuMouseEnter);
            shoppingBagPopMenu.addEventListener('mouseleave', shoppingBagPopMenuMouseLeave);

            return () => {
                timeoutIds.forEach(clearTimeout);

                shoppingBagPopMenu.removeEventListener('mouseenter', shoppingBagPopMenuMouseEnter);
                shoppingBagPopMenu.removeEventListener('mouseleave', shoppingBagPopMenuMouseLeave);
            };

        }

    }, [isHoverShoppingBag])

    function clickSearch () {
        setIsHoverSearch(true);
        setIsHoverShoppingBag(false);

        //focus on search bar when icon is clicked
       setTimeout(() => {
            document.getElementById("apple-search").focus();
       }, 300)

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
        setIsHoverShoppingBag(true);
        setIsHoverSearch(false);

        if (!isLargeScreen) {
            document.body.style.overflow = 'hidden'
        }
    }

    const clickSmallBurger = () => {
        setIsHoverSearch(false);
        setIsHoverShoppingBag(false);

        setIsHoverSmallBurger(true);
        if (!isLargeScreen) {
            document.body.style.overflow = 'hidden'
        }
    }

    const resizedRef = useRef(false);
    

    useEffect(() => {
        if (resizedRef.current != isLargeScreen) {
            resizedRef.current = isLargeScreen;
            setDisplayChange(prev => !prev);
            removePopMenu();
        }
    }, [isLargeScreen])

    useEffect(() => { 
        const updateMedia = () => {
            setLargeScreen(window.innerWidth >= 834);
        };
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    const closeSearch = () => {
        setIsHoverSearch(false);
        if (isLargeScreen) clearInput(); // clear searchbar on unhover
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

    // useEffect(() => {
    //     console.log(isHoverHeader)
    // }, [isHoverHeader])
    
    const removePopMenu = (iconHoveredOver) => {
        if (iconHoveredOver == 'small') {
            setIsHoverSearch(false);
            setIsHoverShoppingBag(false);
        }

        if (iconHoveredOver == null) {
            setIsHoverHeader(stateReset(isHoverHeader))
            setIsHoverSearch(false);
            setIsHoverShoppingBag(false);
            // setIsHoverSmallBurger(false);
            animationDelayBufferRef.current = true
            hoveringRef.current = stateReset(hoveringRef.current);
            setTimeout(() => { // prevent interrupt of closing animation
                setAnimationDelayBuffer(stateReset(animationDelayBuffer))
                animationDelayBufferRef.current = false;
            }, 300)
        }
       
        else if (iconHoveredOver === 'search' ? !isHoverSearch : !isHoverShoppingBag ) { // if not rehovering over same icon when going from popmenu to icon. ex: if on search pop menu and hover over search icon, don't remove pop menu
            hoveringRef.current = stateReset(hoveringRef.current);
            iconHoveredOver === 'search' ? 
            (() => { //if you hovered over search 
                setIsHoverShoppingBag(false);
            })() : 
            (() => { //if you hovered over shoppingbag 
                setIsHoverSearch(false);
            })()
            setIsHoverHeader(stateReset(isHoverHeader))
            setAnimationDelayBuffer(stateReset(animationDelayBuffer))
            animationDelayBufferRef.current = false;
        }
    }

  return (
    <div className='select-none'>
        {/* putting pop menu before header because otherwise fixed element will show on top unless i put negative z-index */}

            {/* search icon pop menu */}
            <>
                <div
                className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.51,.14,1,.99)] left-0 h-full w-screen 
                    ${!isLargeScreen && '!z-50 top-0 '}
                    ${props.fixed ? 
                        'fixed' : 'absolute'} 
                    ${isHoverSearch ? 
                        'md-apl:max-h-[500px] max-h-[1000px] ' 
                        : 
                        'max-h-0 pt-0 '} 
                    ${!animationDelayBuffer['search'] ? 'z-30' : 'md-apl:z-20 z-50'} 
                    ${props.fixed ? 
                        'top-0' : 'md-apl:top-[44px] top-0'} 
                    ${props.dark ?
                        'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' 
                        : 
                        `text-[#313131]
                        ${props.white ? 
                            'bg-[rgb(250,_250,_252)]' 
                        : 
                            'bg-[#FAFAFC]' 
                        }`
                    }
                `} 
                ref={(el) => (iconRefs.current['searchPopMenu'] = el)} >
                    <div className='md-apl:pt-[44px] p-2'>
                        {!isLargeScreen &&
                            <div className='flex justify-end mb-2'>
                                <CloseIcon 
                                // actually problem had to do with focused element mid transition affecting layout
                                onClick={() => closeSearch()} className='text-[#86868B]'/>
                            </div>
                        }
                        <div className={`select-none  text-center text-white mb-6  `}>
                            <div className='text-left max-w-[980px] w-full mx-auto md-apl:my-10 px-12'>
                                <div className='flex items-center mb-8'>
                                    <SearchIcon 
                                    className='' 
                                    sx={{
                                        fontSize: '1.8rem', 
                                        color: inputValue.length ? 
                                            (props.dark ? 'white' : 'black'
                                                ) 
                                            : 
                                            '#86868B', 
                                            transition: 'color 0.5s ease', 
                                            marginRight: '4px'
                                        }}
                                    />
                                    <input 
                                    value={inputValue} 
                                    onChange={handleChange} id='apple-search' 
                                    placeholder={`${
                                        isLargeScreen ? 
                                            'Search apple.com' 
                                            : 
                                            'Search'
                                        }
                                    `} 
                                    className={`leading-none placeholder-[#86868B] font-semibold w-full outline-none md-apl:text-2xl text-3xl
                                    ${props.dark ?
                                        'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' 
                                        : 
                                        `text-[#313131]
                                        ${props.white ? 
                                            'bg-[rgba(250,_250,_252,_1)]' 
                                        : 
                                            'bg-[rgba(245,_245,_247,_1)]' 
                                        }`
                                    }
                                    `} 
                                    type="text" />
                                    <CancelIcon 
                                    onClick={clearInput} 
                                    className={`
                                        ${!inputValue.length && '!hidden'} 
                                        ${props.dark ? 
                                            'glow' 
                                            : 
                                            'glow_dark'}
                                    `} 
                                    sx={{
                                        color: '#86868B', 
                                        transition: 'color 0.5s ease'
                                    }}/>
                                </div>
                                <div className='md-apl:text-xs text-xl'>
                                    <div className='dark_gray mb-2'>Quick Links</div>
                                    {quickLinks.map(item => {
                                        return <a 
                                        className={`group flex items-center mb-1 py-1 rounded-md
                                        ${props.dark ? 
                                            'text-[#e6e6e6] hover:text-white hover:bg-[#1D1D1F]' 
                                            : 
                                            'text-[#333336] hover:text-black hover:bg-[#F5F5F7]'
                                            }
                                        `} 
                                        href="">
                                        <EastIcon 
                                        className={`
                                            ${props.dark ? 
                                                'group-hover:text-white' 
                                                : 
                                                'group-hover:text-black'
                                            }
                                        `} 
                                        sx={{ 
                                            fontSize: '0.7rem', 
                                            marginRight: '8px', 
                                            color: '#86868B', 
                                            marginTop: '3px',
                                        }}/>
                                        <ul>{item}</ul>
                                    </a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div 
                onClick={() => removePopMenu()}
                className={`fixed top-0 left-0 w-screen h-screen transition-all duration-300 md-apl:bg-transparent
                ${isHoverSearch ? 
                'backdrop-blur' : 'backdrop-blur-none'
                } 
                ${!animationDelayBuffer['search'] ? 
                'z-[-5]' : 'z-[5]'} 
                `}/>
            </>
            {/* shopping bag icon pop menu */}
            <>
                <div 
                className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.51,.14,1,.99)] left-0 h-full w-screen
                    ${!isLargeScreen && '!z-50 top-0 '}
                    ${props.fixed ? 
                        'fixed' 
                        : 
                        'absolute'} 
                    ${isHoverShoppingBag ? 
                        'md-apl:max-h-[500px] max-h-[1000px] ' 
                        : 
                        'max-h-0 pt-0 '} 
                    ${!animationDelayBuffer['shoppingbag'] ? '!z-30' : 'md-apl:z-20 z-50'} 
                    ${props.fixed ? 
                        'top-0' 
                        : 
                        'md-apl:top-[44px] top-0'} 
                        ${props.dark ?
                            'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' 
                            : 
                            `text-[#313131]
                            ${props.white ? 
                                'bg-[rgba(250,_250,_252,_1)]' 
                            : 
                                'bg-[rgba(245,_245,_247,_1)]' 
                            }`
                        }
                    `} 
                    ref={(el) => (iconRefs.current['shoppingBagPopMenu'] = el)}>
                    <div className='md-apl:pt-[44px] p-2'>
                        {!isLargeScreen &&
                            <div className='flex justify-end mb-2'>
                            <CloseIcon 
                            // actually problem had to do with focused element mid transition affecting layout
                            onClick={() => closeShopping()} className='text-[#86868B]'/>
                        </div>
                        }
                        <div className={`select-none text-center text-white 
                            ${props.dark && 'header_color'} 
                            `}>
                            <div className='text-left w-[980px] mx-auto md-apl:py-10 pb-10 px-12 '>
                                <div className='md-apl:text-2xl text-3xl mb-5 text-black'>Your Bag is empty.</div>
                                <div className='md-apl:text-xs text-lg mb-8 dark_gray'>
                                    <a className='underline text-[#2997FF]' href="/signin">Sign in</a>&nbsp;to see if you have any saved items</div>
                                <div className='flex flex-col md-apl:text-xs text-xl'>
                                    <div className='mb-3 dark_gray'>My Profile</div>
                                    {myProfile.map((text, index) => {
                                        return <IconButton 
                                        icon={myProfileIcons[index]} 
                                        text={text} 
                                        dark={props.dark} 
                                        isLargeScreen={isLargeScreen}/>
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    onClick={() => removePopMenu()}
                    className={`fixed top-0 left-0 w-screen h-screen transition-all duration-300 md-apl:bg-transparent
                    ${isHoverShoppingBag ? 
                    'backdrop-blur' : 'backdrop-blur-none'
                }  
                    ${!animationDelayBuffer['shoppingbag'] ? 
                    'z-[-5]' : 'z-[5]'} 
                    `}>
                        
                </div>
            </>

        {/* hamburger icon pop menu */}
            <>
                <div 
                className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(.51,.14,1,.99)] left-0 h-full md-apl:hidden z-50 
                    ${!isLargeScreen && 'w-screen top-0 '}
                    ${props.fixed ? 'fixed' : 'absolute'} 
                    ${isHoverSmallBurger ? 
                        'md-apl:max-h-[500px] max-h-[1000px] md-apl:pt-[44px] ' 
                        : 
                        'max-h-0 pt-0'}
                     
                    ${props.fixed ? 
                        'top-0' : 'md-apl:top-[44px] top-0'} 
                        ${props.dark ?
                            'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' 
                            : 
                            `text-[#313131]
                            ${props.white ? 
                                'bg-[rgba(250,_250,_252,_1)]' 
                            : 
                                'bg-[rgba(245,_245,_247,_1)]' 
                            }`
                        }
                    `} 
                    ref={(el) => (iconRefs.current['hamburgerPopMenu'] = el)}>
                    <div className='pt-3'>
                        {!isLargeScreen &&
                            <div className={`flex px-3 pb-2 items-center
                            ${Object.entries(isHoverHeader).find(([key, val]) => val) ? 'justify-between' : 'justify-end'}`}>
                                {
                                Object.entries(isHoverHeader).find(([key, val]) => val) ?
                                <>
                                    <ArrowBackIosNewIcon 
                                    onClick={() => removePopMenu()}
                                    sx={{fontSize:'1.2rem'}}/>
                                    
                                    <CloseIcon onClick={() => {removePopMenu();
                                    closeSmallBurger()}} className='text-[#86868B] '/>
                                </>
                                :
                                <CloseIcon onClick={() => closeSmallBurger()} className='text-[#86868B] '/>
                            }
                            </div>
                        }

                        <div className='flex flex-col px-[48px] text-[28px] font-semibold '>
                            {header_items.map((item, i) => {
                                return (
                                    <a 
                                    id={!isLargeScreen &&header_items_to_href[i]} 
                                    className={`h-full ${props.dark ? 'glow' : 'glow_dark'} `} 
                                    >
                                        <span 
                                        id='child' 
                                        className='px-2 leading-[44px] align-middle'>{item}</span>
                                    </a>
                                )
                            })} 
                        </div>
                    </div>
                
                </div>
                <div className={`fixed top-0 left-0 w-screen h-screen transition-all duration-300 md-apl:bg-transparent
                    ${isHoverSmallBurger ? 
                        'backdrop-blur' 
                        : 
                        'backdrop-blur-none'}  
                    ${!animationDelayBuffer['hamburger'] ? 
                        'z-[-5]' 
                        : 
                        'z-[5]'} 
                    `}/>
            </>

    {/* Header Icons */}
    
        <div //transparent header
        id='header' 
        className={`z-30 top-0 left-0 w-screen h-[44px] transition-all duration-300 backdrop-blur
        
        ${props.fixed ? 'fixed' : 'relative'}
        ${props.dark ?
            'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' 
            : 
            `text-[#313131]
            ${props.white ? 
                (Object.entries(isHoverHeader).find(([key, val]) => val) || isHoverSearch || isHoverShoppingBag ?
                'bg-[rgba(250,_250,_252,_1)]' 
                : 
                'bg-[rgba(250,_250,_252,_0.8)]') 
            : 
            (Object.entries(isHoverHeader).find(([key, val]) => val) || isHoverSearch || isHoverShoppingBag ?
                'bg-[rgba(245,_245,_247,_1)]' 
                : 
                'bg-[rgba(245,_245,_247,_0.8)]') 
            }`
        } `}>

            {isLargeScreen 
            ? // desktop layout
                <header className='flex items-center justify-between max-w-[980px] w-full mx-auto text-xs px-2 h-full'>
                    <a href="/">
                        <AppleIcon 
                        onMouseEnter={() => removePopMenu()}
                        className={`${props.dark ? 'glow' : 'glow_dark'}`} 
                        sx={{color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </a>
                    
                    {/* Word Icons */}
                    {header_items.map((item, i) => {
                        return (
                            <div //allow for click event for tablet to bring up pop menu instead of redirecting
                            id={header_items_to_href[i]}>
                                <a 
                                className={`h-full md-apl:block hidden 
                                    ${props.dark ? 
                                        'glow' 
                                        : 
                                        'glow_dark'} 
                                    ${!hoveringRef.current[header_items_to_href[i]] && 'pointer-events-none'}`} 
                                href={header_items_to_href[i]}>
                                    <span 
                                    id='child' 
                                    className='px-2 leading-[44px] align-middle '
                                    >{item}
                                    </span>
                                </a>
                            </div>
                        )
                    })} 
                    
                {/* Search Icon */}
                    <div 
                    onClick={clickSearch} 
                    onMouseEnter={() => removePopMenu('search')}
                    ref={(el) => (iconRefs.current['search'] = el)}
                    className='h-full cursor-pointer flex items-center'>
                        <SearchIcon 
                        className={`${
                            props.dark ? 
                                'glow'
                                : 
                                'glow_dark'} leading-[44px]`} 
                        sx={{
                            fontSize: '1.3rem', 
                            color: 
                            (props.dark ? 
                                '#d0d0d0' 
                                : 
                                '#313131'), 
                            transition: 'color 0.5s ease'}}/>
                    </div>

                {/* Shopping Bag Icon */}
                    <div 
                    onClick={clickShoppingBag}
                    onMouseEnter={() => removePopMenu('shoppingbag')}
                    ref={(el) => (iconRefs.current['shoppingBag'] = el)}
                    className='h-full cursor-pointer flex items-center'>
                        <WorkOutlineIcon 
                        className={`${
                            props.dark ? 
                                'glow' 
                                : 
                                'glow_dark'}`} 
                        sx={{
                            fontSize: '1.3rem', 
                            color: 
                            (props.dark ? 
                                '#d0d0d0' 
                                : 
                                '#313131'), 
                            transition: 'color 0.5s ease'}}/>
                    </div>
                </header>
            : // mobile layout
                <header 
                className='flex items-center justify-between w-full h-full text-xs px-4'>
                    <a href="/">
                        <AppleIcon 
                        className={`${props.dark ? 'glow' : 'glow_dark'}`} 
                        sx={{color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                    </a>

                    <div className='grid grid-cols-3 gap-6 items-center'>
                        <div 
                        ref={(el) => (iconRefs.current['search'] = el)}
                        >
                            <SearchIcon 
                            onClick={clickSearch} 
                            className={`${props.dark ? 'glow' : 'glow_dark'} leading-[44px]`} 
                            sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                        </div>
                        <WorkOutlineIcon 
                        ref={(el) => (iconRefs.current['shoppingBag'] = el)} 
                        onClick={clickShoppingBag} 
                        className={`${props.dark ? 'glow' : 'glow_dark'}`} 
                        sx={{fontSize: '1.3rem', color: props.dark ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                        
                        <DragHandleIcon 
                        ref={(el) => (iconRefs.current['hamburger'] = el)}
                        onClick={() => clickSmallBurger()}/>
                    </div>
                </header>
            }
        </div>

        { isHoverHeader && // when header pop menu is hovered on
        Object.entries(isHoverHeader).map(([key, val], ind) => {
            return (
            <>
                <div 
                data-key={key} 
                id={'popMenu' + key} 
                className={`
                    overflow-hidden transition-all duration-300 ease-[cubic-bezier(.51,.14,1,.99)] left-0 w-full  text-center text-white md-apl:top-[44px] top-0
                    ${!isLargeScreen && 
                        '!top-[44px] !z-50 w-screen h-screen'}
                    ${val ? 
                        'max-h-[1000px] ' : 'max-h-0'} 
                    ${props.fixed ? 
                        'fixed ' : 'absolute'}
                    ${!animationDelayBuffer[key] ? 
                        'z-30' : 'z-50'} 
                    ${props.dark ? 
                        'bg-[rgba(22,_22,_23,_1)] text-[#d1d1d1]' 
                        : 
                        (props.white ? 
                            'bg-[rgba(250,_250,_252,_1)] text-[#313131]' 
                            : 
                            ' bg-[rgba(245,_245,_247,_1)] text-[#313131]')
                    }  
                `}>
                    <div 
                        className={`text-left px-[48px] pt-4 flex
                            ${isLargeScreen && 'w-[980px] mx-auto mt-10 mb-[84px]'} 
                            ${!isLargeScreen && 'flex-col'}`}>
                        
                        {isLargeScreen ? 

                            header_popMenu[ind].map((col, col_i) => {
                                if (col_i === 0) { // first col, bigger text
                                    return (
                                        <div 
                                        className='mr-20 select-none'>
                                            <div 
                                                className={`
                                                    text-xs pb-4
                                                    ${props.dark ? 
                                                        'text-[#d1d1d1]' 
                                                        : 
                                                        'text-[#8B8B8F]'
                                                    } `
                                                }>
                                                {/* title */}
                                                {col[0]}
                                            </div>
                                            {col[1].map((item, i) => {
                                                // content
                                                return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'} block leading-none font-bold text-2xl pb-4 w-fit`}>{item}</a>
                                            })}

                                            {col?.[2] && 
                                                // subcontent
                                                <div className='mt-2'>
                                                    {
                                                        col[2].map((smallText) => {
                                                        return (<div className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'} font-semibold text-xs pb-2`}>{smallText}</div>)
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                    )
                                } 
                                else { // if not first col
                                    return (
                                        <div className='mr-12 select-none'>
                                            {col[1].map((item, i) => {
                                                if (i === 0) {
                                                    return <div className={`${props.dark ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'} text-xs pb-4`}>{item}</div>
                                                } else {
                                                    return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'}  block font-semibold text-xs pb-2 w-fit`}>{item}</a>
                                                }
                                            })}
                                        </div>
                                    )
                                }
                            })

                            :
                            <div className=''>
                                {/* first col, bigger text */}
                                <div 
                                className='mr-20 select-none pb-10'>
                                    
                                    {header_popMenu[ind][0][1].map((item, i) => {
                                        // content
                                        return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'} w-fit block leading-none font-semibold text-[28px] mb-4`}>{item}</a>
                                    })}

                                    {header_popMenu[ind][0]?.[2] && 
                                        // subcontent
                                        <div className='mt-2'>
                                            {
                                                header_popMenu[ind][0][2].map((smallText) => {
                                                return (<div className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'} w-fit font-semibold text-[17px] pb-2`}>{smallText}</div>)
                                                })
                                            }
                                        </div>
                                    }
                                </div>

                                <div className='mr-12 select-none flex'>
                                    {header_popMenu[ind].map((cols, col_i) => {
                                        if (col_i > 0) { // for cols that are not the first col
                                            return (
                                                <div className='w-fit pr-[48px]'>
                                                    <div className={`${props.dark ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'} text-[17px] mb-4`}>{cols[0]}</div>
                                                    {
                                                        cols[1].map(val => {
                                                        return <a href='/' className={`${props.dark ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'} w-fit block font-semibold text-[17px] mb-2`}>{val}</a>
                                                        })
                                                            
                                                    }
                                                </div>
                                            )

                                             
                                        }

                                    })
                                    }
                                </div>
                            </div>
                        }

                    </div>
                    
                </div>

                {isLargeScreen && 
                    <div 
                    onClick={() => {removePopMenu()}}
                    className={`fixed w-screen h-screen ${val ? 'backdrop-blur' : 'backdrop-blur-none'} ${!animationDelayBuffer[key] ? 'z-[-5]' : 'z-[5]'} transition-all duration-300`}/>
                }



            </> 
            )
        })}
        
    </div>
  )
}

export default Header