const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid shine-effect md:grid-cols-2 gap-10 items-center">
        <div className="float rotating-ring absolute w-64 h-64"></div>
        <img
          src="/soumyadeep12.jpg"
          alt="Soumyadeep Paul"
          className="rounded-2xl w-full max-w-sm mx-auto shadow-lg"
          data-aos="zoom-in"
        />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-4 text-red-500">About Me</h2>
          <p className="text-gray-300 dark:text-gray-700 mb-3">
            Hey, I'm Soumyadeep Paul — a passionate web developer and B.Tech
            student at Jadavpur University. I love building modern, interactive
            websites using HTML, Tailwind, JavaScript, React, and Node.js. I'm
            currently working on full-stack projects like SkillsPan and an
            AI-powered Resume Builder to sharpen my skills and prepare for
            real-world challenges.
          </p>
          <p className="text-gray-300 dark:text-gray-700">
            Also skilled with Excel , python and mySQL . I also love UI/UX
            design and open-source projects in my free time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
