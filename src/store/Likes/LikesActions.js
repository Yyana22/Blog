import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const likes = (data) => {
  return {
    type: 'LIKE',
    data,
  };
};

export const noLikes = () => {
  return {
    type: 'NO_LIKE',
  };
};
export const setError = (error) => ({
  type: 'SET_ERROR',
  error,
});
export const likedArticle = (slug) => async (dispatch) => {
  try {
    const result = await blogServise.liked(slug);
    const data = await result.json();
    dispatch(likes(data));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const unLikedArticle = (slug) => async (dispatch) => {
  try {
    await blogServise.unLiked(slug);
  } catch (error) {
    dispatch(setError(error));
  }
};
