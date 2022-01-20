import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setIsDarkMode(prevState => !prevState)
    }
    
    return (
        <div className="container">
            <Navbar darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={isDarkMode} />
        </div>
    )
}