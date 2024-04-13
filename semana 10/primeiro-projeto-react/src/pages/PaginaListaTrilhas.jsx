import CardTrilha from "../components/CardTrilha";
import { useContext } from "react";
import {TrilhasContext} from "../context/TrilhasContext"

function PaginaListaTrilhas() {

  const {trilhas, isLoading} = useContext(TrilhasContext)

  return (
    <>
      <div className="container">
        <h1 className="tittulo">Explore trilha incríveis</h1>
          {Array.isArray(trilhas) && !isLoading ? (
            trilhas.map((trilha, index) => (
              <CardTrilha dadosTrilha={trilha} key={index} />
            ))
          ) : (
            <span>Ocorreu um erro.. </span>
          )
        }
      </div>
    </>
  )
}

export default PaginaListaTrilhas;