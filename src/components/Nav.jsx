import React, { useState } from 'react'
import logo from '../assets/images/navlogo.webp'
import Common2 from './Common2'

const Nav = () => {

  const [nav, setNav] = useState(false)
  function show() {
    setNav(!nav)
    if (nav === false) {
      document.body.classList.add("max-lg:overflow-hidden")
    }
    else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  };
  return (
    <>
      <nav className='bg-[#FFFFFF1A] py-[24px]'>
        <div className='container  flex items-center justify-between'>
          <div className=' cursor-pointer'>
            <img className=' max-w-[210px] w-full' src={logo} alt="logo" />
          </div>
          <ul className={`${nav ? "left-0" : "left-[-100%]"
            } flex items-center gap-[28px] mobileView duration-300`}>
            <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#hogar">Hogar</a></li>
            <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#mision">Misión</a></li>
            <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#tragamoedaa">Tragamonedas</a></li>
            <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#porque">Por qué elegirnos</a></li>
            <li><a onClick={show} className='text-[16px] font-[Inter] font-medium text-[#D2D8DA] hover:text-[#FFFFFF] duration-300' href="#oferates">Ofertas</a></li>
            <li className='relative'>
              <a className='sm:hidden' onClick={show} href="#">
                <Common2 text="Acceso" />
              </a>
            </li>
          </ul>
          <div className='relative flex items-center gap-5'>
            <div className='hidden sm:block '>
              <Common2 text="Acceso" />
            </div>
            <label className='lg:hidden' onClick={show}>
              {nav ? (
                <div className='relative z-40'>
                  <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1'></span>
                  <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                </div>
              ) : (
                <div className='relative z-40'>
                  <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                  <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                  <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl'></span>
                </div>
              )}
            </label>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav