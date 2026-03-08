import type { LatestFromUsCardProps } from "../types/types"

export default function LatestFromUsCard({title, desc, image, date, name, jabatan}: LatestFromUsCardProps) {
    return (
        <div className="border-b py-10 border-journalist-border-default">
            <div className="flex flex-row gap-4">
                <img src={image} alt="image" className="w-16 h-auto object-cover" />
                <h1 className="font-medium text-lg ">{title}</h1>
            </div>
            <div className="flex flex-row justify-between mt-8 mb-10">
                <div className="flex flex-row font-medium text-sm text-journalist-gray-text">
                    <p className="pr-4 border-r border-journalist-border-default underline">{name}</p>
                    <p className="ml-4">{jabatan}</p>
                </div>
                <p className="font-medium text-journalist-gray-text">{date}</p>
            </div>
            <p className="font-medium text-journalist-gray-text">{desc}</p>

            <button className="px-5 py-3 border-2 hover:bg-gray-200 border-journalist-border-default rounded-full mt-10 flex ml-auto font-semibold">Read More</button>
        </div>
    )
}