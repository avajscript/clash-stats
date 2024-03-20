import Image from "next/image";
import TroopIcon from "@/components/troops/TroopIcon";
import minifiedTroops from '../data/minifiedTroops.js';

export default function Home() {
    return (
        <main className='bg-slate-50 container max-w-6xl mx-auto p-4'>
            <h1 className="text-5xl text-sky-700">View Clash Stats</h1>
            <div className="flex flex-wrap">
                {
                    minifiedTroops.map(troop => {
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
