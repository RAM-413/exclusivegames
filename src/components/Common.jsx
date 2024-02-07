import React from 'react'

const Common = (props) => {
    return (
        <>
            <button className="py-[13px] px-[46px] relative flex items-center justify-center bg-gradient-to-tl from-[#51C8EF] to-[#7AF57A] rounded-[41px] hover:bg-gradient-to-br hover:from-[#51C8EF] hover:to-[#7AF57A] font-bold font-['inter'] text-[16px] text-[#00141B]"> <span className='absolute -bottom-2 -left-2'><svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_1872_27)" strokewidth="1.5" strokelinecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_1872_27" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#51C8EF" />
                        <stop offset="1" stopColor="#7AF57A" />
                    </linearGradient>
                </defs>
            </svg>
            </span>{props.text}</button>
        </>
    )
}

export default Common