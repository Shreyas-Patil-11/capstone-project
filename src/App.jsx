import InputData from "./Components/InputData"
import OutputData from "./Components/OutputData"


function App() {


  return (
    <>
      <h1 className="head-text text-center mt-4 mb-8">Generate Text in Anyone&apos;s Handwritting</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <InputData />
        <OutputData />
      </div>
    </>
  )
}

export default App
