import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dry-garden-18728.herokuapp.com/projects")
      .then(data => {
        console.log(data);
        setProjectData(data.data);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray min-h-screen p-12">
      <section className="container mx-auto">
        <h1
          className="text-5xl flex justify-center cursive"
          style={{ marginBottom: 10 }}
        >
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page.
        </h2>

        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="relative rounded-lg shadow-xl bg-white p-16"
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.Link}
                    alt={project.Title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.Title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs">
                  <span>
                    <strong className="font-bold">Finished on</strong>:
                    {project.Date}
                  </span>
                  {project.projectType != null ? (
                    <span>
                      <strong className="font-bold"> Type</strong>:{" "}
                      {project.projectType}
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="my-6 ml-0 text-lg text-gray-700 leading-relaxed">
                    {project.Description}
                  </p>
                  <div className=" ml-0 flex justify-between">
                    <a
                      href={project.Link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400"
                    >
                      View The Project
                    </a>
                    {project.Github != null ? (
                      <a href={project.Github}>Github</a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
