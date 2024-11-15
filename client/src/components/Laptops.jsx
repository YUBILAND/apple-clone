import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Laptops = () => {

    const product_title_items = [
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png',
            colors: ['black', 'silver'],
            new: true,
            product_header: 'MacBook Pro 14" and 16"',
            product_subheader : 'M4, M4 Pro, or M4 Max chip',
            product_desc: 'The most advanced Mac laptops for demanding workflows.',
            product_price: 'From $1599 or $133.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png',
            colors: ['black', 'peach', 'gray', 'silver'],
            new: false,
            product_header: 'MacBook Air 13” and 15”',
            product_subheader : 'M2 or M3 chip',
            product_desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
            product_price: 'From $999 or $83.25/mo. for 12 mo.*',
        },
    ]

    const product_spec_items = [
        [
            {
                topText: '',
                middleText: '14.2” or 16.2”',
                img: '',
                width: '',
                bottomText: 'Liquid Retina XDR display with up to 1600 nits peak brightness, 1,000,000:1 contrast ratio, and up to 120Hz refresh rates9',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro_max__d90fsmfhy6ky_large.png',
                width: '122px',
                bottomText: 'Apple M4, M4 Pro, or M4 Max chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: 'Up to',
                middleText: '24 hours',
                img: '',
                width: '',
                bottomText: 'battery life3',
            },
            {
                topText: '',
                middleText: '7 ports',
                img: '',
                width: '',
                bottomText: '3x Thunderbolt 4 (USB‑C) or 3x Thunderbolt 5 (USB‑C), HDMI, SDXC, headphone jack, MagSafe',
            },
            {
                topText: '',
                middleText: '3.4 lb. or 4.7 lb.',
                img: '',
                width: '',
                bottomText: 'Weight',
            },
        ],
        [
            {
                topText: '',
                middleText: '13.6” or 15.3”',
                img: '',
                width: '',
                bottomText: 'Liquid Retina display with 500 nits of brightness and support for 1 billion colors9',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png',
                width: '80px',
                bottomText: 'Apple M2 or M3 chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: 'Up to',
                middleText: '18 hours',
                img: '',
                width: '',
                bottomText: 'battery life3',
            },
            {
                topText: '',
                middleText: '4 ports',
                img: '',
                width: '',
                bottomText: '2x Thunderbolt / USB 4, headphone jack, MagSafe',
            },
            {
                topText: '',
                middleText: '2.7 lb. or 3.3 lb.',
                img: '',
                width: '',
                bottomText: 'Weight',
            },
        ],
    ]

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 300)
    }, [])

  return (
    <div className={`flex ${!visible && 'opacity-0'} transition-opacity duration-700`}>
        {product_title_items.map((item, itemNum) => {
            return (
            <div className='ml-4 w-[372px]'>
                <div className=' mt-20 text-center '>

                {/* Image */}
                    <div className='h-[190px] flex flex-col justify-end'>
                        <img className='mx-auto transition-transform duration-300 hover:scale-105' src={item.product_img} alt="" />
                    </div>
                    
                {/* Color and New */}
                    <div className='mt-12 text-center '>
                        <div className={`flex justify-between gap-2 w-fit mx-auto h-3`}>
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

                        <div className='mt-8 flex items-center justify-between w-[260px] mx-auto px-4 text-lg'>
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

export default Laptops