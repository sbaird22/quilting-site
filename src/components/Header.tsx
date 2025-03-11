import {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="w-full bg-black text-teal-300 py-4 px-6 text-center border-b-4 border-black">
            <div className="flex items-center justify-between">
                    <img src={logo} alt="Your Grandfather's Quilt" className="h-16 mx-auto" />
                    <h1 className="text-3xl font-bold text-center flex-1">My Grandfather's Quilt</h1>
                <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <nav className={`${
                    isOpen ? "block" : "hidden lg:flex"
                    } absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent text-center lg:text-right p-4 lg:p-0`}
                >

                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-lg">
                        <li><Link className="hover:underline" to="/">Home</Link></li>
                        <li><Link className="hover:underline" to="/about">About</Link></li>
                        <li><Link className="hover:underline" to="/contact">Contact</Link></li>
                        <li><Link className="hover:underline" to="/gallery">Gallery</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
