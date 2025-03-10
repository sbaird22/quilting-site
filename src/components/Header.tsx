import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Header = () => {
    return (
        <header className="w-full bg-purple-700 text-teal-300 py-4 text-center">
            <img src={logo} alt="Your Grandfather's Quilt" className="h-16 mx-auto" />
            <h1 className="text-3xl font-bold">My Grandfather's Quilt</h1>
            <nav className="mt-4 flex justify-center space-x-6">
                <Link className="px-4 text-lg hover:underline" to="/">Home</Link>
                <Link className="px-4 text-lg hover:underline" to="/about">About</Link>
                <Link className="px-4 text-lg hover:underline" to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;
