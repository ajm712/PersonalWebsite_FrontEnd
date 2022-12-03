import { CubeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { experience } from "../data";

export default function Experience() {
    return (
        <section id="experience" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <div className="text-center mb-20">
                    <CubeIcon className="w-20 inline-block mb-4 text-sky-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {experience.map((job) => (
                        <div key={job.title} className="sm:w-1/3 w-100 p-4">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 rounded-lg">
                                    <h2 className="tracking-widest text-3xl title-font font-medium text-sky-500 mb-1">
                                        {job.title}
                                    </h2>
                                    <h1 className="title-font text-m font-medium text-white mb-3">
                                        {job.subtitle}
                                    </h1>
                                    <h1 className="title-font text-sm font-medium text-gray-400 mb-3">
                                        {job.dates}
                                    </h1>
                                    <p className="leading-relaxed">{job.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
