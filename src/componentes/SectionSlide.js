{
  /*Importa o react*/
}
import React from "react";
{
  /*Importa o componentes Carousel do bootstrap*/
}
import Carousel from "react-bootstrap/Carousel";
{
  /*Importa algumas imagens */
}
import frontend from "../assets/frontend.jpg";
import fullstack from "../assets/code1.jpg";
import backend from "../assets/backend.avif";

function SectionSlide() {
  {
    /*Define alguns estilos de componentes*/
  }
  const branco = { color: "white", fontWeight: "900" };
  const altura = { height: "70vh" };
  const margin = { marginTop: "20vh", zIndex: "0.5" };
  {
    /*Inicio do Componente React*/
  }
  return (
    <section>
      <Carousel style={margin} data-bs-theme="dark" id="home">
        {/*Item do Carrosel*/}
        <Carousel.Item style={altura}>
          <img className="d-block w-100" src={frontend} alt="First slide" />
          <Carousel.Caption
            style={{ backgroundColor: "gray", width: "50vw", opacity: "0.9" }}
          >
            <h5 style={branco}>Carreira Frontend</h5>
            <p style={branco}>Desenvolva Páginas Web.</p>
          </Carousel.Caption>
          {/*Item do Carrosel*/}
        </Carousel.Item>
        <Carousel.Item style={altura}>
          <img className="d-block w-100" src={backend} alt="Second slide" />
          <Carousel.Caption
            style={{
              backgroundColor: "black",
              width: "50vw",
              opacity: "0.9",
              marginLeft: "10VW"
            }}
          >
            <h5 style={branco}>Carreira Backend</h5>
            <p style={branco}>
              Desenvolva Aplicações em Arquitetura de Micro-serviços.
            </p>
          </Carousel.Caption>
          {/*Item do Carrosel*/}
        </Carousel.Item>
        <Carousel.Item style={altura}>
          <img className="d-block w-100" src={fullstack} alt="Third slide" />
          <Carousel.Caption
            style={{
              backgroundColor: "grey",
              width: "50vw",
              opacity: "0.9",
              marginLeft: "20vw"
            }}
          >
            <h5 style={branco}>Carreira Full Stack</h5>
            <p style={branco}>Trabalhe No Backend e Frontend.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default SectionSlide;
