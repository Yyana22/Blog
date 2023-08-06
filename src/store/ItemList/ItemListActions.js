import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPosts = () => {
  return {
    type: 'ADD_START_POSTS',
  };
};

export const getStartPosts = (posts, articlesCount) => {
  const step = 5;
  return {
    type: 'GET_START_POSTS',
    posts: [...posts],
    articlesCount,
    step,
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
  if (page == undefined) {
    page = 1;
  }
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
    if (error instanceof TypeError) {
      dispatch(getStartPosts());
    } else {
      dispatch(setError(error));
    }
  }
};
