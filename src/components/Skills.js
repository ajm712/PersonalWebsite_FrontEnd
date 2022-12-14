import { CheckCircleIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from "../data";
import Navbar from "./Navbar"

export default function Skills() {
    return (
        <div>
            {<Navbar />}
            <section id="skills">
              <div className="px-5 py-10 mx-auto sm:h-screen h-full">
                <div className="text-center mb-20">
                    <CodeBracketIcon className="w-24 inline-block mb-4 text-sky-700" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
                      Skills and Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                      Below is a list of programming languages, libraries, and technologies that I have used in my professional experience.
                    </p>
                </div>
                  <div className="flex flex-wrap lg:w-3/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                      <div key={skill} className="p-2 sm:w-1/3 w-full">
                        <div className="bg-gray-800 rounded flex p-4 items-center">
                          <CheckCircleIcon className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4" />
                          <span className="title-font font-medium text-white">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </section>
        </div>
   );
}