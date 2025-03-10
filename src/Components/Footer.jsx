import React from 'react'
import { NavLink, Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='flex justify-between  w-full bg-black text-white text-xl pt-8 pb-8  items-center pl-[150px] pr-[150px]'>
      <div className='w-full text-sm'>
         <Link to ="">Ghost & Gatsby</Link> &copy; 2022 — Published with <Link>Ghost</Link>
      </div>
      <div>
      <ul className='flex space-x-4 text-sm'>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/tag"><li>Tag</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/author"><li>Author</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/help"><li>Help</li></NavLink>
      </ul>
        </div>
    </div>
    </>
  )
}

export default Footer