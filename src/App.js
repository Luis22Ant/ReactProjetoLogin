// src/App.js
import React from 'react';
import LoginForm from './LoginForm';
import styles from './LoginForm.module.css'

function App() {
  return (
    <div className={styles.centralizar}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default App;
