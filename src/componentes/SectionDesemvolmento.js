{
  /*Fazendo alguns Importes */
}
import React from "react";

{
  /*Inicio do Componente*/
}
function Inspiracao() {
  return (
    <section className="Container-section">
      {/*Inicio do Seção*/}
      <h3>Desenvolvendo vidas para o Futuro</h3>
      {/*Atribuindo um subtitulo*/}
      <iframe
        src="https://www.youtube.com/embed/Tq_DhpiZSPA?si=sCd2uRbhAOT8G-Wv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/*Adicionando um Iframe*/}
    </section>
  );
}

export default Inspiracao;
