import arrow from "../assets/svg/fi_arrow-up-right.svg";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ActingNow() {
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".actRed",
                start: "top 80%",
            },

        })

        tl.to(".actRed", {
            duration: 1,
            y: -20,
            scale: 1.2,
            ease: "power3.out"
        })
        .to(".actRed", {
            delay: 0.3,
            duration: 1,
            y: 0,
            scale: 1.0,
            ease: "power3.out"
        })

        tl.to(".actGray", {
            duration: 1,
            delay: 0.3,
            opacity: 1,
        })
    }, [])

    useEffect(() => {
        gsap.set(".actRed", {
            x: 0
        })
        gsap.set(".actGray", {
            opacity: 0
        })
    }, [])
    

    return (
        <div className="px-5 jdm:px-10">
            <div className="font-bold pb-9.25">
                <h1 className="actGray text-[25px] jdm:text-[45px] text-center text-journalist-gray-100">GET INFORMED GET FREEDOM</h1>
                <h1 className="actRed text-journalist-red-error text-[30px] relative jdm:bottom-8 jdm:text-[40px] text-center">ACTING NOW AND TOGETHER</h1>
            </div>

            <div>
                <h1 className="font-medium text-md text-center mb-6 mt-4">Stay informed, register for RSF's newsletter</h1>
                <div className="flex flex-row gap-2 max-w-116 mx-auto">
                    <input type="email" placeholder="Your email addres" className="bg-white border-2 outline-none border-journalist-border-default w-full h-14 rounded-2xl pl-6" />
                    <img src={arrow} alt="" className="bg-black h-14 w-14 p-4 rounded-full cursor-pointer hover:scale-115 transition-all duration-300" />
                </div>
            </div>
        </div>
    )
}