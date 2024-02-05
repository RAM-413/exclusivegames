import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-[black] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="loader">
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>
                        <div className="circle">
                            <div className="dot"></div>
                            <div className="outline"></div>
                        </div>

                    </div>
                    <p className="text-[35px] sm:text-[50px] text-white pt-10 italic animate-bounce duration-300 ">EXCLUSIVE <span className=" text-green-800">GAMES</span></p>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;