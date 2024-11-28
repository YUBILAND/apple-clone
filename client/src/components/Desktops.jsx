import React, { useEffect, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Colors from './Colors';

const Desktops = () => {

    const product_title_items = [
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png',
            colors: ['blue', 'purple', 'red', 'orange', 'yellow', 'green', 'silver'],
            new: true,
            product_header: 'iMac',
            product_subheader : 'M4 chip',
            product_desc: 'A stunning all-in-one desktop for creativity and productivity.',
            product_price: 'From $1299 or $108.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large.png',
            colors: [],
            new: true,
            product_header: 'MacBook Air 13” and 15”',
            product_subheader : 'M2 or M3 chip',
            product_desc: 'Strikingly thin and fast so you can work, play, or create anywhere.',
            product_price: 'From $999 or $83.25/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png',
            colors: [],
            new: false,
            product_header: 'Mac Studio',
            product_subheader : 'M2 Max or M2 Ultra chip',
            product_desc: 'Powerful performance and extensive connectivity for pro workflows.',
            product_price: 'From $1999 or $166.58/mo. for 12 mo.*',
        },
        {
            product_img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png',
            colors: [],
            new: false,
            product_header: 'Mac Pro',
            product_subheader : 'M2 Ultra chip',
            product_desc: 'A pro workstation with PCIe expansion for demanding workflows.',
            product_price: 'From $6999 or $583.25/mo. for 12 mo.*',
        },
    ]

    const product_spec_items = [
        [
            {
                topText: '',
                middleText: '24”',
                img: '',
                width: '',
                bottomText: '4.5K Retina display with 500 nits of brightness delivers sharp and vibrant detail.11',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4__dneah1uqjlme_large.png',
                width: '38px',
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
                topText: '',
                middleText: '—',
                img: '',
                width: '',
                bottomText: '',
            },
            {
                topText: 'Up to',
                middleText: '6 ports',
                img: '',
                width: '',
                bottomText: '2x Thunderbolt / USB 4 or 4x Thunderbolt 4, Gigabit Ethernet, headphone jack',
            },
        ],
        [
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
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro__elktsjpc0ui6_large.png',
                width: '80px',
                bottomText: 'Apple M4 or M4 Pro chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
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
                middleText: '8 ports',
                img: '',
                width: '',
                bottomText: '3x Thunderbolt 4 or 3x Thunderbolt 5, 2x USB‑C, HDMI, Gigabit Ethernet, headphone jack',
            },
        ],
        [
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
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large.png',
                width: '80px',
                bottomText: 'Apple M2 Max or M2 Ultra chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
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
                middleText: '12 ports',
                img: '',
                width: '',
                bottomText: 'Up to 6x Thunderbolt 4, 2x USB‑A, up to 2x USB‑C, HDMI, 10Gb Ethernet, SDXC, headphone jack',
            },
        ],
        [
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
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large.png',
                width: '36px',
                bottomText: 'Apple M2 Ultra chip',
            },
            {
                topText: '',
                middleText: '',
                img: 'https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png',
                width: '55px',
                bottomText: 'Apple Intelligence1',
            },
            {
                topText: '',
                middleText: 'PCIe',
                img: '',
                width: '',
                bottomText: 'Features seven expansion slots, six of which are PCle gen 4',
            },
            {
                topText: '',
                middleText: '18 ports',
                img: '',
                width: '',
                bottomText: '8x Thunderbolt 4, 3x USB‑A, 2x HDMI, 2x 10Gb Ethernet, 2x Serial ATA, headphone jack',
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
                <div className=' mt-28 text-center '>

                {/* Image */}
                    <div className='h-[270px] flex flex-col justify-end'>
                        <img className='mx-auto transition-transform duration-300 hover:scale-105' src={item.product_img} alt="" />
                    </div>
                    
                {/* Color and New */}
                    <div className='mt-12 text-center '>
                        <Colors colors={item.colors} desktops={true} />
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

export default Desktops