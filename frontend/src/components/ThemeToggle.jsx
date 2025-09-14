const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition text-sm font-semibold dark:bg-black dark:text-red-500 border border-white dark:border-red-500"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
