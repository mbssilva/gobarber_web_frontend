import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

// import { Container } from './styles';

import { signInRequest } from '../../../store/modules/auth/actions';

import logo from '../../../assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('Insira um e-mail').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando ...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}