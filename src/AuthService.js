// src/services/AuthService.js
class AuthService {
  static async login(username, password) {
    // Substitua a URL pela sua API de autenticação
    const apiUrl = 'sua-api-de-autenticacao';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  }
}

export default AuthService;
