// context/context.jsx
"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [rawTheme, setRawTheme] = useState('light'); 
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // 2. Set the actual theme from storage/system
        if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
            setRawTheme("dark");
        } else {
            setRawTheme("light");
        }

        // 3. Mark as mounted only AFTER we've determined the theme
        setIsMounted(true);
    }, []);

    const changeTheme = () => {
        const newTheme = rawTheme === 'light' ? 'dark' : 'light';
        setRawTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const theme = isMounted ? rawTheme : 'light';

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, isMounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);