import * as PropTypes from "prop-types"
import dadosTrilha from "./listasTrilha.json"
import "./style.css"

const useFetchTrilhas = (url) => {
  const [dadosTrilha, setDadosTrilha] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  //fazer Depois:
  //useEffect aqui
  //fetch 
  //meucomponente
  //se erro ....
  //renderizar:
}

function CardTrilha() {

  return (
    <>
      <div className="card_container">
        <img src={dadosTrilha.urlImagem} width={200} alt="imagem trilha Lagoa" className="card_imagem" />
        <div className="card_content">
          <div className="card_header">
            <h3>
              {dadosTrilha.nomeTrilha}
              <p>-</p>
              <h4>{dadosTrilha.cidade} / {dadosTrilha.estado}</h4>
              <button id="favoritar" className="material-symbols-outlined">favorite</button>
            </h3>
          </div>
          <br />
          <div className="card_about">
            <h3>{dadosTrilha.nomeUsuario}</h3>
            <p>Duração: {dadosTrilha.duracao} min</p>
            <p>Trajeto: {dadosTrilha.trajeto} km</p>
            <span>{dadosTrilha.dificuldade}</span>
          </div>
        </div>
      </div>
    </>
  );
}

// configuração das props types
CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    // enum
    tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired
  })
}


export default CardTrilha;