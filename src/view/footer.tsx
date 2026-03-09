import logo from "../assets/svg/logo_white.svg"
import chevron from "../assets/svg/fi_chevron-down_white.svg"

import Youtube from "../assets/svg/Youtube_white.svg"
import Linked from "../assets/svg/Linkedin_white.svg"
import twitter from "../assets/svg/twitter+white.svg"
import fb from "../assets/svg/facebook_white.svg"

export default function Footer() {
    const linkList = [Youtube, Linked, twitter, fb]

    return (
        <div className="bg-journalist-black text-white relative object-cover overflow-hidden px-5 mt-60">
            <div className="relative z-10 px-5">
                <div className="flex flex-row gap-4 pt-15">
                    <img src={logo} alt="" />
                    <h1 className="font-medium text-journalist-gray-200 max-w-48.75">Global Journalist Federation</h1>
                </div>
                <div className="text-2xl font-medium flex flex-col gap-5 mt-16 mb-5">
                    <h1>Contact Us</h1>
                    <div className="flex flex-row gap-4 ">
                        <h1>Our Publication</h1>
                        <img src={chevron} className="fill-white" alt="chevron" />
                    </div>
                </div>
                <div>
                    <h2 className="text-sm font-medium text-journalist-gray-text mb-4">Follow Us</h2>
                    <div className="flex flex-row gap-2">
                        {linkList.map((item, i) => (
                            <div key={i} className="p-4 rounded-full border-2 border-b-journalist-gray-text w-fit">
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p className="font-medium text-xs mt-23.5 pb-13 z-10 relative">© 2026 — The International Consortium of Investigative Journalists. All rights reserved.</p>
            </div>
            <div>
                <div className="bg-journalist-red-error w-22.5 h-22.5 absolute bottom-5 z-0 right-5"></div>
                <div className="bg-journalist-red-error w-22.5 h-22.5 absolute bottom-27.5 z-0 -right-16.5"></div>
                <div className="bg-journalist-red-error w-22.5 h-22.5 absolute -bottom-16.5 z-0 right-27.5"></div>
            </div>
        </div>
    )
}