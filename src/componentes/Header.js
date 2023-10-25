{
  /*Alguns importes necessários bibliotecas icones e imagens*/
}
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import logoGrupo from "../assets/logotipo.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
{
  /*Inicio do Componente*/
}
function Header() {
  const navigate = useNavigate();
  {
    /*Definindo variaveis para estiliza co componente*/
  }
  const estilo = { color: "#e0f7fa", fontSize: "2rem", fontWeight: "bolder" };
  const estilo1 = { color: "#e0f7fa" };
  const fixo = {
    position: "fixed",
    width: "100vw",
    display: "absolute",
    zIndex: "1",
    top: 0
  };
  return (
    <header>
      {/*Aqui começa a header da página*/}
      <Navbar style={fixo} expand="lg" bg="primary">
        {/*Inserimos a navbar com alguns estilo */}
        <Container style={estilo1}>
          {/*Estilizando o container*/}
          <Navbar.Brand href="#" style={estilo}>
            <img src={logoGrupo} className="logo" alt="logo" />
            {/*Inserindo a imagem do Logotipo*/}
            <FontAwesomeIcon icon={faCog} size={"xs"} spin />
            {/*Inserindo o icone de engrenagem girando*/}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/*Criando o menu de opções */}
            <Nav className="me-auto">
              {/*Inserindo Link*/}
              <Nav.Link href="#saibaMais" style={estilo1}>
                Saiba Mais
              </Nav.Link>
              {/*Inserindo Link*/}
              <Nav.Link href="#inscrição" style={estilo1}>
                Inscrição
              </Nav.Link>
              {/*Inserindo um Dropdown*/}
              <NavDropdown title="Cursos" id="basic-nav-dropdown">
                {/*Alguns Links*/}
                <NavDropdown.Item href="#frontend">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="#backend">Backend</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#fullStack">
                  Full Stack
                </NavDropdown.Item>
              </NavDropdown>
              {/*Redireciona para página de login*/}

              <Button
                variant="info"
                onClick={() => navigate("/login")}
                style={estilo1}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
