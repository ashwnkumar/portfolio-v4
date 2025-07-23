import React from 'react'

const TheRedButton = () => {
    const handleClick = () => { }
    return (
        <div className="w-full h-full bg-blue-500 text-gray-950 flex flex-col items-center  justify-around gap-2 p-4">
            <div className="text-start">
                <h3 className='text-2xl'>The <span className='text-gray-300 bg-red-700 font-medium'>Red Button:</span></h3>
                <p className='text-lg'>It's just a button. What's the worst that could happen? {`:))`}</p>
            </div>
            <button type='button' onClick={handleClick} className='button w-50 h-16 bg-red-600 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#b91c1c,0_0px_0_0_#f8717181]
    active:border-b-[0px] 
    transition-all duration-200 [box-shadow:0_16px_0_0_#b91c1c,0_15px_0_0_#f8717181]
    border-b-[1px] border-red-500
  '>
                <span className='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Click Me. Or Don't</span>
            </button>
        </div>
    )
}

export default TheRedButton
