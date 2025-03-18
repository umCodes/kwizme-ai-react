import { useContext, useState } from "react";
// import AIQContext from "../Hooks/AIQProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import QuizContext from "../Hooks/QuizProvider";









function Choices({question, useIndex, length}) {
    const choices = question.choices;
    const [showAnswer, setShowAnswer] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [index, setIndex] = useIndex;

    const {total, setTotal} = useContext(QuizContext)
    
    const navigator = useNavigate();
    function next(){
        if(index < length - 1) setIndex(index + 1)
        else
            navigator('/results')
        
            
    }

    const handleClick = (value) =>{
        
        if(clicked) return;
                        
        setClicked(true)         
        setShowAnswer(true)   
        setTotal(total + value)            
        setTimeout(()=>{
            setShowAnswer(false)
            next()      
            setClicked(false)                        
        }, 1000)
    }
  return (
    <div className="flex flex-wrap py-4 justify-center mx-auto">
        {choices && choices.map(c => 
            <p className={"grid [grid-template-columns:6fr_1fr] items-center justify-center max-w-[45%] min-w-[45%] gap-4 border bg-white p-4 m-2 rounded text-black "}
             key={c.answer + c.value}
            onClick={() => handleClick(c.value)}
            >
                {c.answer}
                {showAnswer && (c.value ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faMultiply}/>)}    
            </p> )
        }
    </div>
  )
}

export default Choices