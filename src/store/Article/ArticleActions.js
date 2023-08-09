import BlogServise from '../../api-service';

const blogServise = new BlogServise();
export const fetchCreateAccount = (article) => {
  return {
    type: 'CREATE_ARTIKLE',
    article,
  };
};

export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const createArticle = (article) => async (dispatch) => {
  try {
    await blogServise.createArticle(article);
  } catch (error) {
    dispatch(setError(error));
  }
};

export const deleteArticle = (slug) => async (dispatch) => {
  try {
    const result = await blogServise.deleteArticle(slug);
    console.log(result);
  } catch (error) {
    dispatch(setError(error));
  }
};
