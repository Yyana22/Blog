const defaultState = {
  loading: false,
  articles: [],
  error: false,
  favorite: false,
  delete: false,
  selectedArticle: [],
};

export const reducerArticle = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ADD_START_POST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_START_POSTS':
      return {
        ...state,
        loading: true,
      };
    case 'GET_START_POST':
      return {
        ...state,
        selectedArticle: action.article,
        loading: true,
      };
    case 'GET_START_POSTS':
      return {
        ...state,
        articles: [...action.articles],
        loading: true,
        total: action.articlesCount,
      };
    case 'DELETE_ARTIKLE':
      return {
        ...state,
        delete: true,
      };
    case 'LIKE':
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.slug === action.data.article.slug) {
            return { ...article, favorited: true, favoritesCount: article.favoritesCount + 1 };
          }
          return article;
        }),
      };
    case 'NO_LIKE':
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.slug === action.data.article.slug) {
            return { ...article, favorited: false, favoritesCount: article.favoritesCount - 1 };
          }
          return article;
        }),
      };
    case 'SET_LOADING':
      return { ...state, loading: false };
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
