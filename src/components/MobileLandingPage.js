import React from "react";
import {CommandLineIcon} from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

export default function MobileLandingPage() {
    return (
        <div>
            { <Navbar /> }
            <section id="about">
                <div className="container px-5 py-20 mx-auto h-full">        
                    <div className="text-center mb-20 text-vase">
                        <div className="inline-block mb-4">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="./coding.svg"
                            />
                        </div>
                        {/*<CommandLineIcon className="w-24 inline-block mb-4 text-sky-700" />*/}
                        <h1 className="sm:text-4xl text-4xl text-white mb-3">
                            Hi, I'm Austin, welcome to my website!
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            On this site that I created from scratch (almost), you will find my professional experience and some web apps that I am working on.
                            I also do freelancing on the side. 
                        </p><br></br>
                        <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mt-4">
                            Click the first link below to navigate to my Fiverr page and I can make your app idea a reality!
                            If your app idea exceeds the scope of my Fiverr packages (small to medium sized apps), click the adjacent Contact Me link to contact me!
                        </p>
                        <a
                            href="https://www.fiverr.com/austinmarkham"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-2xl mt-6">
                            Fiverr
                        </a>
                        <a
                            href="#projects//"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-2xl">
                            Contact
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}