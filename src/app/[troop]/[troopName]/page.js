"use client";
import {useState} from "react";
import troops from '../../../data/troopUpgradeStats';
import Level from "@/app/[troop]/[troopName]/components/Level";
import {TroopFormatter} from "@/lib/classes/TroopFormatter";

const Troop = ({params}) => {
    const troopData = troops.find(troop => troop.name === params.troopName);
    console.log("troop");
    console.log(troopData);
    const [selectedLevel, setSelectedLevel] = useState(1);
    const levelArr = TroopFormatter.getLevelArray(troopData.levels);
    const selectLevel = (level) => {
        setSelectedLevel(level);
    }
    return (
        <div className=' container max-w-6xl mx-auto p-4'>
            <div className="flex gap-4">
                <div>
                    <h1 className="text-3xl text-sky-700 mb-4">{troopData.name}</h1>
                    <img src={`/assets/troops/models/${troopData.name}.png`} alt={troopData.name}/>
                </div>
                <div>
                    <h2 className="text-3xl text-sky-700 mb-4 ">Levels</h2>
                    <div className="flex flex-wrap gap-4">{levelArr.map(level => {
                        return <Level selectedLevel={selectedLevel} selectLevel={selectLevel} level={level}/>
                    })}</div>
                </div>

            </div>

        </div>
    )
};

export default Troop;