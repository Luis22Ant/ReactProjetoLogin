// src/components/LoginForm.js
import React, { useState } from 'react';
import AuthService from './AuthService';
import styles from './LoginForm.module.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <div className={styles.ajusteTeste}>
      <label>
        <input type="text" placeholder='Usuário' className={styles.loginForm} value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        <input type="password" className={styles.loginForm} placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className={styles.divButton}>
        <button onClick={handleLogin}>Entrar</button>
      </div>

    </div>
  );
}



export default LoginForm;
