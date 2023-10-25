{
  /*Importando as bibliotecas e componentes */
}
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/pageHome";
import Login from "./pages/pageLogin";
{
  /*Inicio do componente App */
}
function App() {
  return (
    <Router>
      <div>
        {/*Definindo as rotas da aplicação */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
