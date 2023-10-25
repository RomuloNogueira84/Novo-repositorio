{
  /*Importa o react*/
}
import React from "react";
{
  /*Importa o componente Button do Bootstrap*/
}
import Button from "react-bootstrap/Button";

function AjusteFonte() {
  {
    /*Define a variavel tamanho fonte para 16*/
  }
  let tamanho = 16;
  {
    /*Cria a função para diminuir a fonte */
  }
  function diminuir() {
    tamanho--;
    document.body.style.fontSize = tamanho + "px";
  }
  {
    /*Cria a função para aumentar a fonte*/
  }
  function aumentar() {
    tamanho++;
    document.body.style.fontSize = tamanho + "px";
  }

  return (
    <div>
      <div id="fonteAcessibilidade">
        {" "}
        {/*div com id acessibilidade e criada*/}
        <h5>Ajuste a Fonte</h5>
        <div>
          {/*Cria o Botão para aumentar a fonte*/}
          <Button variant="danger" onClick={() => aumentar()}>
            +
          </Button>
          {/*Cria a função para diminuir a fonte*/}
          <Button onClick={() => diminuir()}>-</Button>
        </div>
      </div>
    </div>
  );
}

export default AjusteFonte;
