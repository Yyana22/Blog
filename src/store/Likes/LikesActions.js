import BlogServise from '../../api-service';

const blogServise = new BlogServise();

export const likes = (favorited, favoritesCount) => {
  console.log(favorited, favoritesCount);
  return {
    type: 'LIKE',
    favorited,
    favoritesCount,
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
    const res = await result.json();
    const { favorited, favoritesCount } = res.article;
    dispatch(likes(favorited, favoritesCount));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const unLikedArticle = (slug) => async (dispatch) => {
  try {
    const result = await blogServise.unLiked(slug);
    console.log(result);
  } catch (error) {
    dispatch(setError(error));
  }
};
