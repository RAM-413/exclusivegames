import React from 'react'
import Common2 from './Common2'
import { Righttick } from './Icon'
import Box3img from "../assets/images/box-3img.webp"
import ellipse2 from '../assets/images/seven-right-elipse.png'
import ellipse1 from '../assets/images/seven-leftelipse.png'
import Boxelipse from "../assets/images/box-backelipse.png"
import { Box3elipse } from './Icon'

const Box3 = () => {
    return (
        <>
            <div className='relative z-[1]'>
                <img className=' absolute top-[-10%] right-[4%]' src={Boxelipse} alt="Boxelipse" />
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-110%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-2] animate-pulse absolute top-[-110%] left-[-10%] max-md:hidden'></img>
                <div className=' mx-4 overflow-hidden'>
                    <div className=' container bg-[#062023] sm:py-[50px] py-[40px] md:py-[78px] sm:px-[30px] px-[25px] md:px-[45px] rounded-[16px] border-[0.5px] border-[#828F91]'>
                        <div className="row flex-col-reverse md:flex-row">
                            <div className="  w-full md:w-1/2 my-auto px-3">
                                <h2 className=' fonnt-["anton"] font-normal text-[32px] leading-10 text-[#FFFFFF]'>Platinum</h2>
                                <p className=' fonnt-["inter"] font-medium text-[16px] leading-6 pt-[16px] text-[#CED4D4] max-w-[364px]'>Diseño totalmente personalizado. Contáctanos para un presupuesto.</p>
                                <h2 className=' fonnt-["anton"] font-normal md:text-[40px] sm:text-[35px] text-[27px] lg:text-[48px] text-[#FFFFFF] pt-[10px] sm:pt-[15px]'>Consultar precio</h2>
                                <div className=' flex  items-center pb-5 pt-3 gap-[8px] sm:pb-10 sm:pt-[10px]'>
                                    <span><Righttick /></span>
                                    <p className=' fonnt-["inter"] font-normal text-[16px] text-[#CED4D4]'>Personalizable </p>
                                </div>
                                <Common2 text="Comprar ahora" />
                            </div>
                            <div className=" w-full md:w-1/2 relative z-[1] px-3">
                                <span className=' absolute z-[-1] sm:right-[-10%]  sm:top-[-25%]'><Box3elipse /></span>
                                <img src={Box3img} alt="Comprar ahora" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box3