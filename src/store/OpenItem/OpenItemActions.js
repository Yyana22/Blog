import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const fetchStartPost = () => {
  return {
    type: 'ADD_START_POST',
  };
};

export const getStartPost = (post) => {
  console.log(post);
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
  console.log(slug);
  dispatch(fetchStartPost());
  try {
    const result = await blogServise.getPost(slug);
    const { article } = result;
    dispatch(getStartPost(article));
    if (article) {
      dispatch(setLoading());
    }

    if (!article) {
      dispatch(getStartPost());
    }
  } catch (error) {
    if (error instanceof TypeError) {
      dispatch(getStartPost());
    } else {
      dispatch(setError(error));
    }
  }
};
