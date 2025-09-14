import { useState, useRef, useEffect } from "react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "> Welcome to Soumyadeep's Terminal",
    "> Type help to get started",
  ]);
  const terminalOutputRef = useRef(null);

  const commands = {
    help: `Available commands: <br> - about <br> - projects <br> - contact <br> - resume <br> - social <br> - theme <br> - joke <br> - clear`,
    about: `I'm Soumyadeep Paul, a web developer from Jadavpur University currently studying BTech in printing and packaging. I love building cool, clean web apps.you can press social or contact to contact me . Thanks!`,
    projects: `1. Thriftopia (E-commerce)<br>2. AI Resume Builder<br>3. This Portfolio(I want to make this portfolio look better and design more)`,
    contact: `Email: soumyadeeppaul@example.com<br>GitHub: github.com/soumyadeeppaul<br>LinkedIn: linkedin.com/in/soumyadeeppaul`,
    resume: `Opening resume...<br><a href="/resume.pdf" target="_blank" class="underline text-red-400 dark:text-red-600">Click here if it doesn't open automatically</a>`,
    social: `Twitter: @soumyadeep <br>Instagram: @soumyadeep.fr <br>LinkedIn: linkedin.com/in/soumyadeeppaul`,
    theme: `Switching theme...`,
    joke: `Why do programmers prefer dark mode? Because light attracts bugs!`,
    clear: "clear",
  };

  const printToTerminal = (text) => {
    setOutput((prev) => [...prev, `> ${text}`]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const command = input.trim().toLowerCase();
      setOutput((prev) => [...prev, `> ${command}`]);

      switch (command) {
        case "clear":
          setOutput([]);
          break;
        case "resume":
          printToTerminal(commands.resume);
          window.open("/resume.pdf", "_blank");
          break;
        case "theme":
          printToTerminal(commands.theme);
          document.documentElement.classList.toggle("dark");
          break;
        default:
          if (commands[command]) {
            printToTerminal(commands[command]);
          } else {
            printToTerminal(`Command not found: ${command}`);
          }
      }

      setInput("");
    }
  };

  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop =
        terminalOutputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <section
      id="terminal"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      className="bg-black text-red-500 dark:bg-white dark:text-red-700 px-6 py-20 font-mono transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto border border-red-500 dark:border-red-400 p-6 rounded-xl shadow-xl">
        <div
          ref={terminalOutputRef}
          className="h-80 overflow-y-auto mb-4 space-y-1"
        >
          {output.map((line, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
        <div className="flex">
          <span className="mr-2 text-red-500 dark:text-red-700">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent w-full outline-none border-none text-red-500 dark:text-red-700 placeholder-red-600 dark:placeholder-red-400"
            placeholder="Enter command..."
            autoComplete="off"
          />
        </div>
      </div>
    </section>
  );
};

export default Terminal;
