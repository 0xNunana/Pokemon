// ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }:{children:ReactNode}) => {
  const [themeColor, setThemeColor] = useState<string>('#E85382');

  const handleThemeColorChange = (color: string) => {
    setThemeColor(color);
    localStorage.setItem('themeColor', color); // Store the selected color in local storage
  };

  useEffect(() => {
    // Retrieve the theme color from local storage when the component mounts
    const storedColor = localStorage.getItem('themeColor');
    if (storedColor) {
      setThemeColor(storedColor);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor: handleThemeColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
