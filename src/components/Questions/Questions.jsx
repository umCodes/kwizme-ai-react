// import { AIQProvider } from "../Hooks/AIQProvider"
import { useContext } from "react"
import Header from "./Header"
import Question from "./Question"
import Title from "./Title"
import QuizContext from "../Hooks/QuizProvider"




function Questions() {  
    const quiz = useContext(QuizContext).quiz
    const iTime =  (quiz.questions.length) * Math.floor(220/25)
  return (    
    <div className="flex flex-col h-[100vh] w-[80vw] min-w-[360px] max-w-[1024px] mx-auto">
        
            <Header iTime={iTime} />
            <Title />
            <Question />

    </div>
    )
}

export default Questions