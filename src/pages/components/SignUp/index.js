import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import logo from '../../../assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="gobarber" />
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já sou cadastrado</Link>
      </form>
    </>
  );
}
