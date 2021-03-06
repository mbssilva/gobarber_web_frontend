import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import AvatarInput from './AvatarInput';

import { signOut } from '../../../store/modules/auth/actions';
import { updateProfileRequest } from '../../../store/modules/user/actions';

export default function Profiles() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <hr />
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
