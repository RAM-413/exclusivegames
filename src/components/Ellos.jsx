import React from 'react'
import map7 from '../assets/images/ellos-1.webp'
import map8 from '../assets/images/ellos-2.webp'
import map9 from '../assets/images/ellos-3.webp'
import Common2 from './Common2'
const Ellos = () => {
    const products = [
        { imge: map7 },
        { imge: map8 },
        { imge: map9 },
    ]
    return (
        <>
            <div className='relative z-[50]'>
                <div className=' mx-auto container  max-w-[1140px] mt-[60px] sm:mt-[150px] px-3'>
                    <p className='text-white text-[30px] sm:text-[48px] sm:leading-[57.6px] font-["anton"] text-center font-[400] leading-[40px]'>Ellos eligieron apostar con nosotros</p>
                    <div className='grid grid-cols-1 relative z-[50] sm:mt-[45px] mt-[30px] md:mt-[60px] mb-[40px] sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-5 xl:gap-[24px]' >
                        {products.map((item, index) => (
                            <div key={index}>
                                <div className='w-full h-full relative overflow-auto rounded-[8px] group duration-300 cursor-pointer'>
                                    z       <img className="w-full" src={item.imge} alt="imgellos" />
                                    <div className=' absolute bg-[#000000B8] w-full h-full flex items-center justify-center left-[-100%] bottom-0 group-hover:left-0 group-hover:opacity-100 opacity-0  duration-300'>
                                        <Common2 text='Rcasinovip' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className='font-semibold font-inter text-[16px] text-center max-w-[830px] mx-auto leading-[25.6px] text-white'>Clientes satisfechos que confiaron en Exclusive Games y han disfrutado de emocionantes experiencias de juego.
                        Ahora, la próxima apuesta está en tus manos.<br className=' max-sm:hidden' />
                        Elige ganar. Elige exclusive game.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Ellos