const defaultState = {
  loading: false,
  posts: [],
  error: false,
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
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
