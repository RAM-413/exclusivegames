import img3 from '../assets/images/imageseven.webp'
import img4 from '../assets/images/Ellipse-jua-right.webp'
import Light1 from "../assets/images/light1.webp"
import Light2 from "../assets/images/light2.webp"
import Light3 from "../assets/images/light3.webp"
import ellipse2 from '../assets/images/seven-right-elipse.png'
import ellipse1 from '../assets/images/seven-leftelipse.png'


const Masrazones = () => {
    return (
        <>
            <div className='relative z-[1]'>
                <img src={ellipse2} alt='image' className='z-[-1] animate-pulse absolute bottom-[-110%] right-0'></img>
                <img src={ellipse1} alt='image' className='z-[-2] animate-pulse absolute top-[-110%] left-[-10%] max-md:hidden'></img>
                <div className='container sm:mt-[70px] mt-[50px] md:mt-[100px]'>
                    <div className='row items-center justify-center'>
                        <div className='md:w-1/2 px-3'>
                            <img src={img3} alt="img" className='w-full max-w-[558px]' />
                        </div>
                        <div className='md:w-1/2 px-3 h-full'>
                            <p className='text-white  leading-[57.6px] lg:mb-[60px] mb-4  sm:mb-7 font-normal text-[25px] sm:text-[35px] lg:text-[48px] font-["anton"]'>Más razones para elegirnos</p>
                            <div className='max-w-[374px]'>
                                <div className='flex border-[0.5px] border-white    bg-grad items-center justify-center py-[20px] gap-[37px] mb-6 max-w-[374px] rounded-[16px]'>
                                    <img src={Light1} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-["anton"]'>200</p>
                                        <p className=' font-["inter"]
                                     font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Páginas creadas</p>
                                    </div>
                                </div>
                                <div className='flex border-[0.5px] border-white   items-center justify-center py-[20px] gap-[37px] mb-6 max-w-[374px] rounded-[16px]'>
                                    <img src={Light2} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px]  font-normal text-nowrap font-["anton"]'>98%</p>
                                        <p className=' font-["inter"]
                                        r"] font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Clientes Satisfechas</p>
                                    </div>
                                </div>
                                <div className='flex  border-[0.5px] border-white  items-center justify-center py-[20px] gap-[37px]  max-w-[374px] rounded-[16px]'>
                                    <img src={Light3} alt="image" />
                                    <div className='flex flex-col'>
                                        <p className='text-white text-[24px] sm:text-[32px] leading-[41.6px] font-normal text-nowrap font-["anton"]'>200</p>
                                        <p className=' font-["inter"]
                                        r"] font-medium text-[16px] leading-[25.6px] text-[#CED4D4] max-w-[364px]'>Divisas Disponibles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Masrazones