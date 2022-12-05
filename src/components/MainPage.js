import React from "react";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Experience from "./Experience";

export default function MainPage() {
    return (
        <main>
            <Navbar />
            <Introduction />
            <Skills />
            <Experience />
        </main>
    );
}