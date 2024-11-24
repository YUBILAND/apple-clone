import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppleIcon from '@mui/icons-material/Apple';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const StorePage = () => {

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

    // const platter_items = [
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663',
    //         title: 'Mac'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1723857157128',
    //         title: 'iPhone'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875',
    //         title: 'iPad'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838',
    //         title: 'Apple Watch'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269',
    //         title: 'Apple Vision Pro'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822',
    //         title: 'AirPods'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000',
    //         title: 'AirTag'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484',
    //         title: 'Apple TV 4K'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654',
    //         title: 'HomePod'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174',
    //         title: 'Accessories'
    //     },
    //     {
    //         img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054',
    //         title: 'Apple Gift Card'
    //     },
    // ]
  return (
    <div className='mt-[44px] select-none mb-16'>
        <div className='mt-32 w-[1623px] mx-auto'>
            <div className='grid grid-cols-2'>
                <leftgrid className='font-bold text-5xl text-left store_light_gray'><ul className='store_dark_gray inline'>Store.</ul> The best way to buy the products you love.</leftgrid>
                <rightgrid className='text-right'>
                    <div className='ml-auto w-fit text-sm'>
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

            <div className='mt-24 flex justify-between items-center'>
                {platter_items.map(item => {
                    return (
                        <a href='' className=''>
                            <img className='mb-4 w-[120px] object-fit' src={item.img} alt="" />
                            <div className='text-center hover:underline'>{item.title}</div>
                        </a>
                    )
                })}
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>The latest.</ul> Take a look at what's new, right now.</div>

            <div className='mt-8'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[400px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-white'>
                        <div className='text-xs font-bold'>
                        PRE-ORDER NOW
                        </div>
                        <div className='text-3xl font-bold mt-2'>MacBook Pro</div>
                        <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                        <div>From $1599 or $133.25/mo. for 12 mo.</div>
                    </div>
                </div>
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>Help is here.</ul> Whenever and however you need it.</div>

            <div className='mt-8'> 
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[480px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-black'>
                        <div className='text-xs font-bold'>
                        APPLE SPECIALIST
                        </div>
                        <div className='text-3xl font-bold mt-2'>Shop one on one with a Specialist. Online or in a store.</div>
                        {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                        <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
                    </div>
                </div>
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>The Apple Store difference.</ul> Even more reasons to shop with us.</div>

            <div className='mt-8'>
                <div className='bg-white w-[330px] h-fit transition-transform duration-300 hover:scale-105 rounded-3xl shadow-lg'>
                    
                    <div className='px-8 pt-6 pb-12 text-black'>
                        <div>
                            <LocalShippingOutlinedIcon sx={{fontSize: '4rem', color: '#75c053'}} />
                            <div className='text-[24px] leading-tight font-semibold '>
                                Enjoy <span className='text-[#75c053]'>two-hour delivery</span> from an Apple Store, <span className='text-[#75c053]'> free delivery</span>, or <span className='text-[#75c053]'>easy pickup.<sup>2</sup></span></div>
                            {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                            <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>Accessories.</ul> Essentials that pair perfectly with your favorite devices.</div>

            <div className='mt-8'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[400px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-accessories-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723822259651" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-black'>
                        <div className='pt-4 text-2xl font-semibold'>
                        In with the new.
                        </div>
                        <div className='w-[250px] text-md font-md leading-tight mt-2'>Your favorite accessories. Now available in bold new colors and with innovative new features.</div>
                        {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                        <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
                    </div>
                </div>
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>Loud and clear.</ul> Unparalleled choices for rich, high-quality sound.</div>

            <div className='mt-8'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[400px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-applemusic-202301?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1670389217380" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-black'>
                        <div className='w-[250px] pt-4 text-2xl font-semibold'>
                        Get 3 months of Apple Music free.
                        </div>
                        <div className='text-md font-md leading-tight mt-2'>Included with the purchase of select Apple devices.</div>
                        {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                        <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
                    </div>
                </div>
            </div>

            <div className='mt-[90px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>The Apple experience.</ul> Do even more with Apple products and services.</div>

            <div className='mt-8'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[480px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-apple-intelligence-202410_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1729187913412" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-black'>
                        <div className='text-xs font-bold'>
                        APPLE SPECIALIST
                        </div>
                        <div className='text-2xl font-semibold mt-2'>New features for writing, focus, communication, and more.</div>
                        {/* <div className='text-lg font-semibold mt-2'>Apple Intelligence</div>
                        <div>From $1599 or $133.25/mo. for 12 mo.</div> */}
                    </div>
                </div>
            </div>

            <div className='mt-[90px] w-[950px] font-semibold text-3xl text-left store_light_gray'><ul className='store_dark_gray inline'>Special savings.</ul> iPhone carrier deals and exclusive savings for school, businesses, and more.</div>

            <div className='mt-8'>
                <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                    <img className='rounded-3xl w-[400px] object-fit' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1725466294938" alt="" />
                    <div className='absolute top-0 left-0 ml-8 mt-8 text-black'>
                        <div className='text-xs font-bold'>
                        CARRIER DEALS
                        </div>
                        <div className='text-2xl leading-tight font-semibold mt-2'>Apple. Your one-stop shop for incredible carrier deals.</div>
                        <div className='leading-tight mt-2 w-[320px]'>Get up to $1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be required.<sup>4</sup></div>
                    </div>
                </div>
            </div>




            <div className='mt-[90px]'>
                <div className='text-3xl font-semibold mb-4'>Quick Links</div>
                <div className='flex'> 
                    <button className='hover:bg-[#272729] hover:underline hover:text-white rounded-full border-[1px] border-black px-4 py-1 mr-4 flex items-center'>
                        <div>
                            Order Status
                        </div>
                        <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                    </button>
                    <button className='hover:bg-[#272729] hover:underline hover:text-white rounded-full border-[1px] border-black px-4 py-1 mr-4 flex items-center'>
                        <div>
                           Shopping Help
                        </div>
                        <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                    </button>
                    
                    <button className='hover:bg-[#272729] hover:underline hover:text-white rounded-full border-[1px] border-black px-4 py-1 mr-4 flex items-center'>
                        <div>
                        Returns
                        </div>
                        <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                    </button>

                    <button className='hover:bg-[#272729] hover:underline hover:text-white rounded-full border-[1px] border-black px-4 py-1 mr-4 flex items-center'>
                        <div>
                        Your Saves
                        </div>
                        <ArrowOutwardIcon sx={{marginLeft: '4px', fontSize: '0.8rem'}}/>
                    </button>

                </div>
            </div>

                                   

        </div>
    </div>
  )
}

export default StorePage