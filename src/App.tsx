import HomePage from "./view/HomePage"
import Highlight from "./view/Highlight"
import Cases from "./view/Cases"
import Figure from "./view/Figure"
import ActNow from "./view/ActNow"
import LatestFromUs from "./view/LatestFromUs"
import ActingNow from "./view/ActingNow"
import LatestNews from "./view/LatestNews"
import Footer from "./view/footer"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <HomePage />
      <Highlight />
      <Cases />
      <Figure />
      <ActNow />
      <LatestFromUs />
      <ActingNow />
      <LatestNews />
      <Footer />
    </div>
  )
}