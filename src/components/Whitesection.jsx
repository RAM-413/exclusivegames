import React from 'react'
import Service from './Service'
import Slotsmap from './Slotsmap'


const Whitesection = () => {
    return (
        <div>
            <div>
                <div className=' max-[1038px]:bg-white bg-[url(./assets/images/First-white-bg-img.webp)] bg-no-repeat relative z-[1] bg-100 sm:py-[40px] py-[30px] md:py-[50px] lg:py-[200px] xl:py-[243px]'>
                    <Service />
                    <Slotsmap />
                </div>
            </div>
        </div>
    )
}

export default Whitesection