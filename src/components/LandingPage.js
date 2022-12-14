import React from "react";
import {CommandLineIcon} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

export default function LandingPage() {
    return (
        <div className="h-screen">
            { <Navbar /> }
            <section id="about">
                <div className="container px-5 py-20 mx-auto">        
                    <div className="text-center mb-20">
                        <CommandLineIcon className="w-24 inline-block mb-4 text-sky-700" />
                        <h1 className="sm:text-4xl text-4xl text-white mb-3">
                            Hi, I'm Austin, welcome to my website!
                        </h1>
                        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Here you will find my work experience, professional skills, and some side projects I am working on. 
                        </p><br></br>
                        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-4">
                            Along with my fulltime job, I also do freelance work on the side. Click the button below to navigate to my Fiver page if you need an api or web app!
                        </p>
                        <button
                            className="text-white bg-sky-700 border-0 py-2.5 px-6 hover:bg-green-600 rounded-full text-lg mt-4">
                            <a href="https://www.fiverr.com/austinmarkham?up_rollout=true">
                                Fiverr
                                {/*<img src={process.env.PUBLIC_URL + "/GitHub-logo.png"} alt="logo" />*/}
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}