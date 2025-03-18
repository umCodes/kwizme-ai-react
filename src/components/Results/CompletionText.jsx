import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react";
import QuizContext from "../Hooks/QuizProvider";




function CompletionText() {
    const {total} = useContext(QuizContext);

  return (<>
        <div className="flex flex-col my-auto items-start text-4xl font-bold m-4 gap-4">
            <FontAwesomeIcon icon={faCheckCircle}/>
                <h1> Quiz Completed</h1>
                <p>Result: {total} </p>
            </div>
    </>)
}

export default CompletionText