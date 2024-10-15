import { useState, useEffect } from 'react';

const COLOR_SCHEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('light');


  useEffect(() => {
    const savedColorScheme = localStorage.getItem('data-theme');
    const systemColorScheme = getSystemScheme();
    if (savedColorScheme) {
      saveColorScheme(savedColorScheme);
      return;
    }

    if (systemColorScheme) {
      saveColorScheme(systemColorScheme);
    }
  }, []);
  
  const getSystemScheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      return COLOR_SCHEMES.DARK;
    return COLOR_SCHEMES.LIGHT;
  }

  const toggle = () => {
    const newColor = colorScheme === 'dark' ? 'light' : 'dark';
    saveColorScheme(newColor);
  };

  const saveColorScheme = (scheme: string)=> {
    setColorScheme(scheme);
    toggleTheme(scheme);
    localStorage.setItem('data-theme', scheme);
  }

  const toggleTheme = (newColor: string) => {
    document.documentElement.setAttribute('data-theme', newColor)
  }

  return [colorScheme, toggle] as const;
};

export default useColorScheme;
