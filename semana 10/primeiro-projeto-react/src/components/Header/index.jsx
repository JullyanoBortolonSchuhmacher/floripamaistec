import {Link} from "react-router-dom";
import { HomeIcon, AppRegistrationIcon, ExploreIcon } from '@mui/icons-material/Home';

function Header() {
    return (
      <>
        <header>
          {/* <HomeIcon />
          <AppRegistrationIcon /> 
          <ExploreIcon /> */}
          <Link id='hover' to="/"className="h1header"><h1>Adventure Trails FD</h1></Link>
          <nav>
            <Link id='hover' to="/cadastro">Cadastrar</Link>
            <Link id='hover' to="/trilhas">Explorar</Link>         
          </nav>
        </header>
        </>
    );
};

export default Header;