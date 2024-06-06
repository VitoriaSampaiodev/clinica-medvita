import React, { useContext, useState } from 'react';

import './style.css';
import { UserContext } from '../../contexts/UserContext';

const LoginForm: React.FC = () => {
  const context = useContext(UserContext); // Obtendo a função handleLogin do contexto

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (context && context.handleLogin) {
      context.handleLogin(username, password);
    } else {
      console.error('UserContext não encontrado ou handleLogin não definido');
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form-title">Login</h2>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Digite seu usuário"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit" className="btn-login">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
