import React from 'react'

export const ThemeContext = React.createContext({
    themeMode : "dark",
    darkTheme : () => {},
    lightTheme : () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return React.useContext(ThemeContext);
}