import './styles/header.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../App.js';
import ReactSwitch from "react-switch";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {

    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <div className="header-body">
            <h1>LOGO</h1>
            <nav>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} checkedIcon={<DarkModeIcon/>} uncheckedIcon={<LightModeIcon/>}  />
                <Link to="/">Strona główna</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
        </div>
    );
}

export default Header