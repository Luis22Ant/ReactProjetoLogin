import React, { useState } from 'react';
import AuthService from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';

const CadastroForm = () => {
  const [formValues, setFormValues] = useState({
    Usuario: '',
    Senha: '',
    Tipo: '',
    CPF: '',
    DataNascimento: '',
  });

  const navigate = useNavigate();

  const botaoVoltar = () => {
    navigate('/login');
  };

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
    <div className="container">
      <h1 >Cadastrar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-md-2">
          <label className="form-label">Usuário:</label>
          <input type="text" className="form-control" name="Usuario" value={formValues.Usuario} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <label className="form-label">Senha:</label>
          <input type="password" className="form-control" name="Senha" value={formValues.Senha} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <label className="form-label">CPF:</label>
          <input type="text" className="form-control" name="CPF" value={formValues.CPF} onChange={handleChange} />
        </div>
        <div className="col-md-2" >
          <label className="form-label">Data de Nascimento:</label>
          <input type="text" className="form-control" name="DataNascimento" value={formValues.DataNascimento} onChange={handleChange} />
        </div>
        <div className="col-md-2" style={{ marginBottom: '2vh' }}>
          <label className="form-label"></label>
          <select type="text" className="form-control" name="Tipo" value={formValues.Tipo} onChange={handleChange}>
            <option value="">Tipo</option>
            <option value="admin">Admin</option>
            <option value="usuario">Usuário</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Confirmar
        </button>&nbsp;&nbsp;&nbsp;
        <button onClick={botaoVoltar} type="submit" className="btn btn-secondary">
          Voltar
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
