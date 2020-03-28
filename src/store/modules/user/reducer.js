import producce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return producce(state, draft => {
        draft.profile = action.payload.userData;
      });

    default:
      return state;
  }
}
