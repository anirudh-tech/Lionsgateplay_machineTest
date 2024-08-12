import { useEffect, useState } from "react"
import logo from "../../assets/rebrand-lionsgateplay.png"
import { CiSearch } from "react-icons/ci"
import { NavLink } from "react-router-dom"
import { Input } from "../ui/input"
import { X } from "lucide-react"
import { FaSearch } from "react-icons/fa"

const DesktopNavbar = () => {
    const [active, setActive] = useState<string>("HOME")
    const [search, setSearch] = useState<boolean>(false)
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const activeItem = sessionStorage.getItem("active")
        if (activeItem) {
            setActive(activeItem)
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setHasBackground(true);
            } else {
                setHasBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const changeActive = (item: string) => {
        setActive(item)
        sessionStorage.setItem("active", item);
    }

    return (
        <>

            <div className={`hidden md:flex justify-between pt-5 pb-5 pl-10 sticky top-0 z-10 transition-all duration-300 ${hasBackground ? 'bg-[rgb(1,63,78)] bg-opacity-80' : 'bg-transparent'
                }`}>
                {
                    search ? (
                        <>
                            <div className="flex gap-8 items-center">
                                <img className="w-[130px]" src={logo} alt="" />

                                <div className="relative flex items-center">
                                    <FaSearch className="absolute left-3 text-gray-400" />
                                    <Input
                                        className="border-2 border-cyan-500 bg-black text-white pl-10"
                                        type="text"
                                        size={170}
                                        placeholder="Movies, TV Shows, People, Genres..."
                                    />
                                </div>

                                <X onClick={() => setSearch(false)} size={40} className="text-white cursor-pointer" />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex gap-5">
                                <img className="w-[130px]" src={logo} alt="" />

                                <div className="flex text-white font-semibold gap-6 mt-3">
                                    <NavLink to={"/home"}>
                                        <h1 onClick={() => changeActive("HOME")} className={`${active === "HOME" ? `underline underline-offset-8 decoration-2 decoration-lime-300 hover:no-underline duration-300` : ``} cursor-pointer hover:opacity-60 transition-all duration-300`}>HOME</h1>
                                    </NavLink>
                                    <NavLink to={"/shows"}>
                                        <h1 onClick={() => changeActive("SHOWS")} className={`${active === "SHOWS" ? `underline underline-offset-8 decoration-2 decoration-lime-300 hover:no-underline duration-300` : ``} cursor-pointer hover:opacity-60 transition-all duration-300`}>SHOWS</h1>
                                    </NavLink>
                                    <NavLink to={"/movies"}>
                                        <h1 onClick={() => changeActive("MOVIES")} className={`${active === "MOVIES" ? `underline underline-offset-8 decoration-2 decoration-lime-300 hover:no-underline duration-300` : ``} cursor-pointer hover:opacity-60 transition-all duration-300`}>MOVIES</h1>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="flex gap-5 font-semibold text-white mt-3 pr-12">
                                <h1 onClick={() => setSearch(true)} className="text-xs flex mt-1 cursor-pointer"><CiSearch className="text-lg" /><span className="">SEARCH</span></h1>
                                <h1>LOGIN</h1>
                                <h1>SIGN UP</h1>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}

export default DesktopNavbar