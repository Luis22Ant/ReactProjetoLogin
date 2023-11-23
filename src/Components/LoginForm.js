import React, { useState } from 'react';
import AuthService from '../Services/AuthService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importe este arquivo para garantir que os estilos sejam aplicados corretamente
import { faStore } from '@fortawesome/free-solid-svg-icons';
import styles from '../LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login(username, password);
      console.log('Login successful', response);
      // Você pode adicionar lógica aqui, como redirecionar para outra página após o login bem-sucedido.
    } catch (error) {
      console.error('Login failed', error);
      // Lógica para lidar com falhas no login, como exibir uma mensagem de erro.
    }
  };

  const telaCadastro = () => {
    navigate('/cadastro');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className={styles.ajusteTeste}>
        <div style={{ textAlign: 'center', marginBottom: '2vh' }}>

          <FontAwesomeIcon icon={faStore} style={{ height: '20vh' }} />

        </div>
        <div className="input-group col-md-3">

          <input
            type="text"
            placeholder="Usuário"
            className={`form-control ${styles.loginForm}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input-group  col-md-3'>
          <input
            type="password"
            className={`form-control ${styles.loginForm}`}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <div className={styles.divButton}>
          <button className="btn btn-primary" onClick={handleLogin}>
            Entrar
          </button>
          <span style={{ margin: '0 10px' }}></span>
          <button className="btn btn-secondary" onClick={telaCadastro}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
