import React from 'react'
import { Link } from 'react-router-dom'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillGithub,AiOutlineInstagram } from 'react-icons/ai'
import logo from '../../assets/images/logo.png'

const socialLinks = [
  {
    path : 'https://github.com/suraj270702',
    icon : <AiFillGithub  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : 'https://github.com/suraj270702',
    icon : <AiFillGithub  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : 'https://github.com/suraj270702',
    icon : <AiFillGithub  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : 'https://github.com/suraj270702',
    icon : <AiFillGithub  className='group-hover:text-white w-4 h-5'/>
  }

]

const quickLinks = [
  {
    path : '/home',
    display : 'Home'
  },
  {
    path : '/home',
    display : 'Services'
  },
  {
    path : '/doctors',
    display : 'Doctors'
  },
  {
    path : '/login',
    display : 'Login'
  }
]
const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
     <div className="container">
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px] '>
         <div>
           <img src={logo} alt='' />
           <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>copyright {Year}</p>
           <div className='flex items-center gap-3 mt-4'>
             {
              socialLinks.map((social,i)=>(
                <Link className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none ' to={social.path}nkey={i}>{social.icon}</Link>
              ))
             }
           </div>
         </div>
         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
          <ul>
            {
              quickLinks.map((item,i)=>(
                <li key={i} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              ))
            }
          </ul>
         </div>
         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
          <ul>
            {
              quickLinks.map((item,i)=>(
                <li key={i} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              ))
            }
          </ul>
         </div>
         <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
          <ul>
            {
              quickLinks.map((item,i)=>(
                <li key={i} className='mb-4'><Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link></li>
              ))
            }
          </ul>
         </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer