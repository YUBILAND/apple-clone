import React, { useEffect, useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const MacPage = () => {

    const chapterNav_items = [
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg',
            title: 'MacBook Air',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg',
            title: 'MacBook Pro',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/imac_light__cx5ex9nbqxme_large.svg',
            title: 'iMac',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg',
            title: 'Mac mini',
            new: true,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg',
            title: 'Mac Studio',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg',
            title: 'Mac Pro',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg',
            title: 'Compare',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/displays_light__d67yrnk0qsa6_large.svg',
            title: 'Displays',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg',
            title: 'Accessories',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_os_light__6mb5pqhztcie_large.svg',
            title: 'Sequoia',
            new: false,
        },
        {
            img: 'https://www.apple.com/v/mac/home/cb/images/chapternav/mac_shop_light__f0m72gc7jguq_large.svg',
            title: 'Shop Mac',
            new: false,
        },
    ]

    const [scale, setScale] = useState(1);

    useEffect(() => {

        const handleScroll = () => {

            // Get the current scroll position
            const scrollY = window.scrollY - 200;
      
            // Calculate the scale based on scroll position
            const newScale = 1 - scrollY / 1000; // Adjust the divisor to control the scaling speed
      
            // Set a minimum scale (prevent image from disappearing)
            if (newScale >= 0.5 && newScale <= 1) {
              setScale(newScale);

              //can go down 6 scrols
            }
          };

            // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
        

        // Cleanup event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    useEffect(() => {
        console.log(scale)
    }, [scale])
    

  return (
    <>
        <div className='bg-[#f5f5f7] pb-8 pt-4'>

            <chapternav className='w-[1150px] mx-auto flex justify-between items-center'>

                {chapterNav_items.map(item => {
                    return (
                        <a href='' className='relative flex flex-col items-center'>
                            <img className={item.title === 'Sequoia' && 'w-[35px] object-fit'} src={item.img} alt="" />
                            <span className='text-sm'>{item.title}</span>
                            {item.new && <span className='absolute w-fit bottom-[-14px] left-0 right-0 mx-auto text-xs text-[#BD4410]'>New</span>}
                        </a>
                    )
                })}

            </chapternav>

        </div>

        <div className='bg-[white] my-[80px]'>

            <div className='w-[1700px] mx-auto'>
                <div className='grid grid-cols-2'>
                    <leftgrid className='font-bold text-7xl text-left store_dark_gray'>Mac</leftgrid>
                    <div className='font-semibold text-3xl text-right ml-auto store_dark_gray'>
                        <div className='w-[300px] text-left'>
                            If you can dream it, Mac can do it.
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className=''>
            <video className='w-screen h-[756px] object-cover' loop autoplay='autoplay' muted >
                <source src='https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge.mp4' />
            </video>
        </div>

        <div className='bg-[white] mb-[140px]'>

            <div className='w-[1700px] mx-auto'>

                    <div className='pt-[150px] font-semibold text-6xl text-left store_dark_gray'>Get to know Mac.</div>

                    <div className='my-24'>
                        <div className='relative w-fit transition-transform duration-300 hover:scale-105 shadow-lg rounded-3xl'>
                            <img className='rounded-3xl w-[405px] h-[740px] object-cover object-bottom' src="https://www.apple.com/v/mac/home/cb/images/overview/consider/mac_intelligence__esfi0qmvis6e_xlarge.jpg" alt="" />
                            <div className='absolute top-0 left-0 ml-8 mt-8'>
                                <div className='text-lg font-semibold'>
                                Apple Intelligence and macOS
                                </div>
                                <h1 className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>Hello, Apple Intelligence.</h1>
                            </div>

                            <div className='absolute bottom-0 right-0 mr-4 mb-4'>
                                <AddCircleRoundedIcon className=' text-[#343436]' sx={{fontSize: '2.7rem'}} />
                            </div>
                        </div>
                    </div>

                    <div className='pt-[140px] font-semibold text-6xl text-left store_dark_gray'>Help me choose.</div>

                    <div className='my-24'>
                        <a href='' className='w-full transition-transform duration-300 hover:scale-[1.01] shadow-lg rounded-3xl flex bg-[#f5f5f7] py-12'>

                            <div className='rounded-l-3xl basis-2/5 flex justify-center items-center text-center'>
                                <div className=''>
                                    <div className='w-[440px] text-3xl font-semibold mb-8'>
                                    Answer a few questions to find the best Mac for you.
                                    </div>
                                    <button className='text-white rounded-full px-5 py-2 text-lg bg-[#0072e0] hover:bg-[#0077ED]'>Get started</button>
                                </div>
                            </div>
                            <div className='rounded-l-3xl basis-3/5'>
                            
                                <img className=' ' src="https://www.apple.com/v/mac/home/cb/images/overview/help-me-choose/help_me_choose__0cunyw534bmm_xlarge.jpg" alt="" />

                            </div>
                            
                        </a>
                    </div>
                    



            </div>
        </div>




    </>
  )
}

export default MacPage