import React, { useEffect, useState } from "react";
import Preloaderimg from "../assets/images/navlogo.webp"
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
                    <img className=" animate-pulse max-w-[300px] max-h-[300px] lg:max-w-[500px] lg:max-h-[500px]" src={Preloaderimg} alt="Preloader" />
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader;