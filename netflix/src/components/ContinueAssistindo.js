import { register } from 'swiper/element/bundle';
import { SliderProps } from 'swiper/element/bundle';

import img1 from "../images/imgs-filmes-series/bb.jpg"
import img2 from "../images/imgs-filmes-series/lws.jpg"
import img3 from "../images/imgs-filmes-series/pb.jpg"
import img4 from "../images/imgs-filmes-series/vf3.jpg"
import img5 from "../images/imgs-filmes-series/vkg.jpg"

import styles from "../styles_modules/ContinueAssistindo.module.css"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
register();

function ContinueAssistindo() {
    const images = [
        { url: img1, alt: 'Breaking Bad' },
        { url: img2, alt: 'O Lobo de Wall Street' },
        { url: img4, alt: 'Velozes e Furiosos 3' },
        { url: img3, alt: 'Peaky Blinders' },
        { url: img5, alt: 'Vikings' },
    ];
    return (
        <div className={styles.ca} style={{ marginTop: '-5em' }}>
            <h1>Continue Assistindo</h1>
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
                                                <nav><FaStar /><AiOutlineLike /><AiOutlineDislike /></nav>
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
export default ContinueAssistindo