import { NavLink } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import logo from "../../assets/rebrand-lionsgateplay.png"
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState("0px");
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            setMenuHeight(`${menuRef?.current?.scrollHeight}px`);
        } else {
            setMenuHeight("0px");
        }
    }, [isMenuOpen]);

    return (
        <div className="w-full h-full md:hidden">
            <div className="w-full flex justify-center md:hidden p-3 relative bg-[rgb(1,63,78)]">
                <button
                    className="p-3 rounded absolute left-0 text-white"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
                <img src={logo} alt="Logo" className="h-10 w-auto align-middle" />
            </div>

            <div
                ref={menuRef}
                style={{ height: menuHeight }}
                className="w-full overflow-hidden transition-all duration-500 ease-in-out bg-[rgb(1,63,78)] text-white"
            >

                <div className="flex gap-4 p-3 bg-[rgb(8,33,37)]">
                    <Button className="bg-[rgb(210,255,0)] hover:bg-gradient-to-r from-[rgb(210,255,0)] to-[rgb(13,227,241)] text-black font-semibold hover">LOG IN</Button>
                    <Button className="bg-[rgb(210,255,0)] hover:bg-gradient-to-r from-[rgb(210,255,0)] to-[rgb(13,227,241)] text-black font-semibold">SIGN UP</Button>
                </div>
                <div className="bg-[#021214] pt-4 ">
                    <NavLink
                        to={"/home"}
                        onClick={toggleMenu}
                        className="w-full flex gap-2 h-10 items-center relative pl-3 hover:bg-[rgb(8,33,37)] transition-all duration-200 cursor-pointer"
                    >
                        <span>HOME</span>
                    </NavLink>
                    <NavLink
                        to={"/shows"}
                        onClick={toggleMenu}
                        className="w-full flex gap-2 h-10 items-center relative pl-3 hover:bg-[rgb(8,33,37)] transition-all duration-200 cursor-pointer"
                    >
                        <span>SHOWS</span>
                    </NavLink>
                    <NavLink
                        to={"/movies"}
                        onClick={toggleMenu}
                        className="w-full flex gap-2 h-10 items-center relative pl-3 hover:bg-[rgb(8,33,37)] transition-all duration-200 cursor-pointer"
                    >
                        <span>MOVIES</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar