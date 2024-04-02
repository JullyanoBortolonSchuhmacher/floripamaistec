import CardTrilha from "./components/CardTrilha";
import "./App.css"

function App() {

  const listaTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao: 120,
      trajeto: 5,
      dificuldade: "iniciante",
      tipo: "caminhada / trekking",
      nomeUsuario: "Jullyano Schuhmacher",
      urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // urlImagem: "./assets/imagem-trilha-exemplo.jpg"
    }
  ]

  return (
    <>
      <header>
          <h1 id="hover"><a href="#" className="h1header">Adventure Trails FD</a></h1>
        <nav>
            <a id="hover" href="#explorar">Explorar Trilhas</a>
            <a id="hover" href="#cadastro">Cadastrar Trilhas</a>
        </nav>
      </header>
      <div className="container">
        <h1 className="titulo">Explore trilhas incríveis</h1>  
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