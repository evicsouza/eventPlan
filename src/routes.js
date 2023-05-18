import React from "react";
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import CadastroUsuario from "./componets/CadastroUsuario";
import TelaInicial from "./componets/TelaInicial";


const RoutesApp = () => {
   return(
   <Router>
      <Routes>
        <Route path="/" exact element={ <Login/> } />
        <Route path="/cadastro" element={ <CadastroUsuario/> } />
        <Route path="/home" element={ <TelaInicial/> } />
      </Routes>
    </Router>
   )
}

export default RoutesApp;