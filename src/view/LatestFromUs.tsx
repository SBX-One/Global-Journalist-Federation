import type { LatestFromUsCardProps } from "../types/types"
import LatestFromUs_1 from "../assets/png/LatestFromUs_1.png"
import LatestFromUs_2 from "../assets/png/LatestFromUs_2.png"
import LatestFromUs_3 from "../assets/png/LatestFromUs_3.png"
import LatestFromUsCard from "../components/LatestFromUsCard"

export default function LatestFromUs() {
    const LatestFromUsList: LatestFromUsCardProps[] = [
        {
            title: "Beijing’s backtrack on Xinjiang detention camps spurred.",
            desc: "Academic research shows that investigative reporting, NGO advocacy, and scholarly scrutiny pushed Chinese authorities from denial to dismantling parts of their mass detention system for Uyghurs.",
            image: LatestFromUs_1,
            date: "February 4, 2026",
            name: "Fergus Shiel",
            jabatan: "Reporter"
        },
        {
            title: "Asian Financial hubs are reshaping Africa’s offshore economy.",
            desc: "Academic research shows that investigative reporting, NGO advocacy, and scholarly scrutiny pushed Chinese authorities from denial to dismantling parts of their mass detention system for Uyghurs.",
            image: LatestFromUs_2,
            date: "January 29, 2026",
            name: "Carmen Molina Acosta",
            jabatan: "Reporter"
        },
        {
            title: "New EU report urges more aggressive action against transnational repression.",
            desc: "The report cites ICIJ’s China Targets investigation and calls for improved coordination across the bloc.",
            image: LatestFromUs_3,
            date: "February 4, 2026",
            name: "Fergus Shiel",
            jabatan: "Reporter"
        },
    ]

    return (
        <div className="px-5 jdm:px-10">
            <div className="flex flex-row justify-between pb-6 border-b border-journalist-border-default">
                <h1 className="text-journalist-md font-medium">Latest From Us</h1>
                <h1 className="text-journalist-red-error font-medium underline text-journalist-md">See More</h1>
            </div>

            <div className="flex flex-col gap-4 mb-40">
                {LatestFromUsList.map((item, index) => (
                    <LatestFromUsCard key={index} title={item.title} desc={item.desc} image={item.image} date={item.date} name={item.name} jabatan={item.jabatan} />
                ))}
            </div>
            
        </div>
    )
}