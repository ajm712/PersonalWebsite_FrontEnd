import { WindowIcon } from "@heroicons/react/24/solid";
import React from "react";
import Navbar from "../components/Navbar";
import { siteTechnologies } from "../data";

export default function AboutThisSite() {
    return (
        <div className="h-screen" >
            {<Navbar />}
            <section id="aboutthissite">
                <div className="container px-5 py-10 mx-auto">
                    <div className="text-center mb-20">
                            <WindowIcon className="w-20 inline-block mb-4 text-sky-400" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
                            About this site
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Below is a list of programming languages, libraries, and technologies that have been used to create this website. I did not create the layout or design
                            of this website. I grabbed a design for a software portfolio from <a href="https://www.freecodecamp.org/news/build-portfolio-website-react/">this website</a>,
                            and modified it to meet my needs. I created this website as a way to show off my proffesional experience and skills, learn REACT and other front-end technologies, and to have a way
                            to mess around and show off my back-end skills. The'My Apps" section of the website was designed by me and uses my back-end, .net api to handle request and push and pull data from
                            my sql server instance. I intend to continually update this website to show off my skills and programming knowledge and to give updates on my professional experience.

                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-">
                            {siteTechnologies.map((tech) => (
                                <div
                                    key={siteTechnologies.technologyName}
                                    className="sm:w-1/3 w-100 p-4">
                                    <div className="flex relative ">
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 rounded-lg">
                                            <h2 className="tracking-widest text-2xl title-font font-medium text-sky-500 mb-1">
                                                {tech.technologyName}
                                            </h2>
                                            <h1 className="title-font text-m font-medium text-white mb-3">
                                                {tech.category}
                                            </h1>
                                            <p className="leading-relaxed">{tech.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </section>
        </div>
    );
}