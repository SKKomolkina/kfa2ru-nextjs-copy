import {useContext} from "react";
import {Theme, ThemeContext} from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.LIGHT;
        setTheme(newTheme)
    }

    return {theme, toggleTheme}
}
