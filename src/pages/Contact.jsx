import ContactHero from "../components/sections/ContactHero";
import ContactSection from "../components/sections/ContactSection";

function Contact({ darkMode }) {
  return (
    <>
      <ContactHero darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </>
  );
}

export default Contact;