import heroBg from "../../assets/images/hero-bg.jpg";

// Subtle theme-matched background for hero sections (dark mode only).
// Renders a faint image behind the content with a gradient fade so
// text stays readable and the section blends into the page background.
function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#090E1A]/60 via-[#090E1A]/20 to-[#090E1A]"
      />
    </>
  );
}

export default HeroBackground;
