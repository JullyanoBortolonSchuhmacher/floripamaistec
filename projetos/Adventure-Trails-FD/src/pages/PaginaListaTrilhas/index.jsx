import CardTrilha from "../../components/CardTrilha";
import { useContext } from "react";
import { TrilhasContext } from "../../context/TrilhasContext";
import styles from "./pgTrilhas.module.css";
import Footer from "../../components/Footer";

function PaginaListaTrilhas() {
 const { trilhas, isLoading } = useContext(TrilhasContext);

 return (
  <div className={styles.container}>
   <h1 className={styles.titulo}>Explore trilhas incríveis</h1>
   {Array.isArray(trilhas) && !isLoading ? (
    trilhas.map((trilha, index) => (
     <CardTrilha dadosTrilha={trilha} key={index} />
    ))
   ) : (
    <span className={styles.spanError}>Não há dados disponíveis</span>
   )}
   <Footer />
  </div>
 );
}

export default PaginaListaTrilhas;
