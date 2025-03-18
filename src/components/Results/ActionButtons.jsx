import { faList, faRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Link } from "react-router-dom"
import QuizContext from "../Hooks/QuizProvider"

function ActionButtons() {
    const {setTotal} = useContext(QuizContext);

    return (

    <div className="font-bold text-lg p-4">
        <Link className="border p-4 m-4 rounded flex items-center gap-4" to='/questions' onClick={() => setTotal(0)}>
            <FontAwesomeIcon icon={faRotate}/> Restart 
        </Link>
        <Link className="border p-4 m-4 rounded flex items-center gap-4" to='/' onClick={() => setTotal(0)} >
            <FontAwesomeIcon icon={faList}/> Menu
        </Link>
    </div>)
}

export default ActionButtons