import type { LatestFromUsCardProps } from "../types/types"
import gsap from "gsap"
import arrow from "../assets/svg/arrow-right.svg";
import { useEffect } from "react";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

export default function LatestFromUsCard({title, desc, image, date, name, jabatan}: LatestFromUsCardProps) {
    
    const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        gsap.to(btn.querySelector(".questionMark"), {
            x: 45,
            y: 0,
            opacity : 1,
            rotation: -40,
            duration: 0.35,
            ease: "power3.out"
        })

        gsap.to(btn.querySelector(".ReadAnim"), {
            x: -10,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        gsap.to(btn.querySelector(".questionMark"), {
            x: 0,
            rotation: 0,
            opacity : 0,
            duration: 0.35,
            ease: "power3.out"
        })

        gsap.to(btn.querySelector(".ReadAnim"), {
            x: 0,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    useGSAP(() => {
        const elements = document.querySelectorAll<HTMLElement>(".scrambleAnim")
        const titleElements = document.querySelectorAll(".titleAnim")

        elements.forEach((el: HTMLElement) => {
            gsap.to(el, {
            duration: 2,
            scrambleText: {
                text: el.textContent ?? "",
                chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                delimiter: ""
            },
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
            }
            })
        })

        titleElements.forEach((el) => {
            gsap.to(el, {
                xPercent: 100,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    once: false
                }
            })
        })

        gsap.to(".pixel", {
            opacity: 0,
            scale: 0,
            duration: 1,
            stagger: {
                amount: 1.2,
                from: "start"
            },
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".pixel",
                start: "top 80%",
                once: false
            }
        })
    }, [])

    useEffect(() => {
        gsap.set(".questionMark", {
            opacity: 0
        })

        gsap.set(".ReadAnim", {
            xPercent: 0
        })
    })

    return (
        <div className="py-10 jdl:py-0 flex flex-row-reverse justify-between gap-4">
            <div>
                <img src={image} alt="" className="max-jdl:hidden min-w-170.5" />
                <div className="pixelGrid absolute inset-0 grid grid-cols-10 grid-rows-10 z-10">
                    {Array.from({ length: 100}).map((_, i) => (
                        <div key={i} className="bg-white pixel" />
                    ))}
                </div>
            </div>
            <div className="flex flex-col jdl:p-10">
                <div className="flex flex-row gap-4">
                    <img src={image} alt="image" className="w-16 h-auto object-cover jdl:hidden" />
                    <div className="relative overflow-hidden">
                        <h1 className="font-medium text-lg jdm:text-2xl ">{title}</h1>
                        <div className="titleAnim bg-white border-l-10 border-black absolute w-full h-full top-0"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div className="flex flex-row font-medium text-sm jdm:text-md text-journalist-gray-text">
                        <p className="scrambleAnim pr-4 border-r border-journalist-border-default underline">{name}</p>
                        <p className="scrambleAnim ml-4">{jabatan}</p>
                    </div>
                    <p className="font-medium text-journalist-gray-text scrambleAnim">{date}</p>
                </div>
                <p className="scrambleAnim font-medium text-journalist-gray-text text-sm my-10 jdl:my-15 jdl:max-w-125">{desc}</p>

                <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="cursor-pointer px-5 py-3 border-2 flex-row hover:bg-gray-300 transition-all duration-300 border-journalist-border-default rounded-full max-w-36.75 justify-center flex ml-auto jdm:ml-0 font-medium relative"><span className="questionMark absolute translate-y-1/2"><img src={arrow} className="w-6 h-6 transalte-y-1/2" alt="read more" /></span><span className="relative ReadAnim">Read More</span></button>
            </div>
        </div>
    )
}