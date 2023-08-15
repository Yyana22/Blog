import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPost = () => {
  return {
    type: 'ADD_START_POST',
  };
};

export const fetchStartPosts = () => {
  return {
    type: 'ADD_START_POSTS',
  };
};

export const getStartPost = (article) => {
  return {
    type: 'GET_START_POST',
    article: article,
  };
};

export const getStartPosts = (articles, articlesCount) => {
  return {
    type: 'GET_START_POSTS',
    articles: [...articles],
    articlesCount,
  };
};
export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const likes = ({ favorited, favoritesCount, slug }) => {
  console.log(favorited, favoritesCount, slug);
  return {
    type: 'LIKE',
    favorited,
    favoritesCount,
    slug,
  };
};

export const noLikes = (data) => {
  return {
    type: 'NO_LIKE',
    data,
  };
};
export const likedArticle = (slug) => async (dispatch) => {
  try {
    const result = await blogServise.liked(slug);
    const res = await result.json();
    dispatch(likes(res.article));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const unLikedArticle = (slug) => async (dispatch) => {
  try {
    const result = await blogServise.unLiked(slug);
    const res = await result.json();
    console.log(res);
  } catch (error) {
    dispatch(setError(error));
  }
};
export const getNewPost = (slug) => async (dispatch) => {
  dispatch(fetchStartPost());
  try {
    const result = await blogServise.getPost(slug);
    const { article } = result;
    dispatch(getStartPost(article));
    if (article) {
      dispatch(setLoading());
    }
  } catch (error) {
    dispatch(setError(error));
  }
};

export const getNewPosts = (page) => async (dispatch) => {
  dispatch(fetchStartPosts());
  try {
    const result = await blogServise.getPosts(page);
    const { articles, articlesCount } = result;
    dispatch(getStartPosts(articles, articlesCount));
    if (articles) {
      dispatch(setLoading());
    }

    if (!articles) {
      dispatch(getNewPosts(page));
    }
  } catch (error) {
    dispatch(setError(error));
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    await blogServise.createArticle(article);
  } catch (error) {
    dispatch(setError(error));
  }
};

export const editArticle = (article, slug) => async (dispatch) => {
  try {
    await blogServise.editArticle(article, slug);
  } catch (error) {
    dispatch(setError(error));
  }
};

export const deleteArticle = (slug) => async (dispatch) => {
  try {
    await blogServise.deleteArticle(slug);
  } catch (error) {
    dispatch(setError(error));
  }
};
