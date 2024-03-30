import CardTrilha from "./components/cardTrilha";
import "./App.css"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 4,
      dificuldade: "iniciante",
      tipo: "caminhada / trekking",
      nomeUsuario: "Guilherme André",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // urlImagem: "./assets/imagem-trilha-exemplo.jpg"
    }
  ]

  return (
    <>
    <header>
      <nav>
        <h1>Adventure Trails FD</h1>
          <a href="#explorar">Explorar Trilhas</a>
          <a href="#cadastro">Cadastrar Trilhas</a>
      </nav>
    </header>
    <div className="container">
      <div className="header" display: flex flex-direction:row>
        <h1 className="titulo">Explore trilhas incríveis</h1>
        <button className="favoritar"></button>
        </div>
      {
        listaTrilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))
      }
    </div>
    </>
  )
}
export default App