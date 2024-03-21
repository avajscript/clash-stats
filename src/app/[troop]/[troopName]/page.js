"use client";
import {useEffect, useState} from "react";
import troops from '../../../data/troopUpgradeStats';
import Level from "@/app/[troop]/[troopName]/components/Level";
import {TroopFormatter} from "@/lib/classes/TroopFormatter";
import GraphBar from "@/components/troops/GraphBar";
import {TroopGraph} from "@/lib/classes/TroopGraph";
import {LuSword} from "react-icons/lu";
import {FaClock, FaHouse, FaCoins} from "react-icons/fa6";

const Troop = ({params}) => {
    const troopData = troops.find(troop => troop.name === params.troopName);
    const [rangeValue, setRangeValue] = useState(100);

    const [selectedLevel, setSelectedLevel] = useState(1);
    const levelArr = TroopFormatter.getLevelArray(troopData.levels);
    const [curTH, setCurTH] = useState(1);
    const selectLevel = (level) => {
        updateCurTH(level);
        setSelectedLevel(level);
    }


    const updateRange = (e) => {
        const value = e.target.value;
        setRangeValue(value);
    }

    // iterate over levels array which the index + 1 corresponds with
    // the current TH level
    // sets the TH to the current TH level
    const updateCurTH = (level) => {
        let index = 0;
        for (let i = 0; i < troopData.levels.length; i++) {
            if (troopData.levels[i] == level) {
                index = i;
                break;
            }
        }
        setCurTH(index + 1);
    }
    useEffect(() => {
        console.log("Cur TH")
        console.log(curTH)
    }, [curTH]);
    return (
        <div className=' container max-w-6xl mx-auto p-4'>
            <div className="flex gap-4">
                <div>
                    <h1 className="text-3xl text-sky-700 mb-4">{troopData.name}</h1>
                    <img className={"mb-8"} src={`/assets/troops/models/${troopData.name}.png`} alt={troopData.name}/>
                </div>
                {/** Levels **/}
                <div>
                    <div className="mb-4">
                        <h2 className="text-3xl text-sky-700 mb-4 ">Levels</h2>
                        <div className="flex flex-wrap gap-4">{levelArr.map(level => {
                            return <Level selectedLevel={selectedLevel} selectLevel={selectLevel} level={level}/>
                        })}</div>
                    </div>
                    <img className={"max-w-32"} src={`/assets/townhalls/${curTH}.png`} alt={`Town hall-${curTH}`}/>

                    <div className="mb-4">
                        <h2 className="text-xl text-sky-700 mb-4">
                            Maximum Range
                        </h2>
                        <p className="mb-2">
                            {rangeValue}/100
                        </p>
                        <input type="range" min="0" max="100" onChange={updateRange}
                               value={rangeValue} className="range"/>
                    </div>
                    {/** DPS **/}
                    <div className="mb-6">
                        <div className="flex items-center mb-4 ">
                            <h2 className="text-xl mr-2 text-sky-700 ">DPS</h2>
                            <LuSword size={32}/>
                        </div>
                        <GraphBar value={troopData.dps[selectedLevel - 1]}
                                  maxValue={TroopGraph.HIGHEST_TROOP_DPS * rangeValue / 100}/>
                    </div>

                    {/** Housing Space**/}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl mr-2 text-sky-700">HOUSING SPACE</h2>
                            <FaHouse size={24}/>
                        </div>
                        <GraphBar value={troopData.housingSpace}
                                  maxValue={TroopGraph.HIGHEST_HOUSING_SPACE * rangeValue / 100}/>
                    </div>
                    {/** Time **/}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl text-sky-700 mr-2 ">UPGRADE TIME (DAYS)</h2>
                            <FaClock size={24}/>
                        </div>
                        <GraphBar value={troopData.upgrade.time[selectedLevel - 1] / 60 / 60 / 24}
                                  maxValue={(TroopGraph.LONGEST_TROOP_HOURS / 24) * rangeValue / 100}/>
                    </div>
                    {/** Cost **/}
                    <div className="mb-10">
                        <div className="flex items-center mb-4">
                            <h2 className="text-xl text-sky-700 mr-2 ">UPGRADE PRICE (ELIXER)</h2>
                            <FaCoins size={24}/>
                        </div>

                        <GraphBar value={troopData.upgrade.cost[selectedLevel - 1]}
                                  maxValue={(TroopGraph.HIGHEST_TROOP_PRICE) * rangeValue / 100}/>

                    </div>

                    <h2 className="text-xl text-sky-700 mb-4 ">Unlocks At Townhall {troopData.unlock.hall}</h2>
                    <img width="64" height="64" src={`/assets/townhalls/${troopData.unlock.hall}.png`}
                         alt="townhall-hall"/>
                </div>


            </div>

        </div>
    )
};

export default Troop;