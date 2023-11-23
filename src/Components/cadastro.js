import React, { useState } from 'react';
import AuthService from '../Services/AuthService';

const CadastroForm = () => {
  const [formValues, setFormValues] = useState({
    Usuario: '',
    Senha: '',
    Tipo: '',
    CPF: '',
    DataNascimento:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Chamar o método AuthService.cadastro com os dados do formulário
      const response = await AuthService.cadastro(
        formValues.Usuario,
        formValues.Senha,
        formValues.Tipo,
        formValues.CPF,
        formValues.DataNascimento
      );

      console.log('Cadastrado com sucesso', response);
      // Você pode adicionar lógica aqui, como redirecionar para outra página após o cadastro bem-sucedido.
    } catch (error) {
      console.error('Erro no cadastro', error);
      // Lógica para lidar com falhas no cadastro, como exibir uma mensagem de erro.
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="Usuario" value={formValues.Usuario} onChange={handleChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="Senha" value={formValues.Senha} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tipo:
          <input type="text" name="Tipo" value={formValues.Tipo} onChange={handleChange} />
        </label>
        <br />
        <label>
          CPF:
          <input type="text" name="CPF" value={formValues.CPF} onChange={handleChange} />
        </label>
        <br />
        <label>
          DataNascimento:
          <input type="text" name="DataNascimento" value={formValues.DataNascimento} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroForm;
