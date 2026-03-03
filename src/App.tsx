import Button from "./components/button"

export default function App() {
  return (
    <div>
      <Button text="click me" onClick={() => console.log("clicked")}></Button>
      <h1 className="font-family-sans text-display">hello</h1>
    </div>
  )
}