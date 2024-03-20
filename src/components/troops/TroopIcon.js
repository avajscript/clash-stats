import Link from "next/link";

const TroopIcon = ({troop}) => {
    return (
        <Link href={`troop/${troop.name}`}>

            <div
                class="p-2 cursor-pointer border border-slate-300 m-2 rounded-xl shadow hover:bg-sky-100 transition-all flex items-center flex-col w-32">
                <img alt={`${troop.name}-troop`} src={"/assets/troops/icons/" + troop.url} width="64" height="64"
                     className="mb-2"/>
                <h3 className="text-md">
                    {troop.name}
                </h3>
            </div>
        </Link>

    )
};

export default TroopIcon;