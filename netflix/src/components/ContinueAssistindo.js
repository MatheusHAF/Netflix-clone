import { register } from 'swiper/element/bundle';

import img1 from "../images/imgs-filmes-series/bb.jpg"
import img2 from "../images/imgs-filmes-series/lws.jpg"
import img3 from "../images/imgs-filmes-series/pb.jpg"
import img4 from "../images/imgs-filmes-series/vf3.jpg"
import img5 from "../images/imgs-filmes-series/vkg.jpg"

import styles from "../styles_modules/ContinueAssistindo.module.css"
register();

function ContinueAssistindo() {
    const swiperEl = document.querySelector('swiper-container');

    const params = {
        // array with CSS styles
        injectStyles: [
            `
      :host(.red) .swiper-button-next {
        color: red;
      }
      `,
        ],
    };

    Object.assign(swiperEl, params);

    swiperEl.initialize();
    return (
        <div className={styles.ca} style={{ marginTop: '-5em' }}>
            <h1>Continue Assistindo</h1>
            <nav>
                <swiper-container
                    slides-per-view="4"
                    navigation="true"
                >
                    <swiper-slide><img src={img1} alt="" /></swiper-slide>
                    <swiper-slide><img src={img2} alt="" /></swiper-slide>
                    <swiper-slide><img src={img3} alt="" /></swiper-slide>
                    <swiper-slide><img src={img4} alt="" /></swiper-slide>
                    <swiper-slide><img src={img5} alt="" /></swiper-slide>
                </swiper-container>

            </nav>
        </div>
    );
}
export default ContinueAssistindo