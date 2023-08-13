const defaultState = {
  error: false,
  articles: [],
};

export const reducerLikes = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'LIKE':
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.slug === action.data.article.slug) {
            return { ...article, favorited: false, favoritesCount: article.favoritesCount - 1 };
          }
          return article;
        }),
      };
    case 'NO_LIKE':
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.slug === action.data.article.slug) {
            return { ...article, favorited: true, favoritesCount: article.favoritesCount + 1 };
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
