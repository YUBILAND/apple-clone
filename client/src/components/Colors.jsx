import React from 'react'

const Colors = (props) => {
  return (
    <div className={`flex justify-between gap-2 w-fit mx-auto h-3`}>
        {props.colors.map(color => {
            return (
                <div className={`w-3 h-3 rounded-full 
                    ${ props?.desktops && props.desktops ? 
                        (
                            color === 'purple' ? 'bg-purple-500' : 
                            color === 'red' ? 'bg-red-500' : 
                            color === 'orange' ? 'bg-orange-400' : 
                            color === 'yellow' ? 'bg-yellow-200' : 
                            color === 'green' ? 'bg-green-400' : 
                            'bg-black' 
                        )
                       
                        :

                        props?.airpodsmax && props.airpodsmax ?
                        (
                            color === 'blue' ? 'bg-[linear-gradient(180deg,_#64727f_50%,_#90a9b5_50%)]' : 
                            color === 'purple' ? 'bg-[linear-gradient(180deg,_#d6d3dc_50%,_#b2a4bd_50%)]' : 
                            color === 'midnight' ? 'bg-[linear-gradient(180deg,_#22252a_50%,_#293239_50%)]' : 
                            color === 'starlight' ? 'bg-[linear-gradient(180deg,_#e9e1d2_50%_,_#cfbdb3_50%)]' : 
                            color === 'orange' ? 'bg-[linear-gradient(180deg,_#fac19d_50%,_#e5a194_50%)]' : 
                            'bg-white'
                        )
                        :

                        (
                            color === 'beatblack' ? 'bg-[#3e3f41]' : 
                            color === 'beatwhite' ? 'bg-[#ededed]' : 
                            color === 'stonepurple' ? 'bg-[#d6b5d8]' : 
                            color === 'sagegray' ? 'bg-[#656565]' :

                            color === 'starfruit' ? 'bg-[#ebdf56]' : 
                            color === 'ultramarine' ? 'bg-[#495495]' : 
                            color === 'lakegreen' ? 'bg-[#586969]' : 
                            color === 'fuschia' ? 'bg-[#ac4778]' :
                            color === 'stonegray' ? 'bg-[#726c62]' : 
                            color === 'plum' ? 'bg-[#4e3847]' : 
                            color === 'black' ? 'bg-[#404146]' : 
                            color === 'denim' ? 'bg-[#556171]' : 

                            color === 'blue' ? 'bg-[#325268]' : 
                            color === 'yellow' ? 'bg-[#fdc962]' : 
                            color === 'midnight' ? 'bg-[#35363a]' : 
                            color === 'orange' ? 'bg-[#e67053]' :
                            color === 'white' ? 'bg-[#f2f2f2]' : 

                            color === 'charcoalgray' ? 'bg-[#325268]' : 
                            color === 'sage' ? 'bg-[#fdc962]' : 
                            color === 'lightdenim' ? 'bg-[#84a3b5]' :
                            color === 'lightviolet' ? 'bg-[#cccce6]' : 

                            color === 'matteblack' ? 'bg-[#0a0a0a]' : 
                            color === 'slateblue' ? 'bg-[#69859b]' : 
                            color === 'cloudpink' ? 'bg-[#ded3db]' :
                            
                            color === 'bluecloud' ? 'bg-[#a4a9b7]' :
                            color === 'ink' ? 'bg-[#63666f]' :

                            color === 'purple' ? 'bg-[#d4b2d5]' :
                            color === 'multicolor' ? 'bg-white' :

                            color === 'midnightblack' ? 'bg-[#4c4a4e]' :
                            color === 'summitstone' ? 'bg-[#e6ddd4]' :
                            color === 'riptideblue' ? 'bg-[#92adad]' :
                            color === 'sunsetpurple' ? 'bg-[#a27c94]' :
                            'bg-white'
                        ) 



                        // color === 'peach' ? 'bg-orange-200' : 
                        // color === 'gray' ? 'bg-gray-500' : 
                        // color === 'silver' ? 'bg-slate-400' : 
                        // color === 'blue' ? 'bg-blue-500' : 
                        // color === 'darkblue' ? 'bg-[#43528b]' :
                        // color === 'darkgreen' ? 'bg-[#516765]' :
                        // color === 'darkpurple' ? 'bg-[#b64980]' :
                        // color === 'brown' ? 'bg-[#584050]' :


                    } 
                `}/>
            )
        })}
    </div>
  )
}

export default Colors