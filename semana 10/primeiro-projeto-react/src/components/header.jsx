import './header.css';

function Header() {
    return (
        <>
            <header>
                    <h1 id="hover"><a href="#" className="h1header">Adventure Trails FD</a></h1>
                <nav>
                    <a id="hover" href="#explorar">Explorar Trilhas</a>
                    <a id="hover" href="#cadastro">Cadastrar Trilhas</a>
                </nav>
            </header>
            {/* <div className="imagem"></div> */}
        </>
    );
  };
  
  export default Header;