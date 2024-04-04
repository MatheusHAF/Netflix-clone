import React, { useState, useEffect } from "react";
import styles from "../styles_modules/Navbar.module.css";
import logo from "../images/logodesktop.png";
import { FaSearch, FaUser, FaBell } from "react-icons/fa";

function Navbar() {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${shrink ? styles.shrink : ""}`}>
            <img className={styles.logo} src={logo} alt="logo netflix" />
            <div>
                <ul className={styles.list_bottom}>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Filmes</a></li>
                    <li><a href="">Series</a></li>
                    <li><a href="">Bombando</a></li>
                    <li><a href="">Minha lista</a></li>
                    <li><a href="">Oscars</a></li>
                    <li><a href="">Descubra</a></li>
                </ul>
            </div>
            <ul className={styles.list_top}>
                <li><FaSearch /></li>
                <li><FaBell /></li>
                <li><FaUser /></li>
            </ul>
        </header>
    );
}

export default Navbar;
