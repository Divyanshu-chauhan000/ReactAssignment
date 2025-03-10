import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar2 = () => {
  return (
    <>
    <nav className='flex justify-between  w-full  text-zinc-200 text-xl pt-4 pb-4 mt-24 items-center pl-[150px] pr-[150px]'>
      <ul className='flex space-x-4 text-sm'>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/tag"><li>Tag</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/author"><li>Author</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"text-[#87b12d]":""}} to="/help"><li>Help</li></NavLink>
      </ul>
      <ul>
        <NavLink to=""><button className='border border-slate-100 p-1 rounded-lg text-sm'>About</button></NavLink>      
      </ul>
    </nav>
    </>
  )
}

export default Navbar2
