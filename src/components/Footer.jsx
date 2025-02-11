import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa6"

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className='flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <FaFacebook className='hover:scale-110 duration-300' size={24}/>
            <FaLinkedinIn className='hover:scale-110 duration-300' size={24}/>
            <FaTwitter className='hover:scale-110 duration-300' size={24}/>
            <FaInstagram className='hover:scale-110 duration-300' size={24}/>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className='text-sm'>
              &copy; 2025 Akshdeep.
            </p>
            <p className='text-sm'>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
