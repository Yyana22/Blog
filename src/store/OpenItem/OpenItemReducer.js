const defaultState = {
  loading: false,
  post: {},
  error: false,
};

export const reducerOpenItem = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_START_POST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_START_POST':
      console.log(action.post);
      return {
        ...state,
        post: action.post,
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
