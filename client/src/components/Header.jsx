import React, { useEffect, useRef, useState } from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Header = () => {
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

    const [isClickSearchIcon, setIsClickSearchIcon] = useState(false)
    // const [isHoverSearch, setIsHoverSearch] = useState(false)

    useEffect(() => {
        header_items_to_href.map(item => {
            const headerIconElement = document.getElementById(item);
            if (headerIconElement) {
                headerIconElement.addEventListener('mouseenter', () => {
                    // Code to execute when the mouse enters the element
                    console.log('Hovering over the element');
                    setIsHoverHeader((prev) => ({
                        ...prev,
                        [item] : true
                    }))
                });
                headerIconElement.addEventListener('mouseleave', () => {
                    // Code to execute when the mouse leaves the element
                    console.log('No longer hovering over element');
                    setIsHoverHeader((prev) => ({
                        ...prev,
                        [item] : false
                    }))
                    
                });
            }
        })
    }, [])

    useEffect(() => {
        const popMenu = document.getElementById('popMenu');
        if (popMenu) {
            popMenu.addEventListener('mouseenter', () => {
                // Code to execute when the mouse enters the element
                console.log('Hovering over pop');
                setIsHoverHeader((prev) => ({
                    ...prev,
                    'store' : true
                }))
            });
            popMenu.addEventListener('mouseleave', () => {
                // Code to execute when the mouse leaves the element
                console.log('No longer hovering pop');
                setIsHoverHeader((prev) => ({
                    ...prev,
                    'store' : false
                }))
            });
        }
    }, [isHoverHeader])
        

    


  return (
    <>
        <headercontainer className='z-10 fixed top-0 left-0 w-full h-[44px] bg-[rgba(23,_23,_24,_0.9)] backdrop-blur text-[#d1d1d1] flex'>
            <header className='flex items-center justify-between w-[980px] mx-auto text-xs'>
                <a href="/">
                    <AppleIcon className='glow' sx={{color: '#d0d0d0', transition: 'color 0.5s ease'}}/>
                </a>

                {/* header_item_icons */}
                {header_items.map((item, i) => {
                    return (
                        <a id={header_items_to_href[i]} className='glow h-full' href={header_items_to_href[i]}>
                        <span id='child' className='px-2 leading-[44px] align-middle'>{item}</span>
                        </a>
                    )
                })} 

                <a href="/">
                    <SearchIcon className='glow' sx={{fontSize: '1.3rem', color: '#d0d0d0', transition: 'color 0.5s ease'}}/>
                </a>
                <a href="/">
                    <WorkOutlineIcon className='glow' sx={{fontSize: '1.3rem', color: '#d0d0d0', transition: 'color 0.5s ease'}}/>
                </a>
            </header>
        </headercontainer>
        {isHoverHeader && 
        Object.entries(isHoverHeader).map(([key, val], ind) => {
            return val &&  
                <div id='popMenu' className='z-10 fixed top-0 left-0 w-full mt-[44px] header_color text-center text-white'>
                    <div className='text-left w-[980px] mx-auto my-10 flex'>
                        {header_popMenu[ind].map((col, col_i) => {
                            if (col_i === 0) {
                                return (
                                    <div className='mr-20'>
                                        {col.map((item, i) => {
                                            if (i === 0) {
                                                return <div className='text-[#d1d1d1] text-xs pb-4'>{item}</div>
                                            } else {
                                                return <ul className='leading-none font-bold text-xl pb-4'>{item}</ul>
                                            }
                                        })}
                                    </div>
                                )
                            } 
                            else {
                                return (
                                    <div className='mr-12'>
                                        {col.map((item, i) => {
                                            if (i === 0) {
                                                return <div className='text-[#d1d1d1] text-xs pb-4'>{item}</div>
                                            } else {
                                                return <ul className='text-xs pb-2'>{item}</ul>
                                            }
                                        })}
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                
            
           
                
        })}

        {/* <searchhover>
            <div className='z-10 fixed top-0 left-0 w-full mt-[44px] header_color text-center text-white'>
                <div className='text-left w-[980px] mx-auto my-10 flex'>

                </div>
            </div>
        </searchhover> */}

    </>
  )
}

export default Header