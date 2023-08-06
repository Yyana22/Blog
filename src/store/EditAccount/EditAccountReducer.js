const defaultState = {
  //   username: null,
  //   login: null,
  //   token: null,
  //   image: null,
  loading: false,
  error: false,
};

export const reducerEditAccount = (state = defaultState, action = {}) => {
  switch (action.type) {
    //  case 'EDIT_ACCOUNT':
    //    console.log(action);
    //    return {
    //      username: action.user.username,
    //      login: action.user.login,
    //      token: action.user.token,
    //      image: action.user.image,
    //    };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
