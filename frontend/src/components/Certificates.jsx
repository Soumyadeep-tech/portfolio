const Certificates = () => {
  const certificates = [
    {
      title: "React Development",
      issuer: "Coursera",
      date: "2024",
      description:
        "Complete React development course covering hooks, state management, and modern React patterns.",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data analytics job simulation",
      issuer: "Deloitee",
      date: "2025",
      description:
        "learned hands on data analytics skills with Tableau and Sql",
      icon: "🧮",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Complete Web Development",
      issuer: "Udemy (chaiCode)",
      date: "2025",
      description:
        "Full-stack web development course covering HTML, Tailwind , React , prisma , Node.js advanced authentication , deployment , llm",
      icon: "🌐",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Ai foundations",
      issuer: "Oracle",
      date: "2025",
      description: "In progress right now",
      icon: "🔍",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Adobe Premiere Pro starting with",
      issuer: "Udemy",
      date: "2025",
      description:
        "learned basics of colour grading and edititng with Premiere Pro reels/shorts and long vid",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Hult prize participation",
      issuer: "Hult prize",
      date: "2025",
      description:
        "participated in Hult prize ( a global Entrepreneurship pitiching league)",
      icon: "🏆",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl font-semibold text-center mb-16 text-red-400 dark:text-red-600"
          data-aos="fade-up"
        >
          CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-red-950 dark:bg-red-100 border border-red-700 dark:border-red-300 rounded-xl p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 group-hover:scale-105">
                {/* Certificate Icon */}
                <div className="text-center mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-3xl mb-3`}
                  >
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-black mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-red-300 dark:text-red-700 font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Certificate Details */}
                <div className="text-center">
                  <p className="text-gray-300 dark:text-gray-700 text-sm mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 dark:text-gray-600">
                      Issued: {cert.date}
                    </span>
                    <span className="text-red-400 dark:text-red-600 font-semibold">
                      ✓ Verified
                    </span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-400 dark:text-gray-600 mb-4">
            checkout my linkedin for all the certificates
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 hover:scale-105 transition-transform"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
