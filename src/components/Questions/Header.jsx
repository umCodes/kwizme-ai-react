import { useRef, useState } from "react"
import Timer from "./Timer"
import TimeBar from "./TimeBar" 
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"

function Header({iTime}) {  
    const initialTime = useRef(iTime)
    const [timeCount, setTimeCount] = useState(initialTime.current)
  
    return (
    <div>
        <TimeBar useTime={{timeCount, setTimeCount, iTime}}/>
        <div className="flex justify-between items-center p-4">
            <Link to="/kwizme-ai-react" className="font-bold text-xl underline">
                <FontAwesomeIcon icon={faList}/> Menu
            </Link>
            <Timer useTime={[timeCount, setTimeCount]}/>
        </div>        
    </div>
  )
}

export default Header