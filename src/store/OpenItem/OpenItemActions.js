import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPost = () => {
  return {
    type: 'ADD_START_POST',
  };
};

export const getStartPost = (post) => {
  return {
    type: 'GET_START_POST',
    post: post,
  };
};
export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const getNewPost = (slug) => async (dispatch) => {
  dispatch(fetchStartPost());
  try {
    const result = await blogServise.getPost(slug);
    const { article } = result;
    console.log(result);
    dispatch(getStartPost(article));
    if (article) {
      dispatch(setLoading());
    }
  } catch (error) {
    dispatch(setError(error));
  }
};
