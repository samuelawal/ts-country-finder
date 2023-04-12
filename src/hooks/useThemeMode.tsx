import {useEffect, useState} from 'react';
import { ThemeMode } from '../types';

export const useThemeMode = () => {
    const [theme, setTheme] = useState<ThemeMode>('light');

    const setMode = (mode : ThemeMode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }
    const toggleTheme = () => {
        theme === "light" ? setMode('dark') : setMode('light')
    }
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as ThemeMode;
        localTheme && setTheme(localTheme)
    }, [])
    return [
        theme,
        toggleTheme
]
}