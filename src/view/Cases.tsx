import JournalistButton from "../components/JournalistButton"
import ReportButton from "../components/ReportButton"

export default function Cases() {
    const CasesList = [
        {
            totalCases: 99,
            title: "Imprisoned"
        },
        {
            totalCases: 84,
            title: "Missing"
        },
        {
            totalCases: 56,
            title: "Exeuted"
        },
    ]

    return (
        <div className="px-5 jdm:px-10">
            <div className="flex flex-wrap justify-between border-b border-journalist-border-default pb-10 jdl:pb-25 mb-5 jdl:mb-10 gap-y-12 jdl:px-22.25">
                {CasesList.map((item, i) => (
                    <div key={i} className="flex relative">
                        <h1 className="absolute -top-12 font-semibold text-journalist-xl jdm:text-9xl text-journalist-gray-100 z-0">{item.totalCases}</h1>
                        <h1 className="font-semibold text-xl jdm:text-3xl relative z-10 text-journalist-red-error">{item.title}</h1>
                    </div>
                ))}
            </div>
            <div>
                <p className="text-journalist-gray-text font-medium text-sm max-w-110.5">Attacks on journalists and media workers throughout the year, providing a rigorous and trusted source of information on the state of press freedom worldwide.</p>
            </div>
            <div className="flex justify-end gap-2 mt-10 mb-30">
                <JournalistButton title="View All" icon={true} />
                <ReportButton />
            </div>
        </div>
    )
}