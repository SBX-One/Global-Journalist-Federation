import Header from "../components/Header";
// import type { HighlightProps } from "../types/types";

export default function HomePage() {


    return (
        <div>
            <Header />

            <div className="px-5 flex flex-col gap-4">
                <h1 className="font-medium text-journalist-size">Curiosity, Communicate, Freedom.</h1> {/*tambahin font nanti*/}
                <h1 className="font-medium text-2xl text-black/30">Global Journalist Federation</h1> {/*tambahin font nanti*/}
            </div>
        </div>
    )
}