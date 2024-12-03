import React, { useEffect, useState } from 'react'
import './Footer.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const Footer = () => {
    var footer_items_col_1= [
        'Store',
        'Mac',
        'iPad',
        'iPhone',
        'Watch',
        'Vision',
        'Airpods',
        'TV & Home',
        'AirTag',
        'Accessories',
        'Gift Cards',
        'Wallet',
        'Apple Card',
        'Apple Pay',
        'Apple Cash'
    ]
    var footer_items_col_2= [
        'Manage Your Apple Account',
        'Apple Store Account',
        'iCloud.com',
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
    var footer_items_col_3= [
        'Find a Store',
        'Genius Bar',
        'Today at Apple',
        'Group Reservations',
        'Apple Camp',
        'Apple Store App',
        'Certified Refurbished',
        'Apple Trade In',
        'Financing',
        'Carrier Deals at Apple',
        'Order Status',
        'Shopping Help',
    ]
    var footer_items_col_4= [
        'Apple and Business',
        'Shop for Business',
        'Apple and Education',
        'Shop for K-12',
        'Shop for College',
        'Apple in Healthcare',
        'Mac in Healthcare',
        'Health on Apple Watch',
        'Health Records on iPhone and iPad',
        'Shop for Government',
        'Shop for Veterans and Military',
    ]
    var footer_items_col_5= [
        'Accessibility',
        'Education',
        'Environment',
        'Inclusion and Diversity',
        'Privacy',
        'Racial Equity and Justice',
        'Supply Chain',
        'Newsroom',
        'Apple Leadership',
        'Career Opportunities',
        'Investors',
        'Ethics & Compliance',
        'Events',
        'Contact Apple',
    ]

    const footer_items = [
        [
            'Store',
            'Mac',
            'iPad',
            'iPhone',
            'Watch',
            'Vision',
            'Airpods',
            'TV & Home',
            'AirTag',
            'Accessories',
            'Gift Cards',
        ],
        [
            'Wallet',
            'Apple Card',
            'Apple Pay',
            'Apple Cash'
        ],
        [
            'Manage Your Apple Account',
            'Apple Store Account',
            'iCloud.com',
        ],
        [
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
            'Find a Store',
            'Genius Bar',
            'Today at Apple',
            'Group Reservations',
            'Apple Camp',
            'Apple Store App',
            'Certified Refurbished',
            'Apple Trade In',
            'Financing',
            'Carrier Deals at Apple',
            'Order Status',
            'Shopping Help',
        ],
        [
            'Apple and Business',
            'Shop for Business',
        ],
        [
            'Apple and Education',
            'Shop for K-12',
            'Shop for College',
        ],
        [
            'Apple in Healthcare',
            'Mac in Healthcare',
            'Health on Apple Watch',
            'Health Records on iPhone and iPad',
        ],
        [
            'Shop for Government',
            'Shop for Veterans and Military',
        ],
        [
            'Accessibility',
            'Education',
            'Environment',
            'Inclusion and Diversity',
            'Privacy',
            'Racial Equity and Justice',
            'Supply Chain',
        ],
        [
            'Newsroom',
            'Apple Leadership',
            'Career Opportunities',
            'Investors',
            'Ethics & Compliance',
            'Events',
            'Contact Apple',
        ],

    ]

    const [isLargeScreen, setLargeScreen] = useState(window.innerWidth >= 1024);
    const [isMediumScreen, setMediumScreen] = useState(window.innerWidth >= 834);
    
    const updateMedia = () => {
        setMediumScreen(window.innerWidth >= 834);
        setLargeScreen(window.innerWidth >= 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);

    const compactFooterMenu = [
    'Shop and Learn',
    'Apple Wallet',
    'Account',
    'Entertainment',
    'Apple Store',
    'For Business',
    'For Education',
    'For Healthcare',
    'For Government',
    'Apple Values',
    'About Apple',
    ]

    const [dropDownArray, setDropdownArray] = useState(compactFooterMenu.map( _ => false))

    const clickDropDown = (index) => {
        setDropdownArray(prevItems => prevItems.map((item, i) => i === index ? !item : item) ) // sets dropdown index to true

    }

  return (
    <div className='bg-[#f5f5f7] pb-8 w-screen'>
        <div className='max-w-[1000px] w-full mx-auto px-4'>
            <div className='footer_light text-xs'>
                <div className='pt-4'>1. Hearing Aid and Hearing Test: The Hearing Aid feature has received FDA authorization. The Hearing Test and Hearing Aid features are supported on AirPods Pro 2 with the latest firmware paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and later and are intended for people 18 years old or older. The Hearing Aid feature is also supported on a compatible Mac with macOS Sequoia and later. It is intended for people with perceived mild to moderate hearing loss.</div>

                <div className='pt-4'>Hearing Protection: The Hearing Protection feature works with AirPods Pro 2 with the latest firmware when paired with a compatible iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and later. Feature is only available in the U.S. and Canada. See <a className='underline' href='support.apple.com/120850'>support.apple.com/120850</a> for total attenuation and more information. The Hearing Protection feature is not suitable for protection against extremely loud impulse sounds, such as gunfire, fireworks, or jackhammers, or against sustained sounds louder than 110 dBA.</div>

                <div className='pt-4'>2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</div>
                
                <div className='pt-4'>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</div>

                <div className='pt-4'>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</div>

                <div className='pt-4'>Learn more about how Apple Card applications are evaluated at <a className='underline' href='support.apple.com/kb/HT209218'>support.apple.com/kb/HT209218</a>.</div>

                <div className='pt-4'>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to U.S. English, as part of an iOS 18, iPadOS 18, and macOS Sequoia update. English (Australia, Canada, Ireland, New Zealand, South Africa, UK) language support available this December. Some features, additional platforms, and support for additional languages, like Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, divish, Vietnamese, and others, will be coming over the course of the next year.</div>

                <div className='pt-4'>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</div>

                <div className='pt-4'>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</div>

            </div>
            <hr className='border-[#cececf] mt-6' />

            {isMediumScreen 
                ?
                    <div className='grid grid-cols-5 text-xs footer_light mb-8'>
                        <div>
                            <div className='flex flex-col'>
                                <ul className='apple_black font-bold pt-6'>Shop and Learn</ul>
                                {footer_items_col_1.map((item, i) => {
                                    if (i < 11) {
                                        return <a className='pt-2'>{item}</a>
                                    } else return null
                                })}
                                <ul className='apple_black font-bold pt-6'>Apple Wallet</ul>
                                {footer_items_col_1.map((item, i) => {
                                    if (i >= 11) {
                                        return <a className='pt-2'>{item}</a>
                                    } else return null
                                })}
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-col'>
                                <ul className='apple_black font-bold pt-6'>Account</ul>
                                {footer_items_col_2.map((item, i) => {
                                    if (i < 3) {
                                        return <abbr key={i} className='pt-2 hover:underline'>{item}</abbr>
                                    } else return null
                                })}
                                <ul className='apple_black font-bold pt-6'>Entertainment</ul>
                                {footer_items_col_2.map((item, i) => {
                                    if (i >= 3) {
                                        return <abbr key={i} className='pt-2 hover:underline'>{item}</abbr>
                                    } else return null
                                })}
                            </div>
                        </div>

                        <div>
                            <div className='apple_black font-bold pt-6'>Apple Store</div>
                            {footer_items_col_3.map((item, i) => {
                                return <ul key={i} className='pt-2'>{item}</ul>
                            })}
                            
                        </div>

                        <div>
                            <div className='apple_black font-bold pt-6'>For Business</div>
                            {footer_items_col_4.map((item, i) => {
                                if (i < 2) {
                                    return <ul className='pt-2'>{item}</ul>
                                } else return null
                            })}
                            <div className='apple_black font-bold pt-6'>For Education</div>
                            {footer_items_col_4.map((item, i) => {
                                if (i >= 2 && i < 5) {
                                    return <ul className='pt-2'>{item}</ul>
                                } else return null
                            })}
                            <div className='apple_black font-bold pt-6'>For Healthcare</div>
                            {footer_items_col_4.map((item, i) => {
                                if (i >= 5 && i < 9) {
                                    return <ul className='pt-2'>{item}</ul>
                                } else return null
                            })}
                            <div className='apple_black font-bold pt-6'>For Government</div>
                            {footer_items_col_4.map((item, i) => {
                                if (i >= 9) {
                                    return <ul className='pt-2'>{item}</ul>
                                } else return null
                            })}
                        </div>

                        <div>
                            <div className='apple_black font-bold pt-6'>Apple Values</div>
                            {footer_items_col_5.map((item, i) => {
                                if (i < 7) {
                                    return <ul key={i} className='pt-2'>{item}</ul>
                                } else return null
                            })}
                            <div className='apple_black font-bold pt-6'>About Apple</div>
                            {footer_items_col_5.map((item, i) => {
                                if (i >= 7) {
                                    return <ul key={i} className='pt-2'>{item}</ul>
                                } else return null
                            })}
                        </div>
                    </div>
                :
                // Compact Footer Menu
                    <div className='py-4'>
                        {compactFooterMenu.map((item, index) => {
                        return (
                            <>
                                <div onClick={() => clickDropDown(index)} className={`flex justify-between ${!dropDownArray[index] && 'border-b-2'}  py-2`}>
                                    <span className='text-sm'>{item}</span>
                                    {dropDownArray[index] 
                                        ?
                                            <ExpandLessRoundedIcon />
                                        :
                                            <ExpandMoreRoundedIcon />

                                    }
                                </div>
                                {dropDownArray[index] &&
                                    <div className={`flex flex-col py-2 pl-4 text-[12px] footer_light transition-all transform overflow-hidden duration-500 ease-in-out 
                                    
                                    
                                    
                                    `}>
                                        {footer_items[index].map(item => {
                                            return <a className='leading-6 text-[12px]' href="">{item}</a>
                                        })
                                        
                                        }
                                    </div>
                                }
                            </>
                        )
                        })}

                    </div>
            }
            
            <div className='text-xs footer_light'>More ways to shop: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/retail">Find an Apple Store</a> or <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/locate">other retailer</a> near you. Or call 1-800-MY-APPLE.</div>
            <hr className='border-[#cececf] my-5' />

            {isLargeScreen 
                ?
                    <div className='flex text-xs footer_light'>
                        <div className='flex-1 text-left'>Copyright © 2024 Apple Inc. All rights reserved.</div>
                        <div className='flex justify-between text-center w-[420px]'>
                            <a className='hover:underline ' href="/privacy">Privacy Policy</a>
                            |
                            <a className='hover:underline' href="/terms">Terms of Use</a>
                            |
                            <a className='hover:underline' href="/sales_refunds">Sales and Refunds</a>
                            |
                            <a className='hover:underline' href="/legal">Legal</a>
                            |
                            <a className='hover:underline' href="/sitemap">Site Map</a>

                            </div>
                        <a className='flex-1 text-right hover:underline' href='/choose-country-region'>United States</a>
                    </div>
                :
                    <div className='flex text-xs footer_light'>
                        <div>
                            <div className='flex-1 text-left'>Copyright © 2024 Apple Inc. All rights reserved.</div>
                            <div className='flex justify-between text-center w-[420px]'>
                                <a className='hover:underline ' href="/privacy">Privacy Policy</a>
                                |
                                <a className='hover:underline' href="/terms">Terms of Use</a>
                                |
                                <a className='hover:underline' href="/sales_refunds">Sales and Refunds</a>
                                |
                                <a className='hover:underline' href="/legal">Legal</a>
                                |
                                <a className='hover:underline' href="/sitemap">Site Map</a>

                            </div>
                        </div>
                        {isMediumScreen &&
                        <a className='flex-1 text-right hover:underline' href='/choose-country-region'>United States</a>
                        }
                    </div>
            }
        </div>
    </div>
  )
}

export default Footer