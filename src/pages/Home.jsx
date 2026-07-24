import Hero from "../components/sections/Hero";
import QuickHighlights from "../components/sections/QuickHighlights";
import AboutPreview from "../components/sections/AboutPreview";
import ContactCTA from "../components/sections/ContactCTA";

function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />

      <QuickHighlights darkMode={darkMode} />

      <AboutPreview darkMode={darkMode} />

      <ContactCTA darkMode={darkMode} />
    </>
  );
}

export default Home;