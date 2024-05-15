import {Link} from "react-router-dom";
import styles from "./index.module.css";


function Header() {
    return (
      <>
        <footer>
          <Link id='hover' to="/" className="h1Header"><h4>Adventure Trails FD</h4></Link>
          <div>
            <i className="fi fi-brands-github"></i>
            <i className="fi fi-brands-linkedin"></i>
            <i className="fi fi-brands-instagram"></i>
        </div>
        </footer>
        <div className={styles.vltTopo}>
          <a href="#topo">
            <i class="fi fi-rr-arrow-small-up"></i>
          </a>
        </div>
      </>
    );
};

export default Header;