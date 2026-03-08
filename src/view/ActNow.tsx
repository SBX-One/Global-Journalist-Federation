import ActNowCard from "../components/ActNowCard"
import type { ActNowCardProps } from "../types/types"
import award_red from "../assets/svg/award_red.svg"
import check_square from "../assets/svg/check-square.svg"
import file_text from "../assets/svg/file-text.svg"
import hash from "../assets/svg/hash.svg"
// import twitter from "../assets/svg/akar-icons_twitter-fill.svg"
// import arrow from "../assets/svg/arrow-right.svg"
import { useState } from "react"

export default function ActNow() {
    const [CardType] = useState<"button" | "link" | "social">("button")

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
        <div className="p-5">
            <div className="w-full relative">
                <h1 className="text-journalist-xl font-bold absolute text-center top-9.25 -translate-x-1/2 left-1/2 -right-1/2 text-journalist-red-error">ACT NOW</h1>
                <h1 className="text-journalist-xl font-bold text-center text-journalist-gray-100">ACT NOW</h1>
            </div>

            <div className="flex flex-col mt-20 gap-4">
                {actNowList.map((item, index) => (
                    <ActNowCard key={index} CardType={item.CardType} title={item.title} desc={item.desc} icon={item.icon} />
                ))}
            </div>
            
        </div>
    )
}