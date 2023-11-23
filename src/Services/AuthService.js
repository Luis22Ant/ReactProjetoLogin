class AuthService {
  static async login(usuario, senha) {
    const apiUrl = 'https://localhost:7201/api/Login/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario,
          senha,
        }),

      });



      if (!response.ok) {
        throw new Error('Login failed');
      } else {
        console.log("Deu certo!")
      }

    } catch (error) {
      // Trate o erro aqui, se necessário
      console.error(error);
      throw new Error('Login failed');
    }
  }


  static async cadastro(usuario, senha, tipo, cpf, dataNascimento) {
    const apiUrl = 'https://localhost:7201/api/Login/cadastro';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario,
          senha,
          tipo,
          cpf,
          dataNascimento
        }),
      });

      // Agora, aguardamos a resposta do servidor usando response.json()
      const responseData = await response.json();

      // Exiba a resposta no console para fins de depuração
      console.log('Resposta do servidor:', responseData);

      if (!response.ok) {
        // Se a resposta não estiver ok, lance um erro
        throw new Error('Login failed');
      } else {
        // Se a resposta estiver ok, imprima 'Deu certo!'
        console.log('Deu certo!');
      }
    } catch (error) {
      // Trate o erro aqui, se necessário
      console.error(error);
      throw new Error('Login failed');
    }
  }


  static async cadastroProduto(nome, valor, quantidade) {
    const apiUrl = 'https://localhost:7201/api/Login/cadastroProduto';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          valor,
          quantidade
        }),
      });

      // Agora, aguardamos a resposta do servidor usando response.json()
      const responseData = await response.json();

      // Exiba a resposta no console para fins de depuração
      console.log('Resposta do servidor:', responseData);

      if (!response.ok) {
        // Se a resposta não estiver ok, lance um erro
        throw new Error('Insert produto failed');
      } else {
        // Se a resposta estiver ok, imprima 'Deu certo!'
        console.log('Deu certo!');
      }
    } catch (error) {
      // Trate o erro aqui, se necessário
      console.error(error);
      throw new Error('Insert produto failed');
    }
  }


}

export default AuthService;
