import {Link} from "react-router-dom";
import "./index.css"
function Header() {
    return (
      <>
        <header>

          <Link id='hover' to="/"className="h1header"><h1>Adventure Trails FD</h1></Link>
          <nav>
            <Link id='hover' to="/cadastro">Cadastrar</Link><br></br>
            <Link id='hover' to="/trilhas">Explorar</Link>         
          </nav>
        </header>
        </>
    );
};

export default Header;