import report_icon from "../assets/svg/report_icon.svg" 
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"

export default function ReportButton() {
    const bgRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        gsap.set(bgRef.current, {
            yPercent: 100
        })
    }, [])
    
    const handleEnter = () => {
        gsap.to(bgRef.current, {
            yPercent: 0,
            duration: 0.35,
            ease: "power2.out"
        })
    }
    const handleLeave = () => {
        gsap.to(bgRef.current, {
            yPercent: 100,
            duration: 0.35,
            ease: "power2.out"
        })
    }

    return (
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="cursor-pointer relative overflow-hidden bg-journalist-report-surface text-journalist-red-error px-5 py-3 flex flex-row gap-3 rounded-full"><img src={report_icon} className="relative z-10" alt="" /><span ref={bgRef} className="absolute inset-0 bg-red-200"></span> <span className="relative z-10">Report</span></button>
    )
}