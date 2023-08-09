const defaultState = {
  article: null,
};

export const reducerArticle = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'CREATE_ARTIKLE':
      return {
        username: action.user.username,
        email: action.user.email,
        token: action.user.token,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
