// src/components/LoginForm.js
import React, { useState } from 'react';
import AuthService from './AuthService';

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
    <div>
      <label>
        Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default LoginForm;
