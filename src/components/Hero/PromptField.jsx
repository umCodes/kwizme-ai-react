import { useContext, useState } from "react";
import PromptBtn from "./PromptBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import QuizContext from "../Hooks/QuizProvider";
import { useNavigate } from "react-router-dom";











function PromptField(){
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false)
    const {setQuiz} = useContext(QuizContext);
    const navigator = useNavigate();

    async function fetchAIRes(){

        if(!prompt) return;

        try {
            
            setLoading(true)
            setPrompt('')
            const response = await fetch(`https://kwizme-backend.onrender.com/api/ai?prompt=${prompt || ''}`);

            if(!response.ok)
                throw new Error("Error")            

            const data = await response.json();
            setLoading(false)
    
            setQuiz(data);
            localStorage.setItem('quiz', JSON.stringify(data))
            navigator('/questions')
    
        } catch (error) {
            setLoading(false)
            console.error('faild fetching data', error);
            
        }

    }


    return(
    <div className="w-fit self-center my-auto">
        <h1 className="text-4xl font-bold mx-2 my-6">Prompt Your Quiz:</h1>
        <div className=" rounded-full p-1.5 bg-gradient-to-l from-purple-500 to-sky-600 w-[60vw] max-w-[540px] min-w-[340px]">
            <div className="relative z-20 flex justify-between  bg-gray-200 w-full rounded-full p-1.5">
                <input 
                    type="text"
                    placeholder="Enter Category"
                    className="text-black outline-0 w-[80%] text-lg px-2 z-20"
                    maxLength={30}
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                />
                <PromptBtn fetchAIRes={fetchAIRes} loading={loading}/>
            </div>    
        </div>
        <span className="flex items-center gap-1.5 my-1 mx-4 text-gray-400 w-fit justify-center ml-auto"><FontAwesomeIcon icon={faStar}/> Powered By Gemini</span>

    
    </div>
    )
}


export default PromptField;