import React from "react";

function SectionCursos() {
  return (
    <section className="Container-section">
      <h3>Conheça nossos cursos Oferecidos:</h3>

      <div className="Container-card">
        <div className="Card">
          <h3>Frontend</h3>

          <p>
            Responsável por criar a interface do usuário (UI), desde o layout e
            o design até a funcionalidade e a interação da página. Desenvolvido
            com liguagens como HTML, CSS e JavaScript.
          </p>

          <button className="Btn">Saiba mais</button>
        </div>

        <div className="Card">
          <h3>Backend</h3>

          <p>
            É responsável por tudo o que acontece nos bastidores, desde o
            armazenamento de dados até o processamento de solicitações do
            usuário, incluindo o armazenamento de informações e a conexão com o
            banco de dados.
          </p>

          <button className="Btn">Saiba mais</button>
        </div>

        <div className="Card">
          <h3>Fullstack</h3>

          <p>
            Geralmente são proficientes em linguagens de programação front end e
            back end, bem como em bancos de dados, frameworks e bibliotecas.
            Eles também devem ter um bom entendimento de arquitetura de software
            e design de sistemas.
          </p>

          <button className="Btn">Saiba mais</button>
        </div>
      </div>
      <button className="Btn BtnAction">Inscrições Abertas</button>
    </section>
  );
}

export default SectionCursos;
