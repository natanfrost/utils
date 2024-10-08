import { useState, useEffect } from 'react';

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  const toggle = () => {
    const newColor = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newColor);
    localStorage.setItem('colorScheme', newColor);
    toggleTheme();
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return [colorScheme, toggle] as const;
};

export default useColorScheme;
