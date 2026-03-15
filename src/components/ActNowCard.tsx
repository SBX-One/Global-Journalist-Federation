import type { ActNowCardProps } from "../types/types"
import arrow from "../assets/svg/arrow-right.svg"
import youtube from "../assets/svg/Youtube.svg"
import twitter from "../assets/svg/akar-icons_twitter-fill.svg"
import linkedin from "../assets/svg/akar-icons_linkedin-fill.svg"
import facebook from "../assets/svg/akar-icons_facebook-fill.svg"
import gsap from "gsap"
import { useEffect } from "react"

export default function ActNowCard({CardType, title, desc, icon}: ActNowCardProps) {
    const mediaSocialList = [youtube, twitter, linkedin, facebook];

    const handleEnter = () => {
        gsap.to(".hoverBtn", {
            scale: 100,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    const handleLeave = () => {
        gsap.to(".hoverBtn", {
            scale: 0,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    useEffect(() => {
        gsap.set(".hoverBtn", {
            scale: 0
        })
    }, [])

    return (
        <div className="w-full flex-1 jdm:min-w-81 p-5 border border-journalist-border-default min-h-60 flex flex-col justify-between">
            <div className="flex flex-col ">
                <img src={icon} alt="icon" className="w-6 jdm:w-12" />
                <h1 className="font-medium text-md jdm:text-journalist-lg mt-4">{title}</h1>
                <p className="text-sm text-journalist-gray-text">{desc}</p>
            </div>
            {CardType === "button" && <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="bg-journalist-black text-white px-8 py-4 rounded-full font-semibold text-md flex ml-auto cursor-pointer hover:scale-115 transition-all duration-300 overflow-hidden relative hover:text-black"><span className="absolute bg-white z-10 inset-0 rounded-full hoverBtn"></span> <span className="relative z-10 ">Donate</span></button>}
            {CardType === "link" && 
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={arrow} alt="arrow" />
                    <p className="font-medium text-sm">All The Petition</p>
                </div>
            }
            {CardType === "social" && 
                <div className="flex flex-row gap-2 cursor-pointer">
                    {mediaSocialList.map((item, index) => (
                        <img src={item} alt="icon" key={index} className="p-4 border border-journalist-border-default rounded-full hover:scale-115 transition-all duration-300" />
                    ))}
                </div>
            }
        </div>
    )
}