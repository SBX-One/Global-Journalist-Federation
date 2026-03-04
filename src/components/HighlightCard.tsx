import type { HighlightProps } from "../types/types";
import Highlight_1 from "../assets/png/Highlight_1.png"
import Highlight_2 from "../assets/png/Highlight_2.png"
import Highlight_3 from "../assets/png/Highlight_3.png"

export default function HighLightCard() {

    const HighLightList: HighlightProps[] = [
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "Singapore authorities must lift arbitrary edict blocking Asia Sentinel websit2.",
            image: Highlight_1
        },
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "Self-exiled journalist Terry Xu targeted by abusive lawsuits again.",
            image: Highlight_2
        },
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "GJF website now in Mandarin, bringing trustworthy news on press freedom to over one billion Chinese speakers.",
            image: Highlight_3
        }
    ]

    return (
        <div className="mt-20"> 
            <div>
                <div>
                    {HighLightList.map((item, i) => (
                        <div key={i}>
                            <div className="flex items-center justify-between pb-6 border-b border-journalist-gray mb-4 px-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-journalist-green rounded-full"></div>
                                    <h1 className="font-medium text-sm">{item.country}</h1>
                                </div>
                                <h1>{item.date}</h1>
                            </div>
                            <img src={item.image} alt="" />
                            <h1 className="px-5 font-medium text-sm text-journalist-gray-text mt-4 mb-5">{item.desc}</h1>
                            <button className="px-5 font-bold text-sm border py-3 rounded-full flex ml-auto mx-5 border-journalist-gray-text mb-10">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}