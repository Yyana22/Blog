import BlogServise from '../../api-service';

const blogServise = new BlogServise();
// export const fetchCreateArticle = (article) => {
//   return {
//     type: 'CREATE_ARTIKLE',
//     article,
//   };
// };

// export const fetchEditArticle = (article) => {
//   return {
//     type: 'EDIT_ARTIKLE',
//     article,
//   };
// };

export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});

export const createArticle = (article) => async (dispatch) => {
  try {
    //  const result =
    await blogServise.createArticle(article);
    //  let res = await result.json();
    //  console.log(res);
    //  fetchCreateArticle(res);
  } catch (error) {
    dispatch(setError(error));
  }
};

export const editArticle = (article, slug) => async (dispatch) => {
  console.log(article, slug);
  try {
    //  const result =
    await blogServise.editArticle(article, slug);
    //  let res = await result.json();
    //  console.log(res);
    //  fetchEditArticle(res);
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
