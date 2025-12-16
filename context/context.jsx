// context/context.jsx (Updated to prevent Hydration Mismatch)
"use client";

import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const [isMounted, setIsMounted] = useState(false);

    // context/context.jsx

    useEffect(() => {

        const storedTheme = localStorage.getItem("theme");


        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


        if (storedTheme === "dark") {
            setTheme("dark");
        } else if (storedTheme === "light") {
            setTheme("light");
        } else if (systemPrefersDark) {

            setTheme("dark");
        } else {
            setTheme("light");
        }

        setIsMounted(true);
    }, []);

    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    const contextValue = { theme, setTheme, changeTheme, isMounted };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => React.useContext(ThemeContext);