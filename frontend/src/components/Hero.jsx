import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  };

  const typingTexts = [
    "Junior Web Developer",
    "React Developer",
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  return (
    <section className="relative shine-effect text-center py-28 px-4 bg-gradient-to-b from-red-900 to-black dark:from-gray-200 dark:to-white overflow-hidden">
      <div className="absolute inset-0 bg-animated opacity-70"></div>

      {/* Animated floating circles background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20 absolute top-10 left-10 animate-pulse"></div>
        <div className="w-72 h-72 bg-yellow-500 rounded-full blur-3xl opacity-20 absolute bottom-10 right-10 animate-pulse"></div>
      </div>

      <h1
        className="text-5xl md:text-6xl font-extrabold mb-4"
        data-aos="fade-down"
      >
        Soumyadeep Paul
      </h1>
      <p
        className="text-xl md:text-2xl text-red-300 mb-6 dark:text-red-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <TypingAnimation
          texts={typingTexts}
          speed={100}
          deleteSpeed={50}
          pauseTime={2000}
        />
        <span className="text-yellow-400 block mt-2">
          {`{Tailwind · React · Node.js · Firebase}`}
        </span>
      </p>

      <div
        className="flex justify-center gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a
          href="#contact"
          className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 hover:scale-105 transition-transform"
        >
          Let's Connect
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-red-500 text-red-400 px-6 py-3 rounded-xl hover:bg-red-600 hover:text-white hover:scale-105 transition-transform"
        >
          Download CV
        </a>
      </div>

      {/* Scroll down indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        ↓
      </div>
    </section>
  );
};

export default Hero;
