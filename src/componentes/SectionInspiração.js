{
  /*Fazendo Importes necessarios*/
}
import React from "react";
{
  /*Inicio do componente */
}
function SectionInspiracao() {
  return (
    <section className="Container-section">
      {/*Criar uma seção definindo uma classe Container-Section */}
      <h3>Desenvolvendo vidas para o Futuro</h3>
      {/*Atribui um subtitulo */}
      <iframe
        src="https://www.youtube.com/embed/Tq_DhpiZSPA?si=sCd2uRbhAOT8G-Wv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {/*Adiciona um iframe */}
    </section>
  );
}

export default SectionInspiracao;
