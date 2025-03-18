import {  faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";










function Logo(){

    return(
    
        <div className="w-fit flex items-center justify-center gap-2 p-4 text-4xl font-bold">
            <FontAwesomeIcon icon={faBrain}/>
            <h1>KwizMe</h1>
        </div>
    
    )
}


export default Logo;