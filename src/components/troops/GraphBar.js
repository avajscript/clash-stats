const GraphBar = ({value, maxValue}) => {
    let valueWidthPercent = (value / maxValue) * 100;

    if (valueWidthPercent > 100) {
        valueWidthPercent = 100;
    }
    return (
        <div>
            <p>{value?.toLocaleString()}/{maxValue}</p>
            <div className="w-full bg-stone-100 h-8 border relative">

                <div className="absolute bg-emerald-400 h-8 border" style={{width: valueWidthPercent + "%"}}></div>
            </div>
        </div>

    )
};


export default GraphBar;