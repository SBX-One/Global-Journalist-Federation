import logo from "../assets/svg/logo.svg"
import search from "../assets/svg/search.svg"
import burger from "../assets/svg/burger.svg"
import arrow from "../assets/svg/fi_arrow-right.svg"
import gsap from "gsap"
import { useEffect } from "react"

export default function Header() {
    const navbarMenu = ["About Us", "Our Program", "News"];

    const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const bg = e.currentTarget.querySelector(".nav-bg")

        gsap.to(bg, {
            yPercent: 0,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const bg = e.currentTarget.querySelector(".nav-bg")

        gsap.to(bg, {
            yPercent: 100,
            duration: 0.35,
            ease: "power3.out"
        })
    }

    useEffect(() => {
        gsap.set(".nav-bg", {
            yPercent: 100
        })
    }, [])

    return (
        <div className="px-5 py-10">
            <div className="flex justify-between">

                <img src={logo} alt="" />

                <div className="flex gap-4 ml-10 max-jdm:hidden cursor-pointer">
                    {navbarMenu.map((item, i) => (
                        <div
                            key={i}
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                            className="relative overflow-hidden flex gap-2 py-2 px-3 rounded-full items-center border border-journalist-border-default"
                        >
                            <span className="nav-bg absolute inset-0 bg-journalist-gray-200" />

                            <p className="relative z-10 font-medium text-md">
                                {item}
                            </p>

                            <img
                                src={arrow}
                                alt={item}
                                className="relative z-10 w-4 h-4"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <img src={search} alt="" />
                    <img src={burger} alt="" />
                </div>

            </div>
        </div>
    )
}