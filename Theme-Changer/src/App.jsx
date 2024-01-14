import React from 'react'
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import Themebtn from "./components/Themebtn";
import Card from "./components/Card";

 
function App() {
    const [themeMode,setThemeMode] = useState("light")

    const ligthTheme=()=>{
      setThemeMode("light")
    }
    const  darkTheme=()=>{
      setThemeMode("dark")
    }
 
  // actual change in theme 
  useEffect(()=>{
   const moder=  document.querySelector('html')
   moder.classList.remove("light","dark")
   moder.classList.add(themeMode)
  },[themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode,ligthTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                       
                    </div>
                </div>
            </div>
      </ThemeProvider>
    </>
      );
  
}

export default App
