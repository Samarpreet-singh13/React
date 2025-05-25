import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    // we canadd any datatype in the context as parameter as written below it could hold anything of the context
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}