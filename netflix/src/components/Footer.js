import styles from "../styles_modules/Footer.module.css"
function Footer() {
    return(
        <footer className={styles.footer}>
            <p>Site criado por <a href="https://github.com/MatheusHAF" target="_blank">Matheus Francisco</a>.</p>
        </footer>
    );
}
export default Footer