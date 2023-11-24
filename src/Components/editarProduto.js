import React, { useState, useEffect } from 'react';
import AuthService from '../Services/AuthService';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../LoginForm.module.css';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EditarProduto = () => {
  const [formValues, setFormValues] = useState({
    Nome: '',
    Valor: '',
    Quantidade: '',
    Marca: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await AuthService.editarProduto(id);

        // Atualize o estado com os dados do produto
        setFormValues(response);  // Ajuste aqui para setar diretamente os dados do produto
      } catch (error) {
        console.error('Erro ao buscar dados do produto', error);
      }
    };

    fetchProduto();
  }, [id]);

  const botaoVoltar = () => {
    navigate('/table');
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
      // Chamar o método AuthService.editarProduto com os dados do formulário
      const response = await AuthService.editarProduto(id, formValues.Nome,formValues.Valor,formValues.Quantidade,formValues.Marca);

      console.log('Produto atualizado com sucesso', response);
      // Adicionar lógica para redirecionar para outra página após a edição bem-sucedida
      navigate('/table');
    } catch (error) {
      console.error('Erro na atualização', error);
      // Adicionar lógica para lidar com falhas na edição, como exibir uma mensagem de erro.
    }
  };

  return (
    <div className={`container ${styles.teste}`}>
      <h1 style={{ textAlign: 'center' }}>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Nome:</label>
          <input type="text" className="form-control" name="Nome" value={formValues.Nome} onChange={handleChange} />
        </div>
        <div className="col-md-12" style={{ display: 'flex' }}>
          <div className="col-md-6">
            <label className="form-label">Valor:</label>
            <input type="text" className="form-control" name="Valor" value={formValues.Valor} onChange={handleChange} />
          </div>
          <div className="col-md-6" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon style={{ height: '10vh' }} icon={faBoxOpen} />
          </div>
        </div>
        <div className="col-md-6" style={{ marginBottom: '2vh' }}>
          <label className="form-label">Quantidade:</label>
          <input type="text" className="form-control" name="Quantidade" value={formValues.Quantidade} onChange={handleChange} />
        </div>
        <div className="col-md-6" style={{ marginBottom: '2vh' }}>
          <label className="form-label">Marca:</label>
          <input type="text" className="form-control" name="Marca" value={formValues.Marca} onChange={handleChange} />
        </div>
        <div style={{ marginTop: '3%' }}>
          <button type="submit" className="btn btn-primary">
            Confirmar
          </button>&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={botaoVoltar} className="btn btn-secondary">
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarProduto;
