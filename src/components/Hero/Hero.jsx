import DefaultCatg from "./DefaultCatg";
import Logo from "./Logo";
import PromptField from "./PromptField";











function Hero(){

    return(
        <div className="flex flex-col h-[100vh] ">
            <Logo />
            <PromptField />
            <DefaultCatg />
        </div>
    )
}


export default Hero;