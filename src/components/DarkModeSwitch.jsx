import { useContext } from "react";
import { GlobalContext } from "../context";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

export const DarkModeSwitch = () => {
    const { theme, setTheme } = useContext(GlobalContext);
    console.log(theme) // only to check which theme is avalable and what value ita holdes
    return (
        <>
        <div style={{position : "fixed", bottom : "80px", right : "80px" ,zIndex : "999", display : "flex", alignItems : "center", justifyContent : "center"}}>
            <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} style={{border : "none", background : "#6969ff", height : "30px", width : "30px", display : "flex", alignItems : "center", justifyContent : "center" ,borderRadius : "50%"}}>{theme === "dark" ? <FaSun style={{fill : "white"}}/> : <FaMoon style={{fill : "white"}}/>}</button>
        </div>
        </>
    );
}
