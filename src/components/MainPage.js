import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Experience from "./Experience";

export default function MainPage() {
    return (
        <main>
            <Navbar />
            <About />
            <Skills />
            <Experience />
        </main>
    );
}