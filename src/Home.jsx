import React from 'react'
import Navbar2 from './Components/Navbar2.jsx'
import Homecard from './Components/Homecard.jsx'
import Footer from './Components/Footer.jsx'

const Home = () => {
  return (
    <>
    <div className='bg-[url("./assets/blog-cover.jpg")] bg-cover bg-center pt-36 flex flex-col justify-center items-center position-absolute'>
      
      <div>
        <h1 className='text-5xl text-white font-bold text-center text-[#87b12d]'>Ghost & Gatsby</h1>
        <p className='text-3xl text-white mt-2.5'>Thoughts, stories and JAMstack</p>
      </div>
      <Navbar2/>
    </div>
    <Homecard/>
    <Footer/>
    </>
  )
}

export default Home;