import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function WebApps() {
    const navigate = useNavigate();

    const navigateToCryptoApp = () => {
        // 👇️ navigate to /contacts
        navigate('/Pages/CryptoApp');
    };
    return (
        <main>
        <Navbar />
        <div className="h-screen text-center mb-50 py-8">
            <h1 className="py-2" >Click a link below navigate to an app</h1>
            <button
                className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg "
                onClick={navigateToCryptoApp} >
                Crypto App
            </button>
            </div>
        </main>
    );
};