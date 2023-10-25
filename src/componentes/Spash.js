{
  /*Fazendo alguns importes */
}
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import logoGrupo from "../assets/logotipo.png";
{
  /*Definido estilos com styled componentes*/
}
const SplashWrapper = styled.div`
  background-color: #007bff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SplashContent = styled.div`
  text-align: center;
`;
{
  /*Inicio do Componente*/
}
const Splash = () => {
  return (
    <SplashWrapper>
      <SplashContent>
        {/*Imagem da logomarca*/}
        <img src={logoGrupo} className="logo" alt="logo" />
        <p>Carregando...</p>
        {/*Icone de engrenagem Giratorio */}
        <FontAwesomeIcon icon={faCog} size={"10x"} spin />
      </SplashContent>
    </SplashWrapper>
  );
};
export default Splash;
