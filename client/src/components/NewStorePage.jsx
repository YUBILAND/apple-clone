import React, { useEffect, useState } from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppleIcon from '@mui/icons-material/Apple';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CarouselCard from './CarouselCard';
import SwiperCarousel from './SwiperCarousel';
import IconCard from './cards/IconCard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import MoodIcon from '@mui/icons-material/Mood';

const NewStorePage = () => {

    const platter_items = [
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663',
            title: 'Mac'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128',
            title: 'iPhone'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875',
            title: 'iPad'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838',
            title: 'Apple Watch'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269',
            title: 'Apple Vision Pro'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822',
            title: 'AirPods'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000',
            title: 'AirTag'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484',
            title: 'Apple TV 4K'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654',
            title: 'HomePod'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174',
            title: 'Accessories'
        },
        {
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054',
            title: 'Apple Gift Card'
        },
    ]

    const header = [
        {
            neon: 'The latest.',
            grayText: 'Let them unwrap wonders.',
        },
        {
            neon: 'Personalization.',
            grayText: 'Just for them, just from you.',
        },
        {
            neon: 'Holiday picks.',
            grayText: 'Add more magic to the moment.',
        },
        {
            neon: 'Only at Apple.',
            grayText: 'With you every step of the holiday.',
        },
        {
            neon: 'The Apple experience.',
            grayText: 'Even more awe in store.',
        },
        {
            neon: 'Special Stores.',
            grayText: 'iPhone carrier deals and exclusive savings for school, businesses, and more.',
        },
    ]
    
    const carousel_cards = [
        [
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPhone 16 Pro',
                bottomText: 'From $999 or $41.62/mo. for 24 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-pro-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180965302',
            },
            {
                background: true,
                topText: '',
                middleText: 'Apple Watch Series 10',
                bottomText: 'From $399 or $33.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-s10-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064591',
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad mini',
                bottomText: 'From $499 or $41.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728504973912',
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'MacBook Pro',
                bottomText: 'From $1599 or $133.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746398',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPhone 16',
                bottomText: 'From $799 or $33.29/mo. for 24 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-iphone-202411_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729180987357',
                
            },
            {
                background: true,
                topText: '',
                middleText: 'Apple Watch Ultra 2',
                bottomText: 'From $799 or $66.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-watch-ultra-2-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729694064643',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad Air',
                bottomText: 'From $599 or $49.91/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492746150',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iMac',
                bottomText: 'From $1299 or $108.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-imac-202411?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1728499365434',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'MacBook Air',
                bottomText: 'From $999 or $83.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-macbook-air-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492751837',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'Mac mini',
                bottomText: 'From $599 or $49.91/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-mac-mini-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728499365448',
                
            },
            {
                background: true,
                topText: '',
                middleText: 'Apple Vision Pro',
                bottomText: 'From $3499 or $291.58/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-vision-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728499365473',
                
            },
            {
                background: true,
                topText: 'APPLE INTELLIGENCE',
                middleText: 'iPad Pro',
                bottomText: 'From $999 or $83.25/mo. for 12 mo.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-ipad-pro-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728492745491',
            },
        ],
        [
            {
                background: true,
                middleText: 'Make their gift one of a kind.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-engraving-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728511605616',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirPods Max - Purple',
                price: '549.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-purple?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451266',
                colors: [
                            'blue',
                            'purple',
                            'midnight',
                            'starlight',
                            'orange',
                        ],
                airpodsmax: true,
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirPods Pro 2',
                price: '249.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirPods 4 with Active Noise Cancellation',
                price: '179.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'Apple Pencil Pro',
                price: '129.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirTag',
                price: '29.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1617761671000',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirPods 4',
                price: '129.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723685836351',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'Apple Pencil (2nd generation)',
                price: '129.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1540596407165',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'AirTag 4 Pack',
                price: '99.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-4pack-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1617761669000',
            },
            {
                product: true,
                topText: 'Free Engraving',
                bottomText: 'Beats Fit Pro True Wireless Earbuds — Stone Purple',
                price: '199.99',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2H3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1634663497000',
                colors: [
                            'beatblack',
                            'beatwhite',
                            'stonepurple',
                            'sagegray',
                        ],
            },

        ],
        [
            {
                background: true,
                middleText: 'Surprise your favorites with these favorites.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-quick-picks-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1730226657180',
            },
            {
                product: true,
                topText: 'New',
                bottomText: 'iPhone 16 Silicone Case with MagSafe – Star Fruit',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYY73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723236738435',
                colors: [
                        'starfruit',
                        'ultramarine',
                        'lakegreen',
                        'fuschia',
                        'stonegray',
                        'plum',
                        'black',
                        'denim',
                        ],
                price: '49.00',

            },
            {
                product: true,
                bottomText: 'HomePod mini - White',
                price: '99.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-white-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632925509000',
                colors: [
                            'blue',
                            'yellow',
                            'midnight',
                            'orange',
                            'white',
                        ]
            },
            {
                product: true,
                bottomText: 'Smart Folio for iPad Air 11-inch (M2) - Sage',
                price: '79.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWK73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1716915397369',
                colors: [
                            'charcoalgray',
                            'sage',
                            'lightdenim',
                            'lightviolet',
                        ]
            },
            {
                product: true,
                topText: 'New',
                bottomText: 'Beats Solo 4 — On-Ear Wireless Headphones – Slate Blue',
                price: '199.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUW43?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1712255584961',
                colors: [
                            'matteblack',
                            'slateblue',
                            'cloudpink',
                        ]
            },
            {
                product: true,
                topText: 'New',
                bottomText: '46mm Plum Sport Loop',
                price: '49.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724186591572',
                colors: [
                            'ultramarine',
                            'lakegreen',
                            'bluecloud',
                            'ink',
                            'plum',
                        ]
            },
            {
                product: true,
                topText: 'Only at Apple',
                bottomText: 'PopSockets Magsafe Grip for iPhone - Opalescent Purple',
                price: '34.95',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HRZ12?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1729650109693',
                colors: [
                            'purple',
                            'black',
                            'multicolor',
                        ]
            },
            {
                product: true,
                topText: 'New',
                bottomText: 'iPhone 16 Pro Clear Case with MagSafe',
                price: '49.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723930332796',
            },
            {
                product: true,
                topText: 'New',
                bottomText: 'Beats iPhone 16 Pro Case with MagSafe – Riptide Blue',
                price: '49.00',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MCFN4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724013477596',
                colors: [
                            'midnightblack',
                            'summitstone',
                            'riptideblue',
                            'sunsetpurple',
                        ]
            },
            {
                product: true,
                topText: 'Only at Apple',
                bottomText: 'Ember Mug 2 - Blue (14 oz)',
                price: '149.95',
                smallImg: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HRXA2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1729650099141',
            },
            {
                background: true,
                topText: 'Apple Gift Card',
                gray: true,
                middleText: 'Great gifts are in the cards.',
                bottomText: 'The perfect way for them to spend the holidays however they like.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-holiday-gift-card-202411?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1729714063515',
            },
        ],
        [
            {
                background: true,
                topText: 'Starting 11.29',
                middleText: 'The Apple Store Shopping Event',
                bottomText: 'Get an Apple Gift Card up to $200 when you buy an eligible product.°° Offer available 11/29–12/2.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-ase-announce-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1731012365282',
            },
            {
                background: true,
                middleText: 'Get gifts in time for the holidays with two-hour delivery,² free delivery, or easy pickup.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-delivery-pickup-202411?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1728401800980',
            },
            {
                icon: true,
                double: 
                [
                    {
                        icon: AppleIcon,
                        text: 'Customize your Mac and create your own style of Apple Watch.',
                    },
                    {
                        icon: CreditCardIcon,
                        text: 'Pay in full or pay over time. Your choice.',
                    },
                ],

            },
            {
                icon: true,
                double: 
                [
                    {
                        icon: AssignmentReturnIcon,
                        text: 'Free extended returns between now and 1/8/25.5',
                    },
                    {
                        icon: MoodIcon,
                        text: 'Make them yours. Engrave a mix of emoji, names, and numbers for free.',
                    },
                ],
                
            },
            {
                background: true,
                topText: 'Apple Trade In',
                gray: true,
                middleText: 'Trade in your current device. Get credit toward a new one.3',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-trade-in-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728597151813',
            },
            {
                background: true,
                topText: 'Apple Specialist',
                gray: true,
                middleText: 'Find gifts with an Apple Specialist in a store or online.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-specialist-help-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728571564886',
            },
            {
                background: true,
                middleText: 'Shop with a Specialist over video to find the perfect gift.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-video-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1725047826258',
            },
            {
                background: true,
                topText: 'Today at Apple',
                gray: true,
                middleText: 'Join free sessions at your Apple Store.',
                bottomText: 'Learn about the latest features and how to go further with your Apple devices.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145',
            },
            {
                background: true,
                middleText: 'Get expert service and support at the Genius Bar.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1626375544000',
            },
        ],
        [
            {
                background: true,
                topText: 'Apple Music',
                gray: true,
                middleText: 'Get 3 months of Apple Music free.',
                bottomText: 'Included with the purchase of select Apple devices.+',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-apple-music-202411?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728401815327',
            },
            {
                background: true,
                topText: 'Apple TV+',
                white: true,
                middleText: 'Get 3 months free when you buy an Apple device.++',
                bottomText: 'Included with the purchase of select Apple devices.+',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-holiday-apple-tv-202411?wid=960&hei=1000&fmt=png-alpha&.v=1728401815327',
            },
            {
                background: true,
                middleText: 'Six Apple services.',
                bottomText: 'One easy subscription.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-subscriptions-202108_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375546000',
            },
            {
                background: true,
                topText: 'Apple Intelligence',
                gray: true,
                middleText: 'New features for writing, focus, communication, and more.∆∆',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-apple-intelligence-202410_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729187913412',
            },
            {
                background: true,
                middleText: "We've got you covered.",
                bottomText: 'AppleCare+ now comes with unlimited repairs for accidental damage protection.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applecare-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1713313285056',
            },
            {
                background: true,
                middleText: 'Discover all the ways to use Apple Pay.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-applepay-202303?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=1677655420359',
            },
            {
                background: true,
                topText: 'Home',
                gray: true,
                middleText: 'See how one app can control your entire home.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-homekit-202405_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1715960298510',
            },
        ],
        [
            {
                background: true,
                topText: 'Carrier Deals',
                gray: true,
                middleText: 'Apple. Your one-stop shop for incredible carrier deals.',
                bottomText: 'Get up to $1000 in credit on a new iPhone with AT&T, Boost Mobile, T‑Mobile, or Verizon. Trade‑in may be required.⁴',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1725466294938',
            },
            {
                background: true,
                topText: 'Education',
                gray: true,
                middleText: 'Buy a new Mac or iPad with education savings.1',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1716334899885',
            },
            {
                background: true,
                topText: 'Business',
                gray: true,
                white: true,
                middleText: "From enterprise to small business, we'll work with you.1",
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-business-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724096343921',
            },
            {
                background: true,
                topText: 'Government',
                gray: true,
                middleText: 'Special pricing is available for state, local, and federal agencies.1',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-gov-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259305816',
            },
            {
                background: true,
                topText: 'Veterans and military',
                gray: true,
                middleText: 'Active and veteran members may be eligible for exclusive savings.1',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-veteran-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723659938034',
            },
            {
                background: true,
                topText: 'Certified Refurbished',
                gray: true,
                middleText: 'Shop refurbished Apple products backed by a one-year warranty.',
                img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-refurb-202408?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1721055057263',
            },
        ],
    ]

    const itemsToShow_arr = [3, 5, 5, 3, 3, 3] // why is index 3 3?

    const smallCardBool_arr = [false, true, true, false, false, true ]


    const [isMediumScreen, setMediumScreen] = useState(window.screen.width >= 768);

    const updateMedia = () => {
        setMediumScreen(window.screen.width >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
      }, []);

  return (
    <div className={`select-none mb-16 w-screen overflow-hidden ${isMediumScreen && 'min-w-[1032px]'}`}>

        <div className='bg-[rgb(158,209,245)] bg-[linear-gradient(90deg,_rgba(158,209,245,1)_13%,_rgba(129,149,238,1)_30%,_rgba(161,138,236,1)_49%,_rgba(243,119,190,1)_68%,_rgba(249,171,109,1)_100%)]
 w-full h-32 relative'>
            <div className='absolute top-0 left-0 bg-[linear-gradient(180deg,_rgba(245,245,247,0)_5%,_rgba(245,245,247,1)_40%)] w-full h-full z-10 '></div>

        </div>

        <div className={`px-[6.25%]`}>
            <div className={`flex ${!isMediumScreen && 'flex-col'} justify-between max-w-[1623px] w-full mx-auto`}>
                <leftgrid className={`font-semibold ${isMediumScreen ? 'text-5xl pb-24' : 'text-[32px] pb-6'}  text-left store_light_gray `}>
                    <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310] float-left'>Store.</h1>
                    &nbsp;Gift magic this holiday.
                </leftgrid>
                <rightgrid className={`text-left ${!isMediumScreen && 'pb-[28px]'}`}>
                    <div className='w-fit text-sm'>
                        <div className='flex'>
                            <img className='w-[35px] h-[35px] mr-2' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050282" alt="" />
                            <div className='text-left'>
                                <div className=''>Need shopping help?</div>
                                <a className='group flex items-center text-[#196899]' href="">
                                    <div className='group-hover:underline'>Ask a Specialist</div>
                                    <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                                </a>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <AppleIcon sx={{fontSize: '2rem', marginRight: '8px'}}/>
                            <div className='text-left'>
                                <div>Visit an Apple Store</div>
                                <a className='group flex items-center text-[#196899]' href="">
                                    <div className='group-hover:underline'>Find one near you</div>
                                    <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </rightgrid>
            </div>

            <div className={`flex justify-between items-center shrink-0 ${isMediumScreen ? 'w-[1623px]' : 'w-[1080px]'} mx-auto pt-[20px] `}>
                {platter_items.map(item => {
                    return (
                        <a href='' className=''>
                            <img className={` ${isMediumScreen ? 'w-[120px] mb-4' : 'w-[92.3px] mb-3'}  object-fit`} src={item.img} alt="" />
                            <div className='text-center hover:underline text-[14px]'>{item.title}</div>
                        </a>
                    )
                })}
            </div>

            <div className={`${isMediumScreen ? 'mt-[90px]' : 'mt-[60px]'} w-[1623px] mx-auto`}>
                {header.map((item, index) => {
                    return (
                        <div className={`${isMediumScreen && 'pb-[60px]'}`}>
                            <div className={`font-semibold ${isMediumScreen ? 'text-[28px]' : 'text-[24px]'} text-left store_light_gray`}>
                                <h1 className='font-semibold text-md text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310] float-left'>{item.neon}</h1>
                                &nbsp;{item.grayText}
                            </div>

                            <SwiperCarousel Key={index.toString()} cards={carousel_cards[index]} itemsToShow={itemsToShow_arr[index]} small={smallCardBool_arr[index]}/>

                        </div>
                    )
                })}
            </div>
        </div>          
        
    </div>
  )
}

export default NewStorePage