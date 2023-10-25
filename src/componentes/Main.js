{
  /*Fazendo alguns imports necessarios*/
}
import React from "react";
import SectionSlide from "./SectionSlide";
import SectioSaibaMais from "./SectionSaibaMais";
import SectionInscricao from "./Inscricao";
import SectionBackend from "./SectionBackend";
import SectionFullStack from "./SectionFullStack";
import SectionFrontend from "./SectionFrontend";
import SectionDepoimentos from "./SectionDepoimentos";
import SectionTalentos from "./SectionTalentos";
import SectionInspiracao from "./SectionInspiração";
import SectionMissao from "./SectionMisao";
{
  /*Inicio do Componente Main */
}
function Main() {
  return (
    <main>
      {/*Adicionando o componente carrosel*/}
      <SectionSlide />
      {/*Adicionando o componente misão*/}
      <SectionMissao />
      {/*Adicionando o componente da seção saiba mais*/}
      <SectioSaibaMais />
      {/*Adicionando o componente da seção de Cursos*/}
      <SectionInscricao />
      {/*Adicionando o componente da seção Inpiração*/}
      <SectionInspiracao />
      {/*Adicionando o componente da seção frontend*/}
      <SectionFrontend />
      {/*Adicionando o componente da seção backend*/}
      <SectionBackend />
      {/*Adicionando o componente da seção full stack*/}
      <SectionFullStack />
      {/*Adicionando o componente da seção depoimentos*/}
      <SectionDepoimentos />
      <SectionTalentos />
    </main>
  );
}
export default Main;
