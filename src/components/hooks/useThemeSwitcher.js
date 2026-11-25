import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
      
        const mediaQuery = window.matchMedia(preferDarkQuery);
    }, [])
    


  return (
    <div>
      
    </div>
  )
}

export default useThemeSwitcher
