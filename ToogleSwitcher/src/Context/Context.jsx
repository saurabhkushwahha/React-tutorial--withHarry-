import React, { createContext, useContext } from "react";

 const themeContext= createContext({
       themeMode:"light",
       lightMode:()=>{},
       darkMode:()=>{},
})


export const ThemeProvider= themeContext.Provider

export default function useTheme(){
       return useContext(themeContext)
}

