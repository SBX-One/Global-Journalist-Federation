import arrow from "../assets/svg/fi_arrow-up-right.svg";

export default function ActingNow() {
    return (
        <div className="px-5">
            <div className="font-bold pb-9.25">
                <h1 className="text-[25px] text-center text-journalist-gray-100">GET INFORMED GET FREEDOM</h1>
                <h1 className="text-journalist-red-error text-[30px] text-center">ACTING NOW AND TOGETHER</h1>
            </div>

            <div>
                <h1 className="font-medium text-journalist-md text-center mb-6 mt-4">Stay informed, register for RSF's newsletter</h1>
                <div className="flex flex-row gap-2">
                    <input type="email" placeholder="Your email addres" className="bg-white border-2 border-journalist-border-default w-full h-14 rounded-2xl pl-6" />
                    <img src={arrow} alt="" className="bg-black h-14 w-14 p-4 rounded-full" />
                </div>
            </div>
        </div>
    )
}