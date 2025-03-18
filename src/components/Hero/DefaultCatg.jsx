import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizContext from "../Hooks/QuizProvider";






function DefaultCatg(){

    const [defaultQuiz, setDefaultQuiz] = useState(null)
    const {setQuiz} = useContext(QuizContext); 
    
    async function fetchDefaultRes(){
        try {
            const response = await fetch("https://kwizme-backend.onrender.com/default");

            if(!response.ok)
                throw new Error("Error")            

            const data = await response.json();
            
            console.log(data.questions);
            
            setDefaultQuiz(data.questions)
    
        } catch (error) {
            console.error('faild fetching data', error);
            
        }
    }

    function assignQuiz(key){
        setQuiz(defaultQuiz[key])
        localStorage.setItem('quiz', JSON.stringify(defaultQuiz[key]))

    }

    useEffect(()=>{        
        fetchDefaultRes()

    }, [])


    const defaultQuizList = defaultQuiz && Object.keys(defaultQuiz).map(key => {
        return <p key={key} onClick={() => assignQuiz(key)}><Link to="/questions"  className="underline text-xl mx-4">{defaultQuiz[key].category}</Link></p> 
    })


    

    
    return(
        <>
            <div className="ml-12 mb-12">
                <h1 className="font-bold text-xl mx-2">Try These:</h1>            
                {defaultQuizList}
            </div>
        </>
    )
}


export default DefaultCatg;