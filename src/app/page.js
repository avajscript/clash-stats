"use client";
import {useState} from "react";
import Image from "next/image";
import TroopIcon from "@/components/troops/TroopIcon";
import minifiedTroops from '../data/minifiedTroops.js';
import SearchBar from "@/components/SearchBar";

export default function Home() {
    const [searchText, setSearchText] = useState("");
    const [renderTroops, setRenderTroops] = useState(minifiedTroops);

    const updateText = (e) => {
        console.log("?????")
        const value = e.target.value;
        setSearchText(value);
        setRenderTroops(() => {
            const newTroops = minifiedTroops.filter(troop => {
                return troop.name.toLowerCase().includes(searchText.toLowerCase());
            });
            console.log('new troops')
            console.log(newTroops)
            return newTroops;
        });
    }

    return (
        <main className='bg-slate-50 container max-w-6xl mx-auto p-4'>
            <h1 className="text-5xl text-sky-700 mb-4">View Clash Stats</h1>
            <SearchBar searchText={searchText} updateSearchText={updateText}/>
            <div className="flex flex-wrap">
                {
                    renderTroops.map(troop => {
                        return (
                            <TroopIcon
                                troop={troop}
                            />
                        )
                    })
                }
            </div>
        </main>
    );
}
