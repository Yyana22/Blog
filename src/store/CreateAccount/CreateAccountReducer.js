const defaultState = {
  username: null,
  login: null,
  token: null,
  loading: false,
  error: false,
};

export const reducerCreateAccount = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      console.log(action);
      return {
        username: action.username,
        login: action.login,
        token: action.token,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
