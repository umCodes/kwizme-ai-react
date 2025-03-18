import { useContext, useState } from "react";
// import AIQContext from "../Hooks/AIQProvider";
import Choices from "./Choices";
import QuizContext from "../Hooks/QuizProvider";




function Question() {
    const [index, setIndex] = useState(0)
    const {quiz} = useContext(QuizContext); 
    const question = quiz.questions[index];
    const length = quiz.questions.length;


    return (
    <div className="text-xl my-auto m-3 w-full self-center">
        <h2 className="font-bold">Question {index + 1}/{length}: </h2>
        <h2 className="m-1">
            {question.question}
        </h2>
        <Choices question={question} useIndex={[index, setIndex]} length={length}/>

    </div>
  )
}

export default Question

