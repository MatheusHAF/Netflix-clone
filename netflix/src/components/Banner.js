import styles from "../styles_modules/Banner.module.css"
import logo from "../images/logo-banner.png"
import { FaPlay, FaInfo } from "react-icons/fa";

function Banner() {
    return (
        <div className={styles.home}>
            <div className={styles.description_home}>
                <img src={logo} alt="logo The Walking Dead" />
                <p>Após um apocalipse zumbi, os sobreviventes mantêm vivo o que resta da esperança na humanidade e trabalham em conjunto para lutar pela sua própria sobrevivência.</p>
                <nav><button><FaPlay /> Assistir </button><button><FaInfo /> Saber Mais</button></nav>
            </div>
        </div>
    );
}
export default Banner;