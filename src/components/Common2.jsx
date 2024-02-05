import React from 'react'
import { Whiteline } from './Icon'

const Common2 = (props) => {
    return (
        <>
            <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-transparent rounded-[41px] border-[1px] font-['inter'] sm:text-[16px] text-[14px] text-white hover:bg-white hover:text-[#000] duration-500"> <span className='absolute -bottom-2 -left-2'><Whiteline /></span>{props.text}</button>
        </>
    )
}
export default Common2