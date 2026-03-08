import report_icon from "../assets/svg/report_icon.svg" 

export default function ReportButton() {
    return (
        <button className="bg-journalist-report-surface text-journalist-red-error px-5 py-3 flex flex-row gap-3 rounded-full"><img src={report_icon} alt="" />Report</button>
    )
}