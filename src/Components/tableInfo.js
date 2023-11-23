import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faBox, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from '../Table.module.css';
import { useNavigate, Link } from 'react-router-dom';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7201/api/Produtos');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const botaoSair = () => {
    navigate('/login');
  }
  const tabelaEstilo = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    width: '50%',
    marginLeft: '2vh',
  };

  const celulaEstilo = {
    border: '1px solid black',
    backgroundColor: 'lightGray',
    padding: '8px',
    textAlign: 'left',
  };

  const containerEstilo = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Garante que o contêiner ocupa pelo menos toda a altura da tela
  };

  const rodapeEstilo = {
    marginTop: 'auto', // Empurra o rodapé para a parte inferior
    background: 'lightgray', // Cor de fundo do rodapé
    padding: '10px', // Espaçamento interno do rodapé
    textAlign: 'right',
    border: '1px solid black'
  };

  return (
    <div className={styles.container} style={containerEstilo}>
      <nav className={styles.menu}>
        <div style={{ marginRight: '85%' }}>
          <FontAwesomeIcon style={{ height: '10vh' }} icon={faBox} />
        </div>

        <li className={styles.menuItem}>
          <Link to="/Table">Produtos</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about">Usuários</Link>
        </li>
      </nav>

      <button className='btn btn-primary' style={{ marginBottom: '2vh', width: '10vh', marginLeft: '2vh', marginTop: '2vh' }}>Incluir</button>

      <h2 style={{ marginLeft: '2vh' }}>Tabela de Produtos</h2>
      <table style={tabelaEstilo}>
        <thead>
          <tr>
            <th style={celulaEstilo}> </th>
            <th style={celulaEstilo}></th>
            <th style={celulaEstilo}>Id</th>
            <th style={celulaEstilo}>Nome</th>
            <th style={celulaEstilo}>Cpf</th>
            <th style={celulaEstilo}>Tipo</th>
            <th style={celulaEstilo}>Data de Nascimento</th>
            <th style={celulaEstilo}>Hora do Cadastro</th>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td style={celulaEstilo}> <FontAwesomeIcon icon={faPencil} /></td>
              <td style={celulaEstilo}><FontAwesomeIcon icon={faTrash} /></td>
              <td style={celulaEstilo}>{item.id}</td>
              <td style={celulaEstilo}>{item.nome}</td>
              <td style={celulaEstilo}>{item.cpf}</td>
              <td style={celulaEstilo}>{item.tipo}</td>
              <td style={celulaEstilo}>{item.dataNascimento}</td>
              <td style={celulaEstilo}>{item.horaCadastro}</td>
              {/* Adicione mais células conforme necessário */}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={rodapeEstilo}>
        <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={botaoSair} icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default Table;
