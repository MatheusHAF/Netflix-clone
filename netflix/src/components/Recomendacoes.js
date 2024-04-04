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
function Recomendacoes() {
    return(
        <div className={styles.ca}>
            <h1>Porque você assistiu Velozes e Furiosos</h1>
            <nav>
                <swiper-container
                    slides-per-view="4"
                    navigation="true">
                    <swiper-slide><img src={img1} alt="" /></swiper-slide>
                    <swiper-slide><img src={img2} alt="" /></swiper-slide>
                    <swiper-slide><img src={img3} alt="" /></swiper-slide>
                    <swiper-slide><img src={img4} alt="" /></swiper-slide>
                    <swiper-slide><img src={img5} alt="" /></swiper-slide>
                    <swiper-slide><img src={img6} alt="" /></swiper-slide>
                    <swiper-slide><img src={img7} alt="" /></swiper-slide>
                    <swiper-slide><img src={img8} alt="" /></swiper-slide>
                    <swiper-slide><img src={img9} alt="" /></swiper-slide>
                </swiper-container>

            </nav>
        </div>
    );
}
export default Recomendacoes