import type { LatestFromUsCardProps } from "../types/types"
import LatestFromUs_1 from "../assets/png/LatestFromUs_1.png"
import LatestFromUs_2 from "../assets/png/LatestFromUs_2.png"
import LatestFromUs_3 from "../assets/png/LatestFromUs_3.png"
import LatestFromUsCard from "../components/LatestFromUsCard"
import gsap from "gsap"
import { useEffect } from "react"

export default function LatestFromUs() {
    useEffect(() => {
        gsap.set(".underlineAnim", {
            scaleX: 0,
            transformOrigin: "left"
        })
    })

    const handleEnter = () => {
        gsap.to(".underlineAnim", {
            scaleX: 1,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    const handleLeave = () => {
        gsap.to(".underlineAnim", {
            scaleX: 0,
            duration: 0.35,
            ease: "power3.out"
        })
    }
    
    const LatestFromUsList: LatestFromUsCardProps[] = [
        {
            title: "Beijing’s backtrack on Xinjiang detention camps spurred.",
            desc: "Academic research shows that investigative reporting, NGO advocacy, and scholarly scrutiny pushed Chinese authorities from denial to dismantling parts of their mass detention system for Uyghurs.",
            image: LatestFromUs_1,
            date: "February 4, 2026",
            name: "Fergus Shiel",
            jabatan: "Reporter"
        },
        {
            title: "Asian Financial hubs are reshaping Africa’s offshore economy.",
            desc: "Academic research shows that investigative reporting, NGO advocacy, and scholarly scrutiny pushed Chinese authorities from denial to dismantling parts of their mass detention system for Uyghurs.",
            image: LatestFromUs_2,
            date: "January 29, 2026",
            name: "Carmen Molina Acosta",
            jabatan: "Reporter"
        },
        {
            title: "New EU report urges more aggressive action against transnational repression.",
            desc: "The report cites ICIJ’s China Targets investigation and calls for improved coordination across the bloc.",
            image: LatestFromUs_3,
            date: "February 4, 2026",
            name: "Fergus Shiel",
            jabatan: "Reporter"
        },
    ]

    return (
        <div className="px-5 jdm:px-10 mt-30">
            <div className="flex flex-row justify-between pb-6 border-b border-journalist-border-default mb-4">
                <h1 className="text-md font-medium">Latest From Us</h1>
                <h1 onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="text-journalist-red-error font-medium text-md cursor-pointer relative">See More <span className="underlineAnim absolute left-0 bottom-0 h-0.5 w-full bg-journalist-red-error"></span></h1>
            </div>

            <div className="flex flex-col gap-4 jdl:mb-40">
                {LatestFromUsList.map((item, index) => (
                    <LatestFromUsCard key={index} title={item.title} desc={item.desc} image={item.image} date={item.date} name={item.name} jabatan={item.jabatan} />
                ))}
            </div>
            
        </div>
    )
}