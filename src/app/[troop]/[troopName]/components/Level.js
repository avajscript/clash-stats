const Level = ({level, selectedLevel, selectLevel}) => {
    let classes = "border border-slate-300 w-10 h-10 flex justify-center cursor-pointer rounded hover:bg-sky-300 hover:text-slate-900 text-slate-300 transition-all shadow";
    if (selectedLevel == level) {
        classes += " text-slate-900 bg-sky-300";
    }
    return (
        <div onClick={() => selectLevel(level)}
             className={classes}>
            <h3 className="text-2xl ">{level}</h3>
        </div>
    )
};
export default Level;