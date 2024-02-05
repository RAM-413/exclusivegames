import React from 'react'
import PokerImg from '../assets/images/poker-img.webp'
import Aviator from '../assets/images/poker-2.webp'
import { Greenline } from './Icon'
import ellipse2 from '../assets/images/seven-right-elipse.png'
import ellipse1 from '../assets/images/seven-leftelipse.png'

const Pokersection = () => {
    return (
        <div className=' relative z-[1]'>
            <div className='container  pt-[74px] pb-[100px]'>
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-80%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-1] animate-pulse absolute bottom-[0%] left-[-10%] max-md:hidden'></img>
                <div className=' flex  flex-wrap -ml-3 '>
                    <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col max-lg:items-center px-3'>
                        <img className=' lg:max-w-[538px] w-full md:max-w-[400px] sm:max-w-[300px] max-w-[250px]' src={PokerImg} alt="poker" />
                        <h2 className='lg:pt-[60px] pt-2 font-["anton"] font-normal text-[40px] sm:text-[48px] text-[#FFFFFF]'>Nuestra Visión</h2>
                        <p className='pt-4 max-lg:text-center text-[#CCD0D2] font-["inter"] font-medium text-[14px] sm:text-[16px] max-w-[444px] '>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                        <div className='pt-6' >
                            <a href="#"><Greenline /></a>
                        </div>
                    </div>
                    <div className='w-1/2 max-lg:w-full max-lg:flex max-lg:flex-col-reverse max-lg:items-center px-3'>
                        <div className='max-lg:flex max-lg:flex-col max-lg:items-center'>
                            <h2 className=' pt-2 lg:pt-0 font-["anton"] font-normal text-[40px] sm:text-[48px] text-[#FFFFFF] '>Nuestra Misión</h2>
                            <p className='max-lg:text-center pt-4 text-[#CCD0D2] font-["inter"] font-medium text-[14px] sm:text-[16px] max-w-[444px] '>Nuestra misión es simple pero poderosa: proporcionarte la más amplia gama de soluciones de entretenimiento de alta calidad y rentabilidad. Estamos comprometidos a elevar tus expectativas y brindarte experiencias inigualables.</p>
                            <div className='pt-6' >
                                <a href="#"><Greenline /></a>
                            </div>
                        </div>
                        <div>
                            <img className='md:pt-[60px] sm:pt-[40px] pt-[30px]  lg:max-w-[538px] w-full md:max-w-[400px] sm:max-w-[300px] max-w-[250px]' src={Aviator} alt="aviator" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokersection

