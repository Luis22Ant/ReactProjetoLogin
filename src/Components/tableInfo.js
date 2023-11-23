// src/components/Table.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7201/api/Produtos');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    // Chama a função para buscar dados ao montar o componente
    fetchData();
  }, []); // O segundo argumento é uma lista de dependências vazia para garantir que a chamada só seja feita uma vez

  return (
    <div>
      <h2>Tabela de Dados</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            {/* Adicione mais colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              {/* Adicione mais células conforme necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
