const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className="fixed top-1 sm:top-4 left-1 sm:left-4 z-50">
      <button
        onClick={toggleTheme}
        className="bg-red-600 text-white px-2 py-1 sm:px-4 sm:py-2 
               rounded-lg sm:rounded-xl hover:bg-red-700 transition text-xs sm:text-sm 
               font-semibold dark:bg-black dark:text-red-500 
               border border-white dark:border-red-500 w-8 h-8 sm:w-auto sm:h-auto
               flex items-center justify-center"
      >
        🌓
      </button>
    </div>
  );
};

export default ThemeToggle;
