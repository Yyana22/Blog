const defaultState = {
  username: null,
  email: null,
  token: null,
  loading: false,
  error: false,
};

export const reducerSingInAccount = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'SING_IN_ACCOUNT':
      return {
        username: action.user.username,
        email: action.user.email,
        token: action.user.token,
      };
    case 'OUT_ACCOUNT':
      return {
        username: null,
        email: null,
        token: null,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
