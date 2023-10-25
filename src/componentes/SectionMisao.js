{
  /*Fazendo Importes necessário*/
}
import React from "react";
{
  /*Inicio do Componente*/
}
function Missao() {
  return (
    <section className="Container-section">
      {/*Definir um container da seção*/}
      <h3>
        Nossa missão é transformar vidas através da tecnologia e inclusão.
      </h3>
      {/*DEfinir um titulo a seção*/}
      <ul className="ListaMissao">
        {/*Cria uma lista não-ordenada */}
        <li>
          {/*Item da lista*/}
          Buscamos desenvolver e capacitar PCDs para o mercado de trabalho
          digital.
        </li>
        <li>
          {/*Item da lista*/}
          Contribuimos com o aumento de diversidade na tecnologia.
        </li>
        <li>
          {/*Item da lista*/}
          Acreditamos que times diversos e inclusivos constroem soluções de
          impacto.
        </li>
      </ul>
    </section>
  );
}

export default Missao;
