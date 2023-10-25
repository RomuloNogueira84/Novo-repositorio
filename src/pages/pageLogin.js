{
  /*Fazendo Importes Necessários */
}

import React, { useState } from "react";
import { auth } from "../firebase.authetication";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

{
  /*Inicio do Componente  */
}
const pageLogin = () => {
  {
    /*Fazendo Váriaveis de estado e navegação */
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {
    /*Definindo a função de carregamento do formulário */
  }

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Importando as credencias
        const user = userCredential.user;
        //Fazendo o alerta
        alert("O usuário " + user.email + " foi autenticado !");
      })
      .catch((error) => {
        //mensagem de erro
        alert("Email ou Senha Incorretos.");
      });
  };

  return (
    <>
      <main>
        {/*Inicio da main */}
        <section>
          {/*Inicio do formulário */}
          <Form style={{ padding: "10vw" }} onSubmit={onLogin}>
            <Button variant="link" onClick={() => navigate("/")}>
              Voltar
            </Button>

            <h3 style={{ textAlign: "center" }}> Login </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite Sua Senha "
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </section>
      </main>
    </>
  );
};

export default pageLogin;
