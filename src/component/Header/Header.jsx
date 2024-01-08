import React from 'react'
import { CaretDownFill, ChatLeftDots, QuestionCircle, Search } from 'react-bootstrap-icons'
const Header = () => {
  return (
    <>
        <div className=' flex justify-between h-[4.5rem] items-center px-9 border-b-2 border-gray-200  bg-white '>
            <div className='section1 flex  '>
                <p className='  font-medium text-xl pr-3'>Payments</p>
                <p className='flex gap-1 text-sm items-center '> <QuestionCircle className='' color='gray'/> How it works</p>
            </div>

            <div className='flex items-center justify-normal section2 border-2 px-2 border-gray-100 bg-gray-100 rounded-md '>
                <Search color='grey'/>
                <input type="text" className="w-[30rem]  outline-none  py-2 px-2 bg-gray-100  " placeholder="Search features , tutorials, etc."></input>
            </div>

            <div className="section3 flex gap-3">
                <div className='icon1 border rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center'>
                  
              <ChatLeftDots className=' '/>
                </div>
                <div className='icon2 border rounded-full w-10 h-10 bg-gray-300 flex justify-center items-center'>
              <CaretDownFill />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header