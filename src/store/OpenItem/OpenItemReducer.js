const defaultState = {
  loading: false,
  post: {},
  error: false,
  favorite: false,
  delete: false,
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
    case 'DELETE_ARTIKLE':
      return {
        ...state,
        delete: true,
      };
    case 'LIKE':
      return { ...state, favorite: true };
    case 'NO_LIKE':
      return { ...state, favorite: false };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
