import styles from "../styles_modules/Navbar.module.css"
import logo from "../images/logodesktop.png"

import { FaSearch,FaUser,FaBell } from "react-icons/fa";

function Navbar() {
    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo netflix" />
            <ul>
                <li><FaSearch/></li>
                <li><FaBell/></li>
                <li><FaUser/></li>
            </ul>
        </header>
    );
}
export default Navbar;