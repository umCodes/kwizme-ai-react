import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





function PromptBtn({fetchAIRes, loading}){


    return(
    <>
        <button onClick={fetchAIRes}
            className={`relative flex items-center justify-center border border-black bg-[#18001D] h-12 w-12 rounded-[50%] ${loading && "custom-after"}`}
        >
            <FontAwesomeIcon icon={faRocket} className="text-xl"/>
        </button>
    </>
    )
}


export default PromptBtn;