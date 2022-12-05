import React from "react";
import {CommandLineIcon} from "@heroicons/react/24/solid";

export default function Introduction() {
    return (
        <section id="about">
            <div className="container px-5 py-20 mx-auto">        
                <div className="text-center mb-20">
                    <CommandLineIcon className="w-24 inline-block mb-4 text-sky-700" />
                    <h1 className="sm:text-4xl text-4xl text-white mb-3">
                        Hi, welcome to my website!
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here you will find my work experience, professional skills, and some side projects I am working on
                    </p>
                </div>
                </div>
        </section>
    );
}