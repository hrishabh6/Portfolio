import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='pt-20 pb-3 c-space border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className='text-white-500 flex gap-2'>
        <p>Terms and conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className='flex gap-3 '>
        <NavLink to="https://github.com/hrishabh6">
          <div className='social-icon cursor-pointer'>
            <img src="/assets/github.svg" alt="Github Profile" className='w-1/2 h-1/2'/>
          </div>
        </NavLink>
        <NavLink to="https://x.com/Rishab093">
          <div className='social-icon cursor-pointer'>
            <img src="/assets/twitter.svg" alt="Twitter Profile" className='w-1/2 h-1/2'/>
          </div>
        </NavLink>
        <NavLink to="https://www.instagram.com/_sonicx.hrishu_">
          <div className='social-icon cursor-pointer'>
            <img src="/assets/instagram.svg" alt="Instagram Profile" className='w-1/2 h-1/2'/>
          </div>
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/hrishabh-joshi-61399a298">
          <div className='social-icon cursor-pointer'>
            <img src="/assets/linkedin.svg" alt="Linkedin Profile" className='w-1/2 h-1/2 invert'/>
          </div>
        </NavLink>
      </div>
    </section>
  )
}

export default Footer;
