import React from 'react'
import jackpot from '../assets/images/jackpot-img.webp'
import boxLayer1 from '../assets/images/box-layer1.webp'
import boxLayer2 from '../assets/images/box-layer2.webp'
import Jackpot1 from '../assets/images/jackpot-1.webp'
import Jackpot2 from '../assets/images/jackpot-2.webp'
import Jackpot3 from '../assets/images/jackpot-3.webp'
import Common2 from './Common2'
import ellipse2 from '../assets/images/seven-right-elipse.png'
import ellipse1 from '../assets/images/seven-leftelipse.png'
import { Righttick } from './Icon'


const Jackpot = () => {
    const product = [
        { img: Jackpot1 },
        { img: Jackpot2 },
        { img: Jackpot3 },
    ]
    return (
        <>
            <div className='relative z-[1]'>
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-40%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-2] animate-pulse absolute top-[-10%] left-[-10%] max-md:hidden'></img>
                <div className='bg-[url(./assets/images/jackpot-bg.webp)] bg-cover bg-no-repeat bg-center sm:pt-[60px] pt-[40px] md:pt-[90px] px-3 relative'>
                    <div className=' px-3 mx-auto max-w-[1140px]'>
                        <div className='flex flex-row flex-wrap -mx-3 justify-center items-center'>
                            <div className='lg:w-1/2 px-3'>
                                z                          <img src={jackpot} alt="img" className='w-full max-h-[438px]' />
                            </div>
                            <div className='lg:w-1/2 pr-3 pl-[20px] pt-[10px] sm:pt-[30px]'>
                                <p className='text-white text-[30px] sm:text-[48px] leading-9 sm:leading-[57.6px] xl:text-nowrap mb-[16px] font-normal font-anton'>Potenciando sus elecciones</p>
                                <p className='text-white text-[12px] sm:text-[16px] leading-[25.6px] mb-4 sm:mb-7 md:mb-[32px] font-medium font-inter'>Con Exclusive Game lo mejor está de tu lado.</p>
                                <div className='flex gap-2 mb-3 '>
                                    <Righttick />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Tecnología HTML5</p>
                                </div>
                                <div className='flex gap-2 mb-[20px] '>
                                    <Righttick />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Versión PC y móvil</p>
                                </div>
                                <div className='flex gap-2 mb-[20px] '>
                                    <Righttick />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px] font-medium font-inter'>Control de RTP (controlás qué porcentaje pagar)</p>
                                </div>
                                <div className='flex gap-2  mb-[20px]'>
                                    <span className='mt-2'><Righttick /></span>
                                    <p className='text-white max-w-[380px] text-[14px] sm:text-[16px] leading-[25.6px] font-medium font-inter'>Bonos editables, happy hours, Jackpots, códigos  promocionales.</p>
                                </div>
                                <div className='flex gap-2 mb-[32px] '>
                                    <Righttick />
                                    <p className='text-white text-[14px] sm:text-[16px] mt-[-8px] leading-[25.6px]  font-medium font-inter'>Aplicación para android y windows de regalo.</p>
                                </div>
                                <p className='text-white text-[14px] sm:text-[16px] leading-[25.6px] mb-[24px] font-medium font-inter'>Te reintegramos todo lo invertido en fichas en la moneda que elijas.</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1044px] mx-auto rounded-[16px] sm:mt-[100px] mt-[20px] md:mt-[150px] relative z-[1] overflow-hidden border-[1px] border-white flex items-center justify-center sm:py-[70px] py-[50px] md:py-[96px]'>
                        <p className=' font-["anton"] font-normal max-w-[520px] sm:text-[40px] text-[27px] md:text-[48px] text-center leading-9 sm:leading-[57.6px] text-white'>
                            lanza tu propia plataforma en sólo 2 semanas
                        </p>
                        <img src={boxLayer1} alt="layer" className='absolute left-0 z-[0] top-0  opacity-50' />
                        <img src={boxLayer2} alt="layer" className='absolute right-0 z-[0] bottom-0  opacity-50' />
                    </div>
                    <div className=' px-3'>
                        <div className=' mx-auto container  max-w-[1140px] mt-[20px] md:mt-[80px] sm:mt-[50px] px-3'>
                            <p className='text-white text-[30px] sm:text-[48px] leading-[57.6px] font-["anton"] text-center font-[400]'>Juegos en vivo</p>
                            <div className='grid grid-cols-1 sm:mt-[50px] mt-[10px] md:mt-[60px] mb-[40px] md:grid-cols-2 xl:grid-cols-3 w-full gap-3 sm:gap-4 lg:gap-5 xl:gap-[24px] ' >
                                {product.map((items, index) => (
                                    <div key={index}>
                                        <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer '>
                                            <img className="w-full" src={items.img} alt="" />
                                            <div className=' absolute bg-[#000000B8] left-[-100%] bottom-0 group-hover:left-0 w-full h-full  flex items-center justify-center  group-hover:opacity-100 opacity-0 duration-300'>
                                                <Common2 text='Reproducir ahora' />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jackpot