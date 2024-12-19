import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Title = (props) => {
  return (
    props?.hyperlink ?

    (
        props.hyperlink.length === 1 ? // 1 link

        <div className='pt-[140px] font-semibold store_dark_gray flex md:justify-between md:flex-row flex-col'>

            <div className='font-semibold lg-apl:text-[56px] lg-apl:leading-[4rem] lg-apl:tracking-tight md:leading-[3rem] tracking-tighter leading-[2rem] md:text-[48px] text-[28px] text-left store_dark_gray lg-apl:w-[600px] md:w-[450px] w-[300px]'>{props?.title}</div>

            <div className='md:pt-[30px] pt-[15px] md:text-right text-left w-fit flex text-lg justify-end'>
                <a className='group flex items-end text-[#196899] ' href="">
                    <div className='flex items-center mr-6'>
                        <div className='group-hover:underline'>{props.hyperlink[0]}</div>
                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                    </div>
                </a>
            </div>

        </div>

        :  // 2 links

        <div className={`lg-apl:pt-[150px] md:pt-[120px] pt-[90px] font-semibold store_dark_gray flex md:justify-between md:flex-row flex-col`}>

            <div className='font-semibold lg-apl:text-[56px] lg-apl:leading-[4rem] lg-apl:tracking-tight md:text-[48px] text-[28px] text-left store_dark_gray'>{props?.title}</div>
            
            <div className='md:pt-[30px] pt-[15px] text-right flex md:text-lg text-sm justify-between md:w-[350px] w-[270px]'>
                <a className='group flex items-end text-[#196899] ' href="">
                    <div className='flex items-center w-fit'>
                        <div className='group-hover:underline'>{props.hyperlink[0]}</div>
                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                    </div>
                </a>
                <a className='group flex items-end text-[#196899]' href="">
                    <div className='flex items-center w-fit '>
                        <div className='group-hover:underline'>{props.hyperlink[1]}</div>
                        <ArrowForwardIosIcon sx={{fontSize: '0.8rem'}}/>
                    </div>
                </a>
            </div>
        </div>
    )

    :

    <div className='lg-apl:pt-[150px] md:pt-[120px] pt-[90px] font-semibold lg-apl:text-6xl md:text-5xl text-[28px] text-left store_dark_gray'>{props?.title}</div>
  )
}

export default Title