const defaultState = {
  loading: false,
  posts: [],
  error: false,
  total: 0,
};

export const reducerItemList = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_START_POSTS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_START_POSTS':
      return {
        ...state,
        posts: [...action.posts],
        loading: true,
        total: action.articlesCount,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
