import type { LatestNewsCardProps } from "../types/types"
import LatestNewsCard from "../components/LatestNewsCard"
import { useState } from "react"

import LatestNews_1 from "../assets/png/news_1.png"
import LatestNews_2 from "../assets/png/news_2.png"
import LatestNews_3 from "../assets/png/news_3.png"
import LatestNews_4 from "../assets/png/news_4.png"
import LatestNews_5 from "../assets/png/news_5.png"
import LatestNews_6 from "../assets/png/news_6.png"
import Search from "../assets/svg/search.svg";
import ChevronDown from "../assets/svg/fi_chevron-down.svg";

export default function LatestNews() {
    const [isCountryOpen, setIsCountryOpen] = useState<boolean>(false)
    const [selectedCountry, setSelectedCountry] = useState<string>("Country")
    const [isDateOpen, setIsDateOpen] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState<string>("Date")

    const LatestNewsList: LatestNewsCardProps[] = [
        {
            image: LatestNews_1,
            title: "Assad’s Archive of Death.",
            desc: "Photographs of more than 10,000 regime victims capture a campaign of torture and mass murder in haunting, meticulous detail.",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
        {
            image: LatestNews_2,
            title: "Frequently asked questions about the Damascus Dossier investigation.",
            desc: "A trove of leaked records provides new evidence of thousands of Assad regime killings — and a chance for closure for families. ",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
        {
            image: LatestNews_3,
            title: "After 13 years of searching, a Syrian man learns his brother’s fate..",
            desc: "For over a decade, U.N. aid agencies poured millions into the company despite warnings from human rights advocates.",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
        {
            image: LatestNews_4,
            title: "WATCH: Damascus Dossier exposes the Assad regime’s killing machine..",
            desc: "Photographs of more than 10,000 regime victims capture a campaign of torture and mass murder in haunting, meticulous detail.",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
        {
            image: LatestNews_5,
            title: "About the Damascus Dossier investigation..",
            desc: "An exposé into Assad’s vast system for the detention, torture and murder of Syrian citizens — and the international forces that financed his regime.",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
        {
            image: LatestNews_6,
            title: "Inside the Damascus Dossier: From leaked images to verified data..",
            desc: "GJF and its partners organized and analyzed thousands of chilling photographs to assemble comprehensive victim lists and quantify the human toll behind a sensitive data leak.",
            name: "Damascus Dossier",
            theme: "Human Rights",
            location: "Middle East"
        },
    ]

    const countryList = [
        "Middle East",
        "Africa",
        "Asia",
        "Europe",
        "North America",
        "South America",
    ]

    const dateList = [
        "2020",
        "2021",
        "2022",
        "2023",
    ]

    const handleCountrySelect = (item: string) => {
        setSelectedCountry(item)
        setIsCountryOpen(false)
    }

    const handleDateSelect = (item: string) => {
        setSelectedDate(item)
        setIsDateOpen(false)
    }

    return (
        <div className="px-5 mt-40">
            <div className="mb-10">
                <div className="">
                    <img src={Search} alt="" className="absolute" />
                    <input type="text" placeholder="Search" className="w-full py-4.25 pl-15 border rounded-xl border-journalist-border-default" />
                </div>
                <div className="flex flex-row w-full gap-2 mt-4">
                    <div className="relative flex-1">
                        <img src={ChevronDown} className="absolute left-25 top-1/2 -translate-y-1/2 h-6 w-6" alt="" />
                        <button onClick={() => setIsCountryOpen(!isCountryOpen)} className="py-4.25 w-full flex pl-6  border border-journalist-border-default rounded-xl text-journalist-text-default font-thin">
                            {selectedCountry}
                        </button>
                        {isCountryOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-xl border-journalist-border-default shadow-lg z-10">
                                {countryList.map((item, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => handleCountrySelect(item)}
                                        className="w-full py-3 px-4 text-left hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="relative flex-1">
                        <img src={ChevronDown} className="absolute left-20 top-1/2 -translate-y-1/2 h-6 w-6" alt="" />
                        <button onClick={() => setIsDateOpen(!isDateOpen)} className="py-4.25 w-full flex pl-6 border border-journalist-border-default rounded-xl text-journalist-text-default">
                            {selectedDate}
                        </button>
                        {isDateOpen && (
                            <div className="absolute top-full left-0 w-full mt-1 bg-white  rounded-xl shadow-lg z-10">
                                {dateList.map((item, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => handleDateSelect(item)}
                                        className="w-full py-3 px-4 text-left hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="gap-4 flex flex-col">
                {LatestNewsList.map((item, i) => (
                    <div key={i}>
                        <LatestNewsCard image={item.image} title={item.title} desc={item.desc} name={item.name} theme={item.theme} location={item.location} />
                    </div>
                ))}
            </div>
        </div>
    )
}