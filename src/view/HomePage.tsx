import Header from "../components/Header";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import type { HighlightProps } from "../types/types";

export default function HomePage() {
    const container = useRef<HTMLDivElement>(null);
 
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        
        tl.from(".hero-text", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
        })
        .from(".hero-box", {
            scale: 0.8,
            opacity: 0,
            duration: 1.2
        }, "-=0.5");

    }, { scope: container })

    return (
        <div ref={container} className="overflow-hidden jdm:px-10">
            <Header />

            <div className="px-5 flex flex-col gap-4 mt-10">
                <h1 className="hero-text font-medium text-[40px] jdm:text-journalist-size jdm:max-w-120">Curiosity, Communicate, Freedom.</h1>
                <h1 className="hero-text font-medium text-2xl jdm:text-journalist-size jdm:max-w-81 jdl:max-w-fit jdm:text-right jdm:ml-auto jdm:relative jdm:bottom-14 jdl:bottom-27 text-black/30">Global Journalist Federation</h1>
            </div>
            {/* <div className="hero-box w-20 h-20 bg-journalist-red-error mt-10 ml-5 rounded-lg shadow-lg"></div> */}
        </div>
    )
}