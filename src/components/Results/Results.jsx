import TimeBar from "../Questions/TimeBar"
import ActionButtons from "./ActionButtons"
import CompletionText from "./CompletionText"


function Results() {
  return (
    <div className="flex flex-col h-[100vh]  w-[80vw] min-w-[360px] max-w-[1024px] mx-auto">
        <TimeBar useTime={[0]}/>
        <CompletionText/>
        <ActionButtons/>
    </div>
  )
}

export default Results