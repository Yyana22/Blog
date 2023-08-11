const defaultState = {
  loading: false,
  posts: [],
  error: false,
  articlesCount: 0,
  page: 1,
};

export const reducerItemList = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_START_POSTS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_START_POSTS':
      console.log(action.posts);
      return {
        ...state,
        posts: [...action.posts],
        loading: true,
        articlesCount: action.articlesCount,
        page: action.page,
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
