import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import { CiTwitter } from "react-icons/ci";
import { RiFacebookBoxLine } from "react-icons/ri";
import { GiRss } from "react-icons/gi";
const Navbar = () => {
  return(
     <div  className=''>
     <nav className='flex list-none bg-black text-zinc-200 text-xl justify-between pt-4 pb-4 items-center pl-[150px] pr-[150px]'>
      <div className='flex '>
       <NavLink to=""><img src={logoImg} width={100} height={100} alt="" /></NavLink>
      </div>
      <div>
      <ul className='flex space-x-2 text-xl '> 
        <NavLink className={(e)=>{return e.isActive?"bg-red-700":""}} to="/twitter"><CiTwitter/></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-red-700":""}} to="/login"><RiFacebookBoxLine/></NavLink>
        <NavLink className={(e)=>{return e.isActive?"bg-red-700":""}} to="/about"><GiRss/></NavLink>
      </ul>
      </div>
    </nav>
   </div>
  )
}

export default Navbar;