




function TimeBar({useTime}) {
    const {timeCount, iTime} = useTime

    const timeCalc =  ((iTime - timeCount) / iTime) * 100 ;
    return (
        <>
            <div className="h-1 bg-white" style={{width: `${timeCalc}%`}}/>

        </>)
}

export default TimeBar