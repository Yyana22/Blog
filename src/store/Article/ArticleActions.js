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
    dispatch(getStartPost(article));
    if (article) {
      dispatch(setLoading());
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
  console.log(slug);
  try {
    await blogServise.deleteArticle(slug);
  } catch (error) {
    dispatch(setError(error));
  }
};
