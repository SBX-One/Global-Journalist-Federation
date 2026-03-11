import type { LatestFromUsCardProps } from "../types/types"

export default function LatestFromUsCard({title, desc, image, date, name, jabatan}: LatestFromUsCardProps) {
    return (
        <div className="border-b py-10 jdl:py-0 border-journalist-border-default flex flex-row-reverse justify-between gap-4">
            <img src={image} alt="" />
            <div className="flex flex-col jdl:p-10">
                <div className="flex flex-row gap-4">
                    <img src={image} alt="image" className="w-16 h-auto object-cover jdl:hidden" />
                    <h1 className="font-medium text-lg jdm:text-2xl ">{title}</h1>
                </div>
                <div className="flex flex-row justify-between mt-8">
                    <div className="flex flex-row font-medium text-sm jdm:text-journalist-md text-journalist-gray-text">
                        <p className="pr-4 border-r border-journalist-border-default underline">{name}</p>
                        <p className="ml-4">{jabatan}</p>
                    </div>
                    <p className="font-medium text-journalist-gray-text">{date}</p>
                </div>
                <p className="font-medium text-journalist-gray-text text-journalist-md my-10 jdl:my-15 jdl:max-w-125">{desc}</p>

                <button className="px-5 py-3 border-2 hover:bg-gray-200 border-journalist-border-default rounded-full max-w-36.75 justify-center flex ml-auto jdm:ml-0 font-medium">Read More</button>
            </div>
        </div>
    )
}