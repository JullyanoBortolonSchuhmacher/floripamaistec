import { Link } from "react-router-dom";
import styles from "./pgInicial.module.css";
import Footer from "../../components/Footer";
import imgTrilha from "../../assets/exemplo-trilha.jpg";

function PaginaInicial() {
 return (
  <>
   <div className={styles.container} id="topo">
    <div className={styles.boxTitulo}>
     <h1>
      Que tal aproveitar um tempo<br></br>com a natureza?
     </h1>
     <br></br>
     <p>
      Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
      aventuras e inspire-se com as experiências de outros aventureiros.
      Prepare-se para explorar novos horizontes e se conectar com a natureza
      através do Adventure Trails!
     </p>
     <Link to="/trilhas">
      <button>Explorar trilhas</button>
     </Link>
    </div>
   </div>
   <div className={styles.content}>
    <h1 className={styles.title}>Explore trilhas incríveis</h1>
    <p>
     O "Adventure Trails FD" é seu portal para explorar e compartilhar as
     melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </p>
    <Link to="/trilhas">
     <button className={styles.btnExplorar}>Explorar trilhas</button>
    </Link>
   </div>
    <hr/>
   <div className={styles.content2column}>
    <div className={styles.content2text}>
    <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
    <Link to="/cadastro">
     <button className={styles.btnExplorar}>Cadastre trilhas</button>
    </Link>
    </div>
    <img src={imgTrilha}/>
   </div>
    <Footer />
  </>
 );
}

export default PaginaInicial;
