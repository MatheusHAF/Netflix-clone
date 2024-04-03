import styles from "../styles_modules/Navbar.module.css"
import logo from "../images/logodesktop.png"

import { FaSearch,FaUser,FaBell } from "react-icons/fa";

function Navbar() {
    return(
        <header className={styles.header}>
            <div className={styles.top}>
                <img className={styles.logo} src={logo} alt="logo netflix" />
                <ul>
                    <li><FaSearch/></li>
                    <li><FaBell/></li>
                    <li><FaUser/></li>
                </ul>
            </div>
            <div className={styles.bottom}>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Filmes</a></li>
                    <li><a href="">Series</a></li>
                    <li><a href="">Bombando</a></li>
                    <li><a href="">Minha lista</a></li>
                    <li><a href="">Oscars</a></li>
                    <li><a href="">Descubra</a></li>
                </ul>
            </div>
        </header>
    );
}
export default Navbar;