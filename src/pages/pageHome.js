{
  /*Importando as bibliotecas e componentes */
}
import React, { useEffect, useState } from "react";
import "../styles.css";
import Header from "../componentes/Header";
import Main from "../componentes/Main";
import Spash from "../componentes/Spash";
import Footer from "../componentes/Footer";
import VLibras from "@djpfs/react-vlibras";
import AjusteFonte from "../componentes/AjusteFonte";
import ButtonDiscorde from "../componentes/ButtonDiscorde";

function pageHome() {
  const [isLoading, setIsLoading] = useState(true);
  {
    /*Inicializa o Hook useState isLoading*/
  }

  useEffect(() => {
    {
      /*Hook UseEffect Inicializado ao carrega página*/
    }
    setTimeout(() => {
      {
        /*Espera 3 segundos para inicializa a função */
      }
      setIsLoading(false);
      {
        /*Define O Estado de Isloading para false*/
      }
    }, 3000);
  });

  return (
    <div>
      {/*Inicio do Componente*/}

      {isLoading ? (
        <>
          <Spash />
          {/*Carregamento da Página*/}
        </>
      ) : (
        <>
          <VLibras forceOnload={true} />
          <Header />
          {/*Cabecalho*/}
          <Main />
          {/*Corpo da Página*/}
          <Footer />
          {/*Footer da Página*/}
          <ButtonDiscorde />
          {/*Botão para o Discorde*/}
          <AjusteFonte />
          {/*Componente de ajuste de Fonte */}
        </>
      )}
    </div>
  );
}

export default pageHome;
