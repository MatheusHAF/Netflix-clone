import { register } from 'swiper/element/bundle';
import { useState, useEffect } from 'react';

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
    const [slidesPerView, setSlidesPerView] = useState(4); // Defina o número inicial de slides por visualização

    useEffect(() => {
        // Verifique o tamanho da tela e atualize o número de slides exibidos conforme necessário
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1240) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 930) {
                setSlidesPerView(3);
            }
            else if (window.innerWidth >= 610) {
                setSlidesPerView(2);
            }
            else {
                setSlidesPerView(1);
            }
        };

        // Execute a função de atualização quando a janela for redimensionada
        window.addEventListener('resize', updateSlidesPerView);

        // Execute a função de atualização uma vez quando o componente for montado para definir o valor inicial
        updateSlidesPerView();

        // Remova o ouvinte de evento ao desmontar o componente para evitar vazamento de memória
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    return (
        <div className={styles.ca} style={{ marginTop: '-5em' }}>
            <h1>Continue Assistindo</h1>
            <div className={styles.div_swiper}>
                <swiper-container
                    slides-per-view={`${slidesPerView}`}
                    navigation="true"
                    >
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