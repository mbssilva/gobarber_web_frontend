import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const aux = rest.oldPassword ? rest : {};

    const profile = {
      name,
      email,
      ...aux,
    };

    const response = yield call(api.put, '/users', profile);

    toast.success('Perfil Atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    console.tron.error(err);

    toast.error('Erro ao atualizar perfil. Confira seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
