import JournalistButton from "../components/JournalistButton"
import ReportButton from "../components/ReportButton"
import gsap from "gsap"
// import { TextPlugin } from "gsap/TextPlugin"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger)

export default function Cases() {
    useGSAP(() => {
        const scrambleElements = document.querySelectorAll(".scramble")
        
        scrambleElements.forEach((element) => {
            const targetValue = element.getAttribute("data-value") || ""
            
            gsap.to(element, {
                duration: 2,
                scrambleText: {
                    text: targetValue,
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
                    delimiter: ""
                },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    once: false
                }
            })
        })
    }, [])

    const CasesList = [
        {
            totalCases: 99,
            title: "Imprisoned"
        },
        {
            totalCases: 84,
            title: "Missing"
        },
        {
            totalCases: 56,
            title: "Executed"
        },
    ]

    return (
        <div className="px-5 jdm:px-10 mt-30">
            <div className="flex flex-wrap justify-between border-b border-journalist-border-default pb-10 jdl:pb-25 mb-5 jdl:mb-10 gap-y-12 jdl:px-22.25">
                {CasesList.map((item, i) => (
                    <div key={i} className="flex relative">
                        <h1 className="scramble absolute -top-12 font-semibold text-journalist-xl jdm:text-9xl text-journalist-gray-100 z-0" data-value={item.totalCases}>0</h1>
                        <h1 className="scramble font-semibold text-xl jdm:text-3xl relative z-10 text-journalist-red-error" data-value={item.title}>{item.title.replace(/./g, " ")}</h1>
                    </div>
                ))}
            </div>
            <div>
                <p className="text-journalist-gray-text font-medium text-sm max-w-110-5">Attacks on journalists and media workers throughout the year, providing a rigorous and trusted source of information on the state of press freedom worldwide.</p>
            </div>
            <div className="flex justify-end gap-2 mt-10 mb-30">
                <JournalistButton title="View All" icon={true} />
                <ReportButton />
            </div>
        </div>
    )
}