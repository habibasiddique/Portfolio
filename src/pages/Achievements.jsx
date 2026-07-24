import AchievementsHero from "../components/sections/AchievementsHero";
import AchievementCards from "../components/sections/AchievementCards";
import Certificates from "../components/sections/Certificates";

function Achievements({ darkMode }) {
  return (
    <>
      <AchievementsHero darkMode={darkMode} />
      <AchievementCards darkMode={darkMode} />
       <Certificates darkMode={darkMode} />
    </>
  );
}

export default Achievements;