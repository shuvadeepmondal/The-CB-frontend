// DarkModeToggle.tsx
import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  // Initialize state with a function to check localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Apply the mode on initial load and whenever `isDarkMode` changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md transition-all duration-300"
    >
      {isDarkMode ? (
        <span className="flex items-center">
          <svg
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 5.14a4.872 4.872 0 100 9.72A4.872 4.872 0 0010 5.14zM10 0v2.083h1.389V0H10zm0 17.917v2.083h1.389v-2.083H10zm7.083-7.083h2.083V10h-2.083V10zM0 10h2.083v1.389H0V10zM5.09 5.09l1.442-1.442-.982-.982L4.11 4.108l.982.982zM14.517 14.517l1.442-1.442-.982-.982-1.442 1.442.982.982zM14.517 5.09l-.982-.982-1.442 1.442.982.982 1.442-1.442zM5.09 14.517l-.982-.982L2.666 15l.982.982 1.442-1.442z" />
          </svg>
          <span className="ml-2">Dark Mode</span>
        </span>
      ) : (
        <span className="flex items-center">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.305 1.667v2.083h1.389V1.667h-1.39zM4.63 3.62l-.982.982 1.442 1.442.982-.982-1.442-1.442zm10.74 0L13.927 5.09l.982.982 1.442-1.442-.982-.982zM10 5.14a4.872 4.872 0 100 9.72A4.872 4.872 0 0010 5.14zm0 1.389a3.462 3.462 0 110 6.923 3.462 3.462 0 010-6.923zM1.667 9.305v1.39h2.083v-1.39H1.667zm14.583 0v1.39h2.083v-1.39h-2.083zM5.09 13.927L3.648 15.37l.982.982 1.442-1.442-.982-.982zm9.82 0l-.982.982 1.442 1.442.982-.982-1.442-1.442zM9.305 16.25v2.083h1.389V16.25h-1.39z" />
          </svg>
          <span className="ml-2">Light Mode</span>
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
