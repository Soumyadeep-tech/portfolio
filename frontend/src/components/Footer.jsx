import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-red-800 dark:border-red-300">
      <div className="flex justify-center gap-6 mb-3">
        <a href="mailto:soumyadeeppaul93@gmail.com" title="Email">
          <Mail className="w-5 h-5 hover:text-red-500" />
        </a>
        <a
          href="https://github.com/Soumyadeep-tech"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Github className="w-5 h-5 hover:text-red-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/soumyadeep-paul2006/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5 hover:text-red-500" />
        </a>
      </div>
      <p>&copy; 2025 Soumyadeep Paul. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
