import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { likedArticle, unLikedArticle } from '../../store/Article/ArticleActions';

import classes from './Item.module.scss';
const Item = (props) => {
  const dispatch = useDispatch();
  const [notLike, setNotLike] = useState(false);

  const { slug, title, description, createdAt, tagList, favoritesCount, author, favorited } = props.props;
  const tags = tagList.map((item) => {
    return (
      <div
        key={Math.random() * 1000000}
        className={item.trim().length > 0 ? classes['tags-item'] : classes['tags-item-hide']}
      >
        {item}
      </div>
    );
  });
  useEffect(() => {
    setNotLike(favorited);
  }, [favorited]);
  const checkLike = () => {
    if (!localStorage.getItem('token')) {
      return;
    }
    setNotLike(!notLike);

    if (!notLike) {
      dispatch(likedArticle(slug));
    }
    if (notLike) {
      dispatch(unLikedArticle(slug));
    }
  };
  return (
    <div className={classes['wrap-close-item']}>
      <div className={classes['close-item-info']}>
        <div className={classes['close-item-info-header']}>
          <div className={classes['close-item-info-title']}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </div>
          <label className={classes['wrap-likes']}>
            <input className={classes['article-info__likes']} checked={notLike} onChange={checkLike} type="checkbox" />
            <span className={classes['icon-like']}></span>
            <span className={classes['count-likes']}>{favoritesCount}</span>
          </label>
        </div>
        <div className={classes['close-item-info-tags']}>{tags}</div>
        <p className={classes['close-item-info-text']}>{description}</p>
      </div>
      <div className={classes['close-item-profile-info']}>
        <img
          style={{ width: '50px', height: '50px', borderRadius: '100%' }}
          src={author.image}
          className={classes['avatar']}
          alt="avatar"
        />
        <div className={classes.profile}>
          <div className={classes['profile-names']}>{author.username}</div>
          <div className={classes['date-created']}>{format(new Date(createdAt), 'PP')}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
