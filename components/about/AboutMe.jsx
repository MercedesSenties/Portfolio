import Skills from "../skills/SkillsGrid";

function AboutMe() {
  return (
    <section
      id="skills"
      className="mt-10 sm:mt-20">
      <p className="text-center font-sketch text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
        ABOUT ME
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-12 sm:flex-row md:flex-col lg:flex-row">
        <p className="text-justify text-lg md:text-2xl lg:text-xl w-full sm:w-2/4 md:w-full lg:w-2/4 font-general-light text-primary-dark dark:text-primary-light">
          I{"'"}m a highly motivated and adaptable programmer and community
          manager from Mexico. I{"'"}m always seeking opportunities to learn
          more about new technologies and development practices. I{"'"}ve a
          strong desire of finding new ways of problem solving. I also love
          singing and taking long walks with my dog Ofelia.
        </p>
        <Skills></Skills>
      </div>
    </section>
  );
}

export default AboutMe;
