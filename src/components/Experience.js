import { CubeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { experience } from "../data";
import Navbar from "./Navbar";

export default function Experience() {
    return (
    <div>
            {<Navbar />}
        <section id="experience">
            <div className="container px-5 py-10 mx-auto h-full">
                <div className="text-center mb-20">
                    <CubeIcon className="w-24 inline-block text-sky-700" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-8">
                            Below are brief descriptions of my professional expereiences as a software engineer from September 2019 to present.
                            Click the links below to navigate to my Github and Linkedin profiles.
                        </p>
                        <div>
                            <button
                                className="text-white bg-green-600 border-0 py-2 px-8 hover:bg-gray-800 rounded text-xl mr-8">
                                <a href="https://github.com/ajm712">
                                Github
                                    {/*<img src={process.env.PUBLIC_URL + "/GitHub-logo.png"} alt="logo" />*/}
                                </a>
                            </button>
                        <button
                                className="text-white bg-green-600 border-0 py-2 px-8 hover:bg-gray-800 rounded text-xl">
                                <a href="https://www.linkedin.com/in/austin-markham-b21936123/">
                                Linkedin
                                    {/*<img className="" src={process.env.PUBLIC_URL + "/linkedin-logo.png"} alt="Logo" />*/}
                                    </a>
                            </button>
                        </div>
                </div>
                <div className="flex-1 flex-wrap -m-4">
                    {experience.map((job) => (
                        <div key={job.title} className=" w-100 p-4 text-center">
                            <div className="flex relative">
                                <div className="px-8 py-3 relative w-full border-4 border-gray-800 bg-gray-800 rounded-lg border-gray-600">
                                    <h2 className="tracking-widest text-2xl title-font font-medium text-sky-500 mb-1">
                                        {job.title}
                                    </h2>
                                    <h1 className="title-font text-m font-medium text-white mb-3">
                                        {job.subtitle}
                                    </h1>
                                    <h1 className="title-font text-sm font-medium text-gray-400 mb-3">
                                        {job.dates}
                                    </h1>
                                    <p className="leading-relaxed text-sm">{job.description}</p>
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
