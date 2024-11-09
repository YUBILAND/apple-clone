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

    

    useEffect(() => { // hover on header icon, loads after DOM
        header_items_to_href.map(item => {
            const headerIconElement = document.getElementById(item);
            if (headerIconElement) {
                headerIconElement.addEventListener('mouseenter', () => {
                    // Code to execute when the mouse enters the element
                    // console.log('Hovering over the element');
                    setIsHoverHeader((prev) => ({
                        ...prev,
                        [item] : true
                    }))
                });
                headerIconElement.addEventListener('mouseleave', () => {
                    // Code to execute when the mouse leaves the element
                    // console.log('No longer hovering over element');
                    setIsHoverHeader((prev) => ({
                        ...prev,
                        [item] : false
                    }))
                    
                });
            }
        })

        // Search Icon, on click then hover
        const searchIconElement = document.getElementById('search');
        if (searchIconElement) {
            searchIconElement.addEventListener('click', () => {
                setIsHoverSearch(true);

                // searchIconElement.addEventListener('mouseenter', () => {
                //     setIsHoverSearch(true);
                // });

                searchIconElement.addEventListener('mouseleave', () => {
                    setIsHoverSearch(false);
                });
            });
        }

        // Shopping Bag Icon, on click then hover
        const shoppingBagIconElement = document.getElementById('shoppingBag');
        if (shoppingBagIconElement) {
            shoppingBagIconElement.addEventListener('click', () => {
                setIsHoverShoppingBag(true);

                // shoppingBagIconElement.addEventListener('mouseenter', () => {
                //     setIsHoverSearch(true);
                // });

                shoppingBagIconElement.addEventListener('mouseleave', () => {
                    setIsHoverShoppingBag(false);
                });
            });
        }
    }, [])

    useEffect(() => { // hover on pop menu
        const popMenu = document.getElementById('popMenu');
        if (popMenu) {
            popMenu.addEventListener('mouseenter', () => {
                // Code to execute when the mouse enters the element
                // console.log('Hovering over pop');
                setIsHoverHeader((prev) => ({
                    ...prev,
                    [popMenu.getAttribute('data-key')] : true
                }))
            });
            popMenu.addEventListener('mouseleave', () => {
                // Code to execute when the mouse leaves the element
                // console.log('No longer hovering pop');
                setIsHoverHeader((prev) => ({
                    ...prev,
                    [popMenu.getAttribute('data-key')] : false
                }))
            });
        }
    }, [isHoverHeader])

    useEffect(() => { // hover on search pop menu
        const searchPopMenu = document.getElementById('searchPopMenu');
        if (searchPopMenu) {
            searchPopMenu.addEventListener('mouseenter', () => {
                setIsHoverSearch(true);
            });
            searchPopMenu.addEventListener('mouseleave', () => {
                setIsHoverSearch(false);
                clearInput(); // clear searchbar on unhover
            });
        }

        return () => { // removes event listener for search
            if (!isHoverSearch) {
                const searchIconElement = document.getElementById('search');
                searchIconElement.removeEventListener('mouseenter', () => {
                    setIsHoverSearch(true)});
                searchIconElement.removeEventListener('mouseleave', () => {
                    setIsHoverSearch(false)});
            }
        }
    }, [isHoverSearch])

    useEffect(() => { // hover on shopping bag pop menu
        const shoppingBagPopMenu = document.getElementById('shoppingBagPopMenu');
        if (shoppingBagPopMenu) {
            shoppingBagPopMenu.addEventListener('mouseenter', () => {
                setIsHoverShoppingBag(true);
            });
            shoppingBagPopMenu.addEventListener('mouseleave', () => {
                setIsHoverShoppingBag(false);
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

    function clickSearch () {
        setIsClickSearchIcon(true);
        document.getElementById("apple-search").focus();
    }

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);  // Update state with the new value
      };

    useEffect(() => {
    console.log(inputValue)
    }, [inputValue])

    const clearInput = () => {
        setInputValue('') // clear state
        document.getElementById("apple-search").focus(); // refocus on input field
    }

    function clickShoppingBag () {
        setIsClickShoppingBagIcon(true);
    }
    
  return (
    <div className='select-none'>
        <headercontainer className={`z-10 ${props.darkMode && 'fixed' } top-0 left-0 w-full h-[44px] ${props.darkMode ? 'bg-[rgba(22,_22,_23,_0.9)] text-[#d1d1d1]' : (props.light === 'store' ? 'bg-[#f5f5f7] text-[#313131]' : 'bg-[#fafafc] text-[#313131]')} backdrop-blur  flex`}>
            <header className='flex items-center justify-between w-[980px] mx-auto text-xs'>
                <a href="/">
                    <AppleIcon className={`${props.darkMode ? 'glow' : 'glow_dark'}`} sx={{color: props.darkMode ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                </a>
                
                {/* header_item_icons */}
                {header_items.map((item, i) => {
                    return (
                        <a id={header_items_to_href[i]} className={`${props.darkMode ? 'glow' : 'glow_dark'} h-full`} href={header_items_to_href[i]}>
                        <span id='child' className='px-2 leading-[44px] align-middle'>{item}</span>
                        </a>
                    )
                })} 
                
                <div id='search' className='h-full cursor-pointer flex items-center'>
                    <SearchIcon onClick={clickSearch} className={`${props.darkMode ? 'glow' : 'glow_dark'} leading-[44px]`} sx={{fontSize: '1.3rem', color: props.darkMode ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                </div>
                <div id='shoppingBag' className='h-full cursor-pointer flex items-center'>
                    <WorkOutlineIcon onClick={clickShoppingBag} className={`${props.darkMode ? 'glow' : 'glow_dark'}`} sx={{fontSize: '1.3rem', color: props.darkMode ? '#d0d0d0' : '#313131', transition: 'color 0.5s ease'}}/>
                </div>
            </header>
        </headercontainer>

        { isHoverHeader && // when header icon is hovered on
        Object.entries(isHoverHeader).map(([key, val], ind) => {
            return val && 
            <>
                <div data-key={key} id='popMenu' className={`z-10 fixed top-0 left-0 w-full mt-[44px] ${props.darkMode ? 'header_color' : 'bg-[#f5f5f7] text-[#313131]'}  text-center text-white`}>
                    <div className='text-left w-[980px] mx-auto my-10 flex'>
                        {header_popMenu[ind].map((col, col_i) => {
                            if (col_i === 0) { // first col, bigger text
                                return (
                                    <div className='mr-20 select-none'>
                                        {col.map((item, i) => {
                                            if (i === 0) { // title
                                                return <div className={`${props.darkMode ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'}  text-xs pb-4`}>{item}</div>
                                            } else {
                                                return <a href='/' className={`${props.darkMode ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'}  block leading-none font-bold text-xl pb-4`}>{item}</a>
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
                                                return <div className={`${props.darkMode ? 'text-[#d1d1d1]' : 'text-[#8B8B8F]'} text-xs pb-4`}>{item}</div>
                                            } else {
                                                return <a href='/' className={`${props.darkMode ? 'text-[#e6e6e6] glow' : 'text-[#333336] glow_dark'}  block text-xs pb-2`}>{item}</a>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className='fixed w-screen h-screen backdrop-blur z-[5]'></div>
            </> 
        })}

        { isHoverSearch && //when search icon is hovered on
        <>
            <searchhover id='searchPopMenu'>
                <div className={`select-none z-10 fixed top-0 left-0 w-full mt-[44px] ${props.darkMode ? 'header_color' : 'white_header_color text-[#313131]'} text-center text-white mb-6`}>
                    <div className='text-left w-[980px] mx-auto my-10  '>
                        <div className='flex items-center mb-8'>
                            <SearchIcon className='' sx={{fontSize: '1.8rem', color: inputValue.length ? (props.darkMode ? 'white' : 'black') : '#86868B', transition: 'color 0.5s ease', marginRight: '4px'}}/>
                            <input value={inputValue} onChange={handleChange} id='apple-search' placeholder='Search apple.com' className={`leading-none placeholder-[#86868B]
                            ${props.darkMode ? 'header_color text-white' : 'white_header_color text-[#313131]'} font-semibold w-full outline-none text-2xl`} type="text" />
                            <CancelIcon onClick={clearInput} className={`${!inputValue.length && '!hidden'} ${props.darkMode ? 'glow' : 'glow_dark'}`} sx={{color: '#86868B', transition: 'color 0.5s ease'}}/>
                        </div>
                        <div className='text-xs'>
                            <div className='dark_gray mb-2'>Quick Links</div>
                            {quickLinks.map(item => {
                                return <a className={`group ${props.darkMode ? 'text-[#e6e6e6] hover:text-white hover:bg-[#1D1D1F]' : 'text-[#333336] hover:text-black hover:bg-[#F5F5F7]'} flex items-center mb-1 py-1 rounded-md`} href="">
                                <EastIcon className={`${props.darkMode ? 'group-hover:text-white' : 'group-hover:text-black'}`} sx={{ fontSize: '0.7rem', marginRight: '8px', color: '#86868B', marginTop: '3px',}}/>
                                <ul>{item}</ul>
                            </a>
                            })}
                        </div>
                    </div>
                </div>
            </searchhover>
            <div className='fixed w-screen h-screen backdrop-blur z-[5]'></div>
        </>
        }

        { isHoverShoppingBag && // when shopping bag icon is hovered on
        <>
            <shoppingbaghover id='shoppingBagPopMenu'>
                <div className={`select-none z-10 fixed top-0 left-0 w-full mt-[44px] ${props.darkMode ? 'header_color' : 'white_header_color text-[#313131]'} text-center text-white pb-10`}>
                    <div className='text-left w-[980px] mx-auto my-10  '>
                        <div className='text-2xl mb-5'>Your Bag is empty.</div>
                        <div className='text-xs mb-8 dark_gray'>
                            <a className='underline text-[#2997FF]' href="/signin">Sign in</a>&nbsp;to see if you have any saved items</div>
                        <div className='flex flex-col text-xs'>
                            <div className='mb-3 dark_gray'>My Profile</div>
                            <a href='' className={`mb-1 flex items-center w-fit group ${props.darkMode ? 'text-[#e6e6e6]' : 'text-[#333336]'}`}>
                                <ViewInArIcon className={`${props.darkMode ? 'group-hover:text-white' : 'group-hover:text-black'} pr-3`}/>
                                <ul className={`${props.darkMode ? 'hover:text-white almost_white' : 'hover:text-black'}`}>Orders</ul>
                            </a>
                            <a href='' className={`mb-1 flex items-center w-fit group ${props.darkMode ? 'text-[#e6e6e6]' : 'text-[#333336]'}`}>
                                <BookmarkBorderIcon className={`${props.darkMode ? 'group-hover:text-white' : 'group-hover:text-black'} pr-3`}/>
                                <ul className={`${props.darkMode ? 'hover:text-white almost_white' : 'hover:text-black'}`} href="">Your Saves</ul>
                            </a>
                            <a href='' className={`mb-1 flex items-center w-fit group ${props.darkMode ? 'text-[#e6e6e6]' : 'text-[#333336]'}`}>
                                <SettingsIcon className={`${props.darkMode ? 'group-hover:text-white' : 'group-hover:text-black'} pr-3`}/>
                                <ul className={`${props.darkMode ? 'hover:text-white almost_white' : 'hover:text-black'}`} href="">Account</ul>
                            </a>
                            <a href='' className={`mb-1 flex items-center w-fit group ${props.darkMode ? 'text-[#e6e6e6]' : 'text-[#333336]'}`}>
                                <AccountCircleOutlinedIcon className={`${props.darkMode ? 'group-hover:text-white' : 'group-hover:text-black'} pr-3`}/>
                                <ul className={`${props.darkMode ? 'hover:text-white almost_white' : 'hover:text-black'}`} href="">Sign In</ul>
                            </a>
                        </div>

                    </div>
                </div>
            </shoppingbaghover>
            <div className='fixed w-screen h-screen backdrop-blur z-[5]'></div>
        </>
        }


    </div>
  )
}

export default Header