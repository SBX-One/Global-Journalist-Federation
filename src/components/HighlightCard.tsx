import type { HighlightProps } from "../types/types";
import Highlight_1 from "../assets/png/Highlight_1.png"
import Highlight_2 from "../assets/png/Highlight_2.png"
import Highlight_3 from "../assets/png/Highlight_3.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HighLightCard() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            defaults: { ease: "power3.out", duration: 1 }
        });

        tl.from(".highlight-card", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
        })
    }, { scope: container })

    const HighLightList: HighlightProps[] = [
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "Singapore authorities must lift arbitrary edict blocking Asia Sentinel websit2.",
            image: Highlight_2
        },
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "Self-exiled journalist Terry Xu targeted by abusive lawsuits again.",
            image: Highlight_1
        },
        {
            date: "2 feb 2026",
            country: "Singapore",
            desc: "GJF website now in Mandarin, bringing trustworthy news on press freedom to over one billion Chinese speakers.",
            image: Highlight_3
        }
    ]
    
    return (
        <div ref={container} className="mt-20 jdm:px-10">
            <div>
                <div className="flex flex-wrap gap-y-10 gap-4">
                    <div className="jdm:block hidden min-w-81 flex-1">
                        <h1 className="text-md font-medium">Highlight</h1>
                    </div>
                    {HighLightList.map((item, i) => (
                        <div className="highlight-card flex-1 min-w-81" key={i}>
                            <div className="flex items-center justify-between pb-6 border-b border-journalist-gray mb-4 px-5">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-journalist-green rounded-full"></div>
                                    <h1 className="font-medium text-sm">{item.country}</h1>
                                </div>
                                <h1>{item.date}</h1>
                            </div>
                            <img src={item.image} alt="" className={`w-full object-cover jdm:object-right ${i === 1 ? 'jdm:h-125 h-auto' : 'h-auto'}`} />
                            <h1 className="px-5 font-medium text-sm text-journalist-gray-text mt-4 mb-5">{item.desc}</h1>
                            <button className=" jdm:hidden px-5 font-bold text-sm border py-3 rounded-full flex ml-auto mx-5 border-journalist-gray-text mb-10">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
