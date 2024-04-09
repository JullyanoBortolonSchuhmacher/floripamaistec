import CardTrilha from "./components/CardTrilha";
import "./App.css";
import React, { useState, useEffect } from 'react';
import header from "./components/header";

function App() {
    const [dadosTrilha, setDadosTrilha] = useState(null);
    const [header, setHeader] = useState(null);
    

    useEffect(() => {
      const fetchDadosTrilha = async() => {
        const response = await fetch('/dataLagoa.json')
        const json =  await response.json();
        setDadosTrilha(json);
      };
      fetchDadosTrilha();
    }, []);
  
    return (
      <>
        <div className="pageHeader">
          <header>
            {header}
            {/* <h1 id="hover">
              <a href="#" className="h1header">
                Adventure Trails FD
              </a>
            </h1>
            <nav>
              <a id="hover" href="#explorar">
                Explorar Trilhas
              </a>
              <a id="hover" href="#cadastro">
                Cadastrar Trilhas
              </a>
            </nav> */}
          </header>
        </div>
        <h1 className="titulo">Explore trilhas incríveis</h1>
        <div className="container">
        {dadosTrilha ? (
         <CardTrilha dadosTrilha={dadosTrilha} />
          ) : (
        <div>Carregando dados da trilha...</div>
        )}
        </div>
      </>
    );
  }

export default App