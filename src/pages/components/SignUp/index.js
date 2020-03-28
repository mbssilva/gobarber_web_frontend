import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';

import logo from '../../../assets/logo.svg';

import { signUpRequest } from '../../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome'),
  email: Yup.string().email('Insira um e-mail').required('E-mail obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { name, email, password } = data;

    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="text" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando ...' : 'Acessar'}</button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
