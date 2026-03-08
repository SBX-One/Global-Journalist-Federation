import type { JournalistButtonProps } from "../types/types";
import award from "../assets/svg/award.svg"


export default function JournalistButton({ title, icon }: JournalistButtonProps) {
    return (
        <button className="bg-black text-white px-5 py-3 flex flex-row gap-3 rounded-full">{icon && <img src={award} alt="" />}{title}</button>
    )
}