import Link from "next/link";

const Navbar = () => {

    return (
        <div className="flex justify-between p-2 items-center  border-b border-slate-300 bg-white">
            <Link href={"/"}>
                <h5 className='text-xl font-bold text-sky-700'>ClashStats</h5>
            </Link>

            <div className="cursor-pointer bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                Login
            </div>

        </div>
    )
}

export default Navbar;