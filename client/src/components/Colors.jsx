import React from 'react'

const Colors = (props) => {
  return (
    <div className={`flex justify-between gap-2 w-fit mx-auto h-3`}>
        {props.colors.map(color => {
            return (
                <div className={`w-3 h-3 rounded-full 
                    ${ 
                        color === 'peach' ? 'bg-orange-200' : 
                        color === 'gray' ? 'bg-gray-500' : 
                        color === 'silver' ? 'bg-slate-400' : 
                        color === 'blue' ? 'bg-blue-500' : 
                        color === 'purple' ? 'bg-purple-500' : 
                        color === 'red' ? 'bg-red-500' : 
                        color === 'orange' ? 'bg-orange-400' : 
                        color === 'yellow' ? 'bg-yellow-200' : 
                        color === 'green' ? 'bg-green-400' : 
                        'bg-black' 
                    } 
                `}/>
            )
        })}
    </div>
  )
}

export default Colors