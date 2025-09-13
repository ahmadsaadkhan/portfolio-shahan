import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import { projects } from "../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  projects.sort((a, b) => a.sort - b.sort);
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={`${project.image}`}
                  width={580}
                  height={400}
                  //fill
                />
                <div className="px-8 py-10 relative z-10 w-full h-80 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-green-400 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}