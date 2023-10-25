{
  /*Fazendo Importes importantes do documento raiz*/
}
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

{
  /*Capturando o elemento com id root do html */
}
const rootElement = document.getElementById("root");
{
  /*Criando o objeto root*/
}
const root = createRoot(rootElement);
{
  /*root Renderizando*/
}
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
