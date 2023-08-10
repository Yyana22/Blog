import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPosts = () => {
  return {
    type: 'ADD_START_POSTS',
  };
};

export const getStartPosts = (posts, articlesCount, page) => {
  console.log(page);
  return {
    type: 'GET_START_POSTS',
    posts: [...posts],
    articlesCount,
    page,
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
  dispatch(fetchStartPosts());
  try {
    const result = await blogServise.getPosts(page);
    const { articles, articlesCount } = result;
    console.log(articles);
    dispatch(getStartPosts(articles, articlesCount, page));
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
