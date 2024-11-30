import React from 'react'
import './FrontPage.css'
import AppleIcon from '@mui/icons-material/Apple';
import LargeProductBanner from './Product Banners/LargeProductBanner';
import SmallProductBanner from './Product Banners/SmallProductBanner';

function FrontPage() {



    const largeProductBannerArr= [
        {
            header: 'iPhone 16 Pro',
            subheader: 'Hello, Apple Intelligence',
            bg: 'https://www.apple.com/v/home/bu/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_large.jpg',
        },
        {
            header: 'iPhone 16',
            subheader: 'Hello, Apple Intelligence',
            whiteButton: true,
            bg: 'https://www.apple.com/v/home/bu/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg',
        },
        {
            headerArt: 'https://www.apple.com/v/home/bv/images/logos/ipad-air/hero_logo_ipad_air__ejixj9pic0uq_large.png',
            subheader: 'Two sizes. Faster chip. Does it all.',
            blackHeader: true,
            bg: 'https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_large.jpg',
            appleIntelligence: true,
        },
    ]

    const smallProductBannerArr= [
        {
            bottom: true,
            header: 'Airpods Pro 2',
            subheader: 'Now with a Hearing Aid feature.',
            sup: '2',
            blueButton: true,
            bg: 'https://www.apple.com/v/home/bv/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_large.jpg',
        },
        {
            headerArt: 'https://www.apple.com/v/home/bv/images/logos/apple-watch-series-10/promo_logo_apple_watch_series_10__qk5vaa89vnm2_large.png',
            subheader: 'Thinstant classic.',
            blackHeader: true,
            bg: 'https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg',
        },
        {
            header: 'MacBook Air',
            subheader: 'Lean. Mean. M3 machine.',
            blackHeader: true,
            bg: 'https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_large.jpg',
        },
        {
            bottom: true,
            header: 'AirPods 4',
            subheader: 'Iconic. Now supersonic. Available with Active Noise Cancellation.',
            sup: '3',
            bg: 'https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg',
        },
        {
            bottom: true,
            header: 'Carrier deals at Apple',
            subheader: 'Get up to $1000 in credit on a new iPhone. Trade-in may be required.',
            sup: '4',
            blackHeader: true,
            customButton: 'Find your deal',
            bg: 'https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_large.jpg',
        },
        {
            headerArt: 'https://www.apple.com/v/home/bv/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_large.png',
            subheader: 'Get $180-$650 in credit when you trade in iPhone 12 or higher.',
            sup: '5',
            blackHeader: true,
            customButton: 'Get your estimate',
            bg: 'https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg',
        },
    ]





  return (
    <div className='select-none'>

        {/* 3 Large Product Banners */}
        {largeProductBannerArr.map(banner => {
            return <LargeProductBanner banner={banner} />
        })}

        {/* six box */}

        <div className='grid grid-cols-2 gap-3 mx-3 mb-3'>
            {smallProductBannerArr.map(banner => {
                return <SmallProductBanner banner={banner} />
            })}

        </div>

    </div>
  )
}

export default FrontPage