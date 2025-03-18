import { useContext } from "react"
import QuizContext from "../Hooks/QuizProvider";
// import AIQContext from "../Hooks/AIQProvider"

function Title() {
    const {quiz} = useContext(QuizContext);

    return (
        <div>
            <h1 className="m-4 text-4xl font-bold">{quiz.category}</h1>
        </div>
    )
}

export default Title