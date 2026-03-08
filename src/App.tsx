import HomePage from "./view/HomePage"
import Highlight from "./view/Highlight"
import Cases from "./view/Cases"
import Figure from "./view/Figure"
import ActNow from "./view/ActNow"
import LatestFromUs from "./view/LatestFromUs"
import ActingNow from "./view/ActingNow"

export default function App() {
  return (
    <div>
      <HomePage />
      <Highlight />
      <Cases />
      <Figure />
      <ActNow />
      <LatestFromUs />
      <ActingNow />
    </div>
  )
}