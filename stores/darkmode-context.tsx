import {createContext, useState} from "react";

const DarkModeContext = createContext({
    darkMode: false,
    setDarkMode: () => {
    }
})

export function DarkModeContextProvider(props: any) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const context = {darkMode: isDarkMode, setDarkMode: toggleDarkMode}
    return (<DarkModeContext.Provider value={context}>{props.children}</DarkModeContext.Provider>)
}

export default DarkModeContext;
