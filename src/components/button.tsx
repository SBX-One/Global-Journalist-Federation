import type { ButtonProps } from "../types/types";
import arrow from "../assets/svg/arrow.svg";

export default function Button({ text, onClick, variant = "outline"}: ButtonProps) {
    const variants = {
        base:
            "bg-monica-primary-500 text-black hover:bg-monica-primary-700 active:bg-[#303030] disabled:opacity-20",
        outline:
            "outline outline-1 outline-monica-neutral-700 text-white hover:bg-monica-neutral-800 active:bg-monica-neutral-600 disabled:opacity-20",
        };

        const baseClass = "w-fit flex flex-row items-center px-6 py-[13px] rounded-full";


    return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
        <img src={arrow} alt="arrow" />
        <span className="mx-2 monica-p16-semi-bold">{text}</span>
        <img src={arrow} alt="arrow" />
    </button>
    );
}