import logo from "../assets/svg/logo_white.svg"
import chevron from "../assets/svg/fi_chevron-down_white.svg"

import Youtube from "../assets/svg/Youtube_white.svg"
import Linked from "../assets/svg/Linkedin_white.svg"
import twitter from "../assets/svg/twitter+white.svg"
import fb from "../assets/svg/facebook_white.svg"

export default function Footer() {
    const linkList = [Youtube, Linked, twitter, fb]

    return (
        <div className="bg-journalist-black text-white relative object-cover overflow-hidden px-5 jdl:p-38.75 mt-60">
            <div className="relative z-10 px-5 flex jdl:flex-row flex-col  jdl:justify-between">
                <div className="flex flex-row gap-4 pt-15">
                    <img src={logo} alt="" className="jdl:max-w-13.75 max-w-6 shrink-0 relative jdl:bottom-15" />
                    <h1 className="font-medium jdl:text-[40px] text-journalist-gray-200 jdl:max-w-90 max-w-48.75">Global Journalist Federation</h1>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl jdl:text-[40px] font-medium flex flex-col gap-5 mt-16 mb-5">
                        <h1>Contact Us</h1>
                        <div className="flex flex-row gap-4">
                            <h1 className="jdl:w-76.75">Our Publication</h1>
                            <img src={chevron}  alt="chevron" />
                        </div> 
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-journalist-gray-text mb-4">Follow Us</h2>
                        <div className="flex flex-row gap-2">
                            {linkList.map((item, i) => (
                                <div key={i} className="p-4 rounded-full border border-b-journalist-border-icon w-fit">
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-medium text-xs jdl:text-md jdl:max-w-102.5 mt-23.5 pb-13 z-10 relative">© 2026 — The International Consortium of Investigative Journalists. All rights reserved.</p>
            </div>
            <div className="jdl:bottom-10 relative jdl:-right-55.75">
                <div className="bg-journalist-red-error w-22.5 jdl:w-44.75 jdl:h-44.75 h-22.5 absolute bottom-5 z-0 jdl:right-28 right-5"></div>
                <div className="bg-journalist-red-error w-22.5 h-22.5 jdl:w-44.75 jdl:h-44.75 absolute bottom-27.5 jdl:bottom-49 z-0 -right-16.5"></div>
                <div className="bg-journalist-red-error w-22.5 h-22.5 jdl:w-44.75 jdl:h-44.75 absolute -bottom-16.5 jdl:-bottom-39 z-0 jdl:right-72 right-27.5"></div>
            </div>
            <div className="bg-journalist-red-error w-25 h-25 absolute left-0 top-0 max-jdl:hidden"></div>
        </div>
    )
}