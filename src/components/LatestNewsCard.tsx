import type { LatestNewsCardProps } from "../types/types"

export default function LatestNewsCard({image, title, desc, name, theme, location}:LatestNewsCardProps ) {
    return (
        <div>
            <img src={image} alt="image" className="w-full min-h-70  object-cover" />
            <div className="flex flex-row gap-4 text-sm text-journalist-gray-text font-medium underline my-4">
                <p>{name}</p>
                <p>{theme}</p>
                <p>{location}</p>
            </div>
            <h1 className="font-medium text-journalist-md mb-8">{title}</h1>
            <p className="font-medium text-journalist-gray-text text-journalist-md">{desc}</p>
        </div>
    )
}