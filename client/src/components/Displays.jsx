import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Displays = () => {

    const product_title_items = [
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

    const product_spec_items = [
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

  return (
    <div className='flex'>
        {product_title_items.map((item, itemNum) => {
            return (
            <div className='ml-4 w-[372px]'>
                <div className=' mt-20 text-center '>

                {/* Image */}
                    <div className='h-[262px] flex flex-col justify-end'>
                        <img className='mx-auto transition-transform duration-300 hover:scale-105' src={item.product_img} alt="" />
                    </div>
                    
                {/* Color and New */}
                    <div className='mt-12 text-center '>
                        <div className={`grid grid-cols-${item.colors.length} gap-2 w-fit mx-auto h-3`}>
                            {item.colors.map(color => {
                                return <div className={`w-3 h-3 rounded-full ${ color === 'peach' ? 'bg-orange-200' : color === 'gray' ? 'bg-gray-500' : color === 'silver' ?'bg-slate-400' : 'bg-black'} `}/>
                            })}
                        </div>
                    </div>

                    <span className={`${!item.new && 'invisible'} inline-block mt-4 mb-2 font-bold text-xs text-[#BD4410]`}>New</span>

                {/* Item Description */}
                    <div className='flex flex-col mb-12'> 
                        <span className='font-semibold text-3xl'>{item.product_header}</span>
                        <span className='font-semibold text-lg'>{item.product_subheader}</span>
                        <span className='inline-block mt-3 mx-auto w-[300px] text-lg'>{item.product_desc}</span>
                        <span className='inline-block mt-3 font-semibold text-lg'>{item.product_price}</span>

                        <div className='mt-8 flex items-center justify-between w-[300px] mx-auto px-4 text-lg'>
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
                    <hr className='border-[#cececf] my-6' />

                {/* Item Specs */}
                    <div className='grid grid-cols-1 gap-10 pt-6 h-[732px]'>
                        {product_spec_items[itemNum].map((item, i) => {

                            return <div className='flex flex-col items-center'>
                                { item.topText && <span className='text-sm mb-2'>{item.topText}</span>}
                                { item.middleText && <span className='font-semibold text-3xl mb-3 '>{item.middleText}</span>}
                                { item.img && <img className={`w-[${item.width}] object-fit mb-4`} src={item.img} alt="" />}
                                { item.bottomText && <span className='text-xs w-[300px] text-balance'>{item.bottomText}</span>}
                            </div>
                        })}
                    </div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Displays