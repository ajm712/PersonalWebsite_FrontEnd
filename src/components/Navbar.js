import React from "react";
import { Link } from "react-router-dom";
//import Hamburger from "./Hamburger";


export default function Navbar() {
    return (
        <header className="bg-gray-800 sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a href="../#mainpage" className=" ml-3 text-2xl font-bold text-white rounded-full ">
                        Austin Markham
                    </a>
                <nav className="font-semibold md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-lg">
                    <a href="../#experience" className="mr-5">
                        Experience
                    </a>
                    <a href="../#skills" className="mr-5">
                        Skills
                    </a>
                    <Link to="/WebApps" className="mr-5">
                        Web Apps
                    </Link>
                    <Link to="/components/AboutThisSite" className="mr-5">
                        About
                    </Link>
                </nav>
                {/*<Hamburger />*/}
            </div>
        </header>
    );
}