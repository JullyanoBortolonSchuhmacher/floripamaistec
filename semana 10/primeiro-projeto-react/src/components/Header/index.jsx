import { Link } from "react-router-dom";
import "./index.module.css";
import styles from "./index.module.css";

function Header() {
 return (
  <>
   <header className={styles.header}>
    <Link id="hover" to="/" className={styles.link}>
     <h1>Adventure Trails FD</h1>
    </Link>
    <nav className={styles.link}>
     <Link id="hover" to="/cadastro" className={styles.link}>
      Cadastrar
     </Link>
     <br></br>
     <Link id="hover" to="/trilhas" className={styles.link}>
      Explorar
     </Link>
    </nav>
   </header>
  </>
 );
}

export default Header;
