import './Navbar.css'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export const Navbar = () => {
    const [clciked, setClicked] = useState(false);
    const handelCliked = () => {
        setClicked(!clciked)
    }
    return (
        <>
        <nav>
            <div>
                <span className="site-name-1">T</span><span className="site-name-2">k</span>
            </div>
            {/* desktop screen */}
            <div>
                <ul className={clciked ? "show" : ""}>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Blogs"}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/About"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Contact"}>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* mobile screen */}
            <div id='mobile' onClick={handelCliked}>
                {
                    clciked ? <FaBars /> : <FaXmark />
                }
            </div>
        </nav>
        </>
    );
}