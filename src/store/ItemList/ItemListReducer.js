const defaultState = {
  loading: false,
  posts: [],
  error: false,
  articlesCount: 0,
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
        articlesCount: action.articlesCount,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
