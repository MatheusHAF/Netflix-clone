import styles from "../styles_modules/Home.module.css"
import { FaPlay, FaInfo  } from "react-icons/fa";
import Banner from "./Banner";
import ContinueAssistindo from "./ContinueAssistindo";
import Recomendacoes from "./Recomendacoes";

function Home() {
    return(
        <main>
            <Banner/>
            <ContinueAssistindo/>
            <Recomendacoes/>
        </main>
    );
}
export default Home;