const Timeline = () => {
  const timelineData = [
    {
      year: "2025",
      title: "Junior Web Developer",
      company: "Jadavpur University Games society(JUGS)",
      description:
        "Currently working as a Junior Web Developer, building modern web applications using React, Node.js, and various frontend technologies.",
      icon: "💼",
      status: "current",
    },
    {
      year: "2025",
      title: "Portfolio Development",
      company: "Personal Project",
      description:
        "Developed a comprehensive portfolio website using React, Tailwind CSS, and modern web technologies with interactive features.",
      icon: "🚀",
      status: "completed",
    },
    {
      year: "2025",
      title: "SkillsPan Project",
      company: "AI-Powered Platform",
      description:
        "Working on a large-scale AI-powered platform that analyzes resumes and suggests relevant skills for career development.",
      icon: "🤖",
      status: "in-progress",
    },
    {
      year: "2025",
      title: "AlumniConnect",
      company: "Networking Platform",
      description:
        "Developing a comprehensive alumni networking platform to connect current students with university graduates for mentorship and career guidance.",
      icon: "🌐",
      status: "in-progress",
    },
    {
      year: "2024-28",
      title: "B.Tech Student",
      company: "Jadavpur University",
      description:
        "Pursuing Bachelor of Technology in Printing and Packaging Technology while developing strong programming and data analysis skills.",
      icon: "🎓",
      status: "completed",
    },
    {
      year: "2024",
      title: "Web Development Journey",
      company: "Self-Learning",
      description:
        "Started learning web development technologies including HTML, CSS, JavaScript, and various frameworks.",
      icon: "📚",
      status: "completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "bg-green-500";
      case "in-progress":
        return "bg-yellow-500";
      case "completed":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "current":
        return "Current";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "";
    }
  };

  return (
    <section
      id="timeline"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black dark:from-gray-100 dark:to-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-semibold text-center mb-16 text-red-400 dark:text-red-600"
          data-aos="fade-up"
        >
          MY JOURNEY
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-600 rounded-full"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start mb-12"
              data-aos="fade-right"
              data-aos-delay={index * 200}
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-black dark:bg-white border-4 border-red-500 rounded-full">
                <span className="text-2xl">{item.icon}</span>
              </div>

              {/* Content Card */}
              <div className="ml-8 flex-1">
                <div className="bg-red-950 dark:bg-red-100 border border-red-700 dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-red-500 dark:text-red-600">
                      {item.year}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {getStatusText(item.status)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-red-300 dark:text-red-700 font-medium mb-3">
                    {item.company}
                  </p>

                  <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
