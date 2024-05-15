import CardTrilha from "../../components/CardTrilha";
import { useContext } from "react";
import styles from "./pgTrilhas.module.css";
import { TrilhasContext } from "../../context/TrilhasContext";

function PaginaListaTrilhas() {
 const { trilhas, isLoading } = useContext(TrilhasContext);

 return (
  <>
   <div className={styles.container}>
    <h1 className={styles.titulo}>Explore trilhas incríveis</h1>
    {Array.isArray(trilhas) && !isLoading ? (
     trilhas.map((trilha, index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />
     ))
    ) : (
     <span className={styles.spanError}>Indisponível no momento</span>
    )}
   </div>
  </>
 );
}

export default PaginaListaTrilhas;
