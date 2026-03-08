import figure_1 from "../assets/png/figure_1.png"
import figure_2 from "../assets/png/figure_2.png"
import figure_3 from "../assets/png/figure_3.png"
import search from "../assets/svg/search.svg"

export default function FigureCard() {
    const FigureCardList = [
        {
            title: "Chen Jieren (陈杰人)",
            desc: "Detained - Convicted",
            Image: figure_1
        },
        {
            title: "Chen Shuqing (陈树庆)",
            desc: "Detained - Convicted",
            Image: figure_2
        },
        {
            title: "Dai Zigeng (戴自更)",
            desc: "Detained - Convicted",
            Image: figure_3
        },
    ]

    return (
        <div className="px-5 ">
            <div className="flex flex-wrap justify-between gap-y-10">
                {FigureCardList.map((item, i) => (
                    <div key={i}>
                        <img src={item.Image} alt="image" className="w-45.75 h-56 flex object-cover" />
                        <div className="mt-4">
                            <h1 className="font-medium text-sm">{item.title}</h1>
                            <h1 className="font-medium text-sm text-journalist-gray-text">{item.desc}</h1>
                        </div>
                    </div>
                ))}
            <div className="bg-journalist-gray-300 h-56 w-45.75 flex justify-center items-center flex-col">
                <img src={search} alt="" />
                <h1 className="font-medium text-sm text-journalist-gray-200">Find More</h1>
            </div>
            </div>
        </div>
    )
}