import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Header() {
 return (
  <footer className={styles.footer}>
   <a className={styles.link} href="#topo">
    <h3>Adveture Trails FD</h3>
   </a>
   <div className={styles.logos}>
    <i class="fi fi-brands-linkedin"></i>
    <i class="fi fi-brands-github"></i>
    <i class="fi fi-brands-instagram"></i>
   </div>
  </footer>
 );
}

export default Header;
