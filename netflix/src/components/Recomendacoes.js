import { register } from 'swiper/element/bundle';
import img1 from "../images/imgs-filmes-series/vf1.jpg"
import img2 from "../images/imgs-filmes-series/vf2.jpg"
import img3 from "../images/imgs-filmes-series/vf3.jpg"
import img4 from "../images/imgs-filmes-series/vf4.jpg"
import img5 from "../images/imgs-filmes-series/vf5.jpg"
import img6 from "../images/imgs-filmes-series/vf6.jpg"
import img7 from "../images/imgs-filmes-series/vf7.jpg"
import img8 from "../images/imgs-filmes-series/vf8.jpg"
import img9 from "../images/imgs-filmes-series/vf9.jpg"

import styles from "../styles_modules/ContinueAssistindo.module.css"

import { AiOutlineDislike,AiOutlineLike } from "react-icons/ai";
import { FaRegPlayCircle,FaStar } from "react-icons/fa";

function Recomendacoes() {
    const images = [
        { url: img1, alt: 'Velozes e Furiosos 1' },
        { url: img2, alt: 'Velozes e Furiosos 2' },
        { url: img3, alt: 'Velozes e Furiosos 3' },
        { url: img4, alt: 'Velozes e Furiosos 4' },
        { url: img5, alt: 'Velozes e Furiosos 5' },
        { url: img6, alt: 'Velozes e Furiosos 6' },
        { url: img7, alt: 'Velozes e Furiosos 7' },
        { url: img8, alt: 'Velozes e Furiosos 8' },
        { url: img9, alt: 'Velozes e Furiosos 9' },
    ];
    return (
        <div className={styles.ca}>
            <h1>Porque você assistiu Velozes e Furiosos</h1>
            <div>
                <swiper-container
                    slides-per-view="4"
                    navigation="true">
                    {
                        images.map((image) => (
                            image.url && (
                                <swiper-slide>
                                    <div className={styles.card}>
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className={styles.image}
                                        />
                                        <div className={styles.card_description}>
                                            <div className={styles.overlay}></div>
                                            <p className={styles.text}>
                                            <FaRegPlayCircle /> {image.alt}
                                            </p>
                                            <p className={styles.text_subdescription}>
                                                Laboris ipsum ut occaecat laboris quis laborum
                                                reprehenderitabore Lorem aliqua fugiat aliqua exercitation.
                                                <nav><FaStar/><AiOutlineLike /><AiOutlineDislike /></nav>
                                            </p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            )
                        ))
                    }
                </swiper-container>

            </div>
        </div>
    );
}
export default Recomendacoes