import logo from "../assets/svg/logo.svg"
import search from "../assets/svg/search.svg"
import burger from "../assets/svg/burger.svg"
import arrow from "../assets/svg/fi_arrow-right.svg"

export default function Header() {
    const navbarMenu = ["About Us", "Our Program", "News"];

    return (
        <div className="px-5 py-10">
            <div className="flex flex-row justify-between">
                <img src={logo} alt="" />
                <div className="flex flex-row gap-4 ml-10 max-jdm:hidden">
                    {navbarMenu.map((item, i) => (
                        <div key={i} className="flex flex-row gap-2 py-2 px-3 rounded-full items-center border border-journalist-border-default">
                            <p className="font-medium text-journalist-md">{item}</p>
                            <img src={arrow} alt={item} className="w-4 h-4 " />
                        </div>
                    ))}
                </div>
                <div className="flex flex-row">
                    <img src={search} alt="" />
                    <img src={burger} alt="" />
                </div>
            </div>
        </div>
    )
}