import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){
  return (
    <>
    <div className="card_container" >
      <img className="card_imagem" width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
      <div className="card_content">
      <div className="card_header">
        <h3>{dadosTrilha.nomeTrilha} 
        <p>-</p>
        <h4> {dadosTrilha.cidade} / {dadosTrilha.estado}</h4>
        <button id="favoritar"><span class="material-symbols-outlined">favorite</span></button>
        </h3>
      </div>
      <br></br>
      <div className="card_about">
        <h3> {dadosTrilha.nomeUsuario} </h3>
        <p> Duração: {dadosTrilha.duracao} min </p>
        <p> Trajeto: {dadosTrilha.trajeto} km </p>
        <span> {dadosTrilha.dificuldade} </span>
      </div>
      </div>
    </div>
    </>
  )
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

// aqui vai os prop-types

export default CardTrilha;