import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPosts = () => {
  return {
    type: 'ADD_START_POSTS',
  };
};

export const getStartPosts = (posts, articlesCount) => {
  return {
    type: 'GET_START_POSTS',
    posts: [...posts],
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

export const getNewPosts = (page) => async (dispatch) => {
  console.log(page);
  dispatch(fetchStartPosts());
  try {
    const result = await blogServise.getPosts(page);
    const { articles, articlesCount } = result;
    dispatch(getStartPosts(articles, articlesCount));
    if (articles) {
      dispatch(setLoading());
    }

    if (!articles) {
      dispatch(getStartPosts());
    }
  } catch (error) {
    dispatch(setError(error));
  }
};
