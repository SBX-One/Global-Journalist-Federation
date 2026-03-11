import type { ActNowCardProps } from "../types/types"
import arrow from "../assets/svg/arrow-right.svg"
import youtube from "../assets/svg/Youtube.svg"
import twitter from "../assets/svg/akar-icons_twitter-fill.svg"
import linkedin from "../assets/svg/akar-icons_linkedin-fill.svg"
import facebook from "../assets/svg/akar-icons_facebook-fill.svg"

export default function ActNowCard({CardType, title, desc, icon}: ActNowCardProps) {
    const mediaSocialList = [youtube, twitter, linkedin, facebook];

    return (
        <div className="w-full flex-1 jdm:min-w-81 p-5 border border-journalist-border-default min-h-60 flex flex-col justify-between">
            <div className="flex flex-col">
                <img src={icon} alt="icon" className="w-6 jdm:w-12" />
                <h1 className="font-medium text-journalist-md jdm:text-journalist-lg mt-4">{title}</h1>
                <p className="text-sm text-journalist-gray-text">{desc}</p>
            </div>
            {CardType === "button" && <button className="bg-journalist-black text-white px-8 py-4 rounded-full font-semibold text-journalist-md flex ml-auto">Donate</button>}
            {CardType === "link" && 
                <div className="flex items-center gap-2">
                    <img src={arrow} alt="arrow" />
                    <p className="font-semibold text-xl">All The Petition</p>
                </div>
            }
            {CardType === "social" && 
                <div className="flex flex-row gap-2">
                    {mediaSocialList.map((item, index) => (
                        <img src={item} alt="icon" key={index} className="p-4 border border-journalist-border-default rounded-full" />
                    ))}
                </div>
            }
        </div>
    )
}