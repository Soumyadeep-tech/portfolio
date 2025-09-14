const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "devicon-html5-plain", level: 95 },
    { name: "CSS3", icon: "devicon-css3-plain", level: 90 },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: 85 },
    { name: "React.js", icon: "devicon-react-original", level: 85 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original", level: 95 },
    { name: "Git & GitHub", icon: "devicon-git-plain", level: 75 },
    { name: "Firebase", icon: "devicon-firebase-plain", level: 65 },
    { name: "UI/UX Basics", icon: "devicon-figma-plain", level: 65 },
    { name: "Node.js", icon: "devicon-nodejs-plain", level: 75 },
    { name: "Express.js", icon: "devicon-express-original", level: 75 },
    { name: "MongoDB", icon: "devicon-mongodb-plain", level: 75 },
    { name: "MySQL", icon: "devicon-mysql-plain", level: 85 },
    { name: "C (Basics)", icon: "devicon-c-plain", level: 55 },
    { name: "Python ", icon: "devicon-python-plain", level: 75 },
    { name: "Java", icon: "devicon-java-plain", level: 70 },
    { name: "Postman", icon: "devicon-postman-plain", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2
        className="text-3xl font-semibold text-center mb-12 text-red-400 dark:text-red-600"
        data-aos="fade-up"
      >
        SKILLS
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200 dark:text-gray-700"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-red-900 dark:bg-red-200 p-6 rounded-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <i
                  className={`${skill.icon} text-3xl text-red-400 dark:text-red-600`}
                ></i>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
              <span className="text-sm font-bold text-red-300 dark:text-red-700">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-700 dark:bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
