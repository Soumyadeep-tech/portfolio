const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-red-950 dark:bg-gray-100 overflow-hidden"
    >
      {/* Floating premium triangles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="triangle-premium absolute top-10 left-10 w-8 h-8 rotate-45 animate-float"></div>
        <div className="triangle-premium absolute top-1/3 right-16 w-6 h-6 rotate-45 animate-float-slow"></div>
        <div className="triangle-premium absolute bottom-10 left-1/4 w-10 h-10 rotate-45 animate-float-reverse"></div>
        <div className="triangle-premium absolute bottom-1/3 right-1/4 w-7 h-7 rotate-45 animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-3xl font-semibold text-center mb-12 text-red-400 dark:text-red-600"
          data-aos="fade-up"
        >
          PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">SkillsPan</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A large-scale project in progress — an AI-powered platform that
              analyzes resumes, suggests relevant skills, and offers numerous
              upcoming features.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                AI
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                In Progress
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">
              AlumniConnect
            </h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A comprehensive alumni networking platform connecting current
              students with university graduates for mentorship and career
              guidance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Node.js
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                MongoDB
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                In Progress
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">
              AI-powered Resume Builder
            </h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A smart platform enabling users to instantly generate professional
              resumes with the help of AI and customizable templates.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                AI
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Completed
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">
              E-Commerce Dashboard
            </h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A comprehensive admin dashboard for managing products, orders,
              customers, and analytics with real-time data visualization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Chart.js
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Completed
              </span>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">
              Task Management App
            </h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A collaborative task management application with drag-and-drop
              functionality, team collaboration, and deadline tracking.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Vue.js
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Firebase
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Completed
              </span>
            </div>
          </div>

          {/* Card 6 */}
          <div
            className="bg-black border border-red-700 dark:bg-white dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/70 hover:-translate-y-2 transition-all duration-300"
            data-aos="flip-left"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">Weather App</h3>
            <p className="text-gray-300 dark:text-gray-700 mb-3">
              A responsive weather application with location-based forecasts,
              interactive maps, and detailed weather analytics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                API
              </span>
              <span className="px-2 py-1 bg-red-900 dark:bg-red-200 text-red-300 dark:text-red-700 text-xs rounded">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
