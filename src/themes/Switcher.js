import useDarkMode from "./useDarkMode";
import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light"
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                style={{ marginBottom: "2rem" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
                className="right-0 absolute py-0.5 mr-2 mt-2"
            />
        </>
    );
}