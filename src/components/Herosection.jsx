import React from 'react'
import Nav from './Nav'
import Common from './Common'

const Herosection = () => {
    return (
        <div className='bg-[url(./assets/images/header-bg.webp)] bg-cover bg-no-repeat lg:h-screen bg-center'>
            <Nav />
            <div className='container flex flex-col items-center py-[50px] lg:pt-[140px] '>
                <h2 className='text-center max-w-[505px] uppercase font-["anton"] font-normal sm:text-[55px] text-[40px] md:text-[72px] text-[#FFFFFF] md:leading-[86px] sm:leading-[70px] leading-[60px]'>Exclusive Games. Pasión por ganar</h2>
                <p className='max-w-[727px] font-["inter"] font-medium text-[14px] sm:text-[16px] text-[#D2D0D2] text-center pt-4 leading-5 sm:leading-6'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
                <div className='pt-[40px]'>
                    <Common text="Empezar" />
                </div>

            </div>
        </div>
    )
}

export default Herosection