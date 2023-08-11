import BlogServise from '../../api-service';

const blogServise = new BlogServise();
export const fetchCreateArticle = (article) => {
  console.log(article);
  return {
    type: 'CREATE_ARTIKLE',
    article,
  };
};

export const deleteArticleAction = () => {
  return {
    type: 'DELETE_ARTICLE',
  };
};

export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const createArticle = (article) => async (dispatch) => {
  console.log(article);
  try {
    const result = await blogServise.createArticle(article);
    let res = await result.json();
    console.log(res);
    fetchCreateArticle(res);
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
