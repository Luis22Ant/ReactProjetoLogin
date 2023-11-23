import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroForm from "./Components/cadastro";
import LoginForm from "./Components/LoginForm";
import Table from "./Components/tableInfo";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;