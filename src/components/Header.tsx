import logo from "../assets/svg/logo.svg"
import search from "../assets/svg/search.svg"
import burger from "../assets/svg/burger.svg"

export default function Header() {
    return (
        <div className="px-5 py-10">
            <div className="flex flex-row justify-between">
                <img src={logo} alt="" />
                <div className="flex flex-row">
                    <img src={search} alt="" />
                    <img src={burger} alt="" />
                </div>
            </div>
        </div>
    )
}