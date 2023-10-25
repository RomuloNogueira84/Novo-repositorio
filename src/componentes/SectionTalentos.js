{
  /*Fazendo alguns importes necessário*/
}
import React from "react";
import Jerson from "../assets/Jerson.jpeg";
import Romulo from "../assets/Romulo.jpeg";
import sandro from "../assets/Sandro.jpeg";
import Tiago from "../assets/Tiago.jpeg";
{
  /*Inicio do componente */
}
function SectionTalentos() {
  return (
    <section className="Container-section">
      {/*Inicio do container da seção */}
      <h2>Conheça nossos Talentos:</h2>
      {/*Atribui um card*/}
      <div className="Container-card">
        <div className="Card">
          <img className="imgTalentos" src={Jerson} alt="Aluno Acesstech" />
          <h3>Jerson Barros</h3>
          <p>
            Desenvolvedor Frontend, com habilidades em HTML, CSS, JavaScript e
            React.
          </p>
        </div>
        {/*Atribui um card*/}
        <div className="Card">
          <img className="imgTalentos" src={Romulo} alt="Aluno Acesstech" />
          {/*Atribui um imagem*/}
          <h3>Romulo Nogueira</h3>
          {/*Atribui um subtitulo*/}
          <p>
            Desenvolvedor Frontend, com habilidades em HTML, CSS, JavaScript e
            React.
          </p>
        </div>
        {/*Atribui um card*/}
        <div className="Card">
          <img className="imgTalentos" src={Tiago} alt="Aluno Acesstech" />
          {/*Atribui um imagem*/}
          <h3>Tiago Carvalho</h3>
          {/*Atribui um subtitulo*/}
          <p>
            Desenvolvedor Frontend, com habilidades em HTML, CSS, JavaScript e
            React.
          </p>
        </div>
        {/*Atribui um card*/}
        <div className="Card">
          <img className="imgTalentos" src={sandro} alt="Aluno Acesstech" />
          {/*Atribui um imagem*/}
          <h3>Sandro Araújo</h3>
          {/*Atribui um subtitulo*/}
          <p>
            Desenvolvedor Frontend, com habilidades em HTML, CSS, JavaScript e
            React.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionTalentos;
