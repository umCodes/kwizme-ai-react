import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Timer({useTime}) {
    const [timeCount, setTimeCount] = useTime
    const navigator =  useNavigate();
    function Timer(){
        
        setTimeout(()=> {
            if(timeCount > 0)
                setTimeCount(timeCount - 1)
        }, 1000)
    }

   useEffect(()=>{
        Timer()
        if(timeCount === 0) navigator('/results')

   }) 
    return (
    <div className="text-center w-16 px-2 py-1 rounded bg-[#5B2268] m-4 font-bold text-lg">{timeCount}s</div>
  )
}

export default Timer