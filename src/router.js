import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroForm from "./Components/cadastro";
import LoginForm from "./Components/LoginForm";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<CadastroForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;