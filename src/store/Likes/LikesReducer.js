const defaultState = {
  favoriteCount: null,
  error: false,
  favorite: false,
};

export const reducerLikes = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'LIKE':
      return { ...state, favorite: action.favorite, favoriteCount: action.favoriteCount };
    case 'NO_LIKE':
      return { ...state, favorite: action.favorite, favoriteCount: action.favoriteCount };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
