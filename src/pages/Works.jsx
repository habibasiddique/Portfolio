import ProjectsHero from "../components/sections/ProjectsHero";
import ProjectCard from "../components/sections/ProjectCard";
import AdditionalProjects from "../components/sections/AdditionalProjects";
function Works({ darkMode }) {
  return (
    <>
    <ProjectsHero darkMode={darkMode} />

    <ProjectCard darkMode={darkMode} />

    <AdditionalProjects darkMode={darkMode} />
</>
  );
}

export default Works;