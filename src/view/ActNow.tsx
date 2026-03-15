import ActNowCard from "../components/ActNowCard"
import type { ActNowCardProps } from "../types/types"
import award_red from "../assets/svg/award_red.svg"
import check_square from "../assets/svg/check-square.svg"
import file_text from "../assets/svg/file-text.svg"
import hash from "../assets/svg/hash.svg"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useEffect } from "react"

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger)

export default function ActNow() {
    useGSAP(() => {
        // const scrambleElement = document.querySelector(".scramble")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".text1",
                start: "top 80%",
            }
        })

        gsap.from(".text1", {
            duration: 1,
            opacity: 1,
            x: -300,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".text1",
                start: "top 80%",
                once: false
            }
        })
        tl.to(".text2", {
            duration: 1,
            opacity: 0,
            x: 190,
            ease: "power3.out"
        })
        tl.to(".text2", {
            duration: 1,
            opacity: 1,
            delay: 0.33,
            x: -10,
            ease: "power2.out"
        })
    }, [])

    useEffect(() => {
        gsap.set(".text2", {
            opacity: 0
        })
        gsap.set(".text1", {
            opacity: 0
        })
    }) 

    const actNowList: ActNowCardProps[] = [
        {
            title: "Make A Donation",
            desc: "Join the RSF community and fight for free and independent information.",
            icon: award_red,
            CardType: "button"
        },
        {
            title: "Sign Our Petition",
            desc: "Every voice Counts.",
            icon: check_square,
            CardType: "link"
        },
        {
            title: "Register for GJF's newsletter",
            desc: "Stay Informed",
            icon: file_text,
            CardType: "link"
        },
        {
            title: "Follow Us On Social Media",
            desc: "By Sharing, You take action",
            icon: hash,
            CardType: "social"
        }
    ]

    return (
        <div className="p-5 jdm:px-10 mt-40">
            <div className="w-fit mx-auto relative">
                <h1 className="text1 text-journalist-xl font-bold absolute text-center top-9.25 jdl:top-0 jdl:left-48.25 z-10 -translate-x-1/2 left-1/2 -right-1/2 text-journalist-red-error">ACT NOW</h1>
                <h1 className="text2 text-journalist-xl font-bold text-center text-journalist-gray-100 jdl:-left-48.25 relative z-0">ACT NOW</h1>
            </div>

            <div className="flex flex-1 flex-col mt-20 gap-4 flex-wrap jdm:flex-row">
                {actNowList.map((item, index) => (
                    <ActNowCard key={index} CardType={item.CardType} title={item.title} desc={item.desc} icon={item.icon} />
                ))}
            </div>
            
        </div>
    )
}