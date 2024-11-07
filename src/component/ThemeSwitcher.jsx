import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>Current Theme: {theme}</button>
        </div>
    )
}

export default ThemeSwitcher