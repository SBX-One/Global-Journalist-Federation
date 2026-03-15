import type { JournalistButtonProps } from "../types/types";
import award from "../assets/svg/award.svg"
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function JournalistButton({ title, icon }: JournalistButtonProps) {
    const bgRef = useRef<HTMLSpanElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const iconRef = useRef<HTMLImageElement>(null);

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

        gsap.to(textRef.current, {
            color: "black",
            duration: 0.35,
            ease: "power2.out"
        })

        gsap.to(iconRef.current, {
            filter: "invert(1)",
            duration: 0.35,
            ease: "power2.out"
        }  
    )}

    const handleLeave = () => {
        gsap.to(bgRef.current, {
            yPercent: 100,
            duration: 0.35,
            ease: "power2.out"
        })

        
        gsap.to(textRef.current, {
            color: "white",
            duration: 0.35,
            ease: "power2.out"
        })

        gsap.to(iconRef.current, {
            filter: "invert(0)",
            duration: 0.35,
            ease: "power2.out"
        })
    }

    return (
        <button onMouseEnter={handleEnter} onMouseLeave={handleLeave}className="cursor-pointer relative overflow-hidden bg-black text-white px-5 py-3 flex flex-row gap-3 rounded-full">{icon && <img ref={iconRef} src={award} alt="" className="relative z-10" />} <span ref={bgRef} className="absolute inset-0 bg-white"></span> <span ref={textRef} className="relative z-10">{title}</span></button>
    )
}