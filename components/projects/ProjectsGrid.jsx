import { projectsData } from "../../data/projectsData";
import ProjectSingle from "./ProjectSingle";

function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-sketch text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          PROJECTS
        </p>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectSingle
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
