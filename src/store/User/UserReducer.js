const defaultState = {
  username: null,
  email: null,
  token: null,
  image: null,
};

export const reducerSelectedUser = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CREATE_ACCOUNT':
      return {
        username: action.user.username,
        email: action.user.email,
        token: action.user.token,
      };
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
    case 'EDIT_ACCOUNT':
      console.log(action);
      return {
        username: action.user.username,
        email: action.user.email,
        token: action.user.token,
        image: action.user.image,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
