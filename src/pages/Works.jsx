import ProjectsHero from "../components/sections/ProjectsHero";
import ProjectCard from "../components/sections/ProjectCard";
function Works({ darkMode }) {
  return (
    <>
    <ProjectsHero darkMode={darkMode} />

    <ProjectCard darkMode={darkMode} />
</>
  );
}

export default Works;