import { createContext, useState } from "react"


const QuizContext = createContext();



export function QuizProvider({children}) {
  
  const [quiz, setQuiz] = useState(JSON.parse(localStorage.getItem('quiz')))
  const [total, setTotal] = useState(0);

    return (
    <QuizContext.Provider value={{quiz, setQuiz, total, setTotal}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContext