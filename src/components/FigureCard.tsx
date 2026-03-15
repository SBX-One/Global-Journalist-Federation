import figure_1 from "../assets/png/figure_1.png"
import figure_2 from "../assets/png/figure_2.png"
import figure_3 from "../assets/png/figure_3.png"
import search from "../assets/svg/search.svg"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect } from "react"

export default function FigureCard() {
    useGSAP(() => {
        gsap.from(".figure-card", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".figure-card",
                start: "top 80%",
            },
        })
    })

    const handleEnter = () => {
        gsap.to(".searchAnim", {
            yPercent: 0,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    const handleLeave = () => {
        gsap.to(".searchAnim", {
            yPercent: 100,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    useEffect(() => {
        gsap.set(".searchAnim", {
            yPercent: 100
        })
    }, [])


    const FigureCardList = [
        {
            title: "Chen Jieren (陈杰人)",
            desc: "Detained - Convicted",
            Image: figure_1
        },
        {
            title: "Chen Shuqing (陈树庆)",
            desc: "Detained - Convicted",
            Image: figure_2
        },
        {
            title: "Dai Zigeng (戴自更)",
            desc: "Detained - Convicted",
            Image: figure_3
        },
    ]

    return (
        <div className="px-5 jdm:px-10">
            <div className="flex flex-wrap gap-4">
                {FigureCardList.map((item, i) => (
                    <div key={i} className="figure-card flex-1 min-w-45-75 jdm:min-w-81">
                        <img src={item.Image} alt="image" className={`w-full h-56 jdm:h-70 flex object-cover ${i === 1 ? 'jdm:h-113.5 h-56' : 'h-auto'}`} />
                        <div className="mt-4">
                            <h1 className="font-medium text-sm">{item.title}</h1>
                            <h1 className="font-medium text-sm text-journalist-gray-text">{item.desc}</h1>
                        </div>
                    </div>
                ))}
            <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="overflow-hidden relative figure-card bg-journalist-gray-300 h-56 jdm:h-131.25 flex-1 min-w-45-75 jdm:max-w-81 flex justify-center items-center flex-col">
                <div className="relative z-10">
                    <img src={search} alt="" className=""/>
                    <h1 className="font-medium text-sm text-journalist-gray-200">Find More</h1>
                </div>
                <div className="absolute inset-0 bg-journalist-red-error searchAnim cursor-pointer"></div>
            </div>
            </div>
        </div>
    )
}