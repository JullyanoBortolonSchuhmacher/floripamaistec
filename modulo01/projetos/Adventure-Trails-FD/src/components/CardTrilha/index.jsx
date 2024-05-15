import * as PropTypes from "prop-types";
import styles from "./index.module.css";

function CardTrilha({ dadosTrilha }) {
 return (
  <>
   <div className={styles.cardContainer}>
    <img
     src={dadosTrilha.urlImagem}
     alt="imagem trilha Lagoa"
     className={styles.cardImagem}
    />
    <div className={styles.cardContent}>
     <div className={styles.cardHeader}>
      <h3 className={styles.nameTrilha}>
       {dadosTrilha.nomeTrilha}
       <h4>
        {dadosTrilha.cidade} / {dadosTrilha.estado}
       </h4>
      </h3>
     </div>
     <br />
     <div className={styles.cardSobre}>
      <h3>{dadosTrilha.nomeUsuario}</h3>
      <p>Duração: {dadosTrilha.duracao} min</p>
      <p>Trajeto: {dadosTrilha.trajeto} km</p>
      <span className={styles.dificuldadeTrilha}>
       {dadosTrilha.dificuldade}
      </span>
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
  tipo: PropTypes.oneOf(["caminhada / trekking", "ciclismo"]),
  nomeUsuario: PropTypes.string.isRequired,
  urlImagem: PropTypes.string.isRequired
 })
};

// aqui vai os prop-types

export default CardTrilha;
