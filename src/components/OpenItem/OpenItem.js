import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { likedArticle, unLikedArticle } from '../../store/Likes/LikesActions';
import { getNewPost } from '../../store/OpenItem/OpenItemActions';
import { deleteArticle } from '../../store/Article/ArticleActions';
import Loader from '../Loader/loader';

import classes from './OpenItem.module.scss';
const OpenItem = () => {
  const { slug } = useParams();
  const [notLike, setNotLike] = useState(false);
  let isFavorite = useSelector((state) => state.likes);
  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.openItem.post);
  let isLoading = useSelector((state) => state.openItem.loading);
  let selectedUsername = useSelector((state) => state.selectedUser.username);
  useEffect(() => {
    dispatch(getNewPost(slug));
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  if (!propsItem) {
    return (
      <div>
        <h1 style={{ textAlign: 'center', color: 'red' }}>Oops, this page doesn&apos;t exist</h1>
        <h2 style={{ textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'green' }}>
            Go back to the list
          </Link>
        </h2>
      </div>
    );
  }
  const { title, description, createdAt, body, author, tagList } = propsItem;
  let tags = null;
  if (tagList) {
    tags = tagList.map((item) => {
      return (
        <div key={Math.random() * 1000000} className={classes['tags-item']}>
          {item}
        </div>
      );
    });
  }
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
  let btn =
    selectedUsername === author?.username ? (
      <div className={classes['btn-article']}>
        <Popconfirm
          description="are you sure you want to delete the article?"
          onConfirm={deleteArticle(propsItem.slug)}
        >
          <button className={classes['delete-item']}>Delete</button>
        </Popconfirm>
        <button className={classes['edit-item']}>
          <Link className={classes['link-btn']} to="/edit-item">
            Edit
          </Link>
        </button>
      </div>
    ) : null;
  return (
    <div className={classes['wrap-open-item']}>
      <div className={classes['wrap-open-item-info']}>
        <div className={classes['open-item-info']}>
          <div className={classes['open-item-info-header']}>
            <div className={classes['open-item-info-title']}>{title}</div>
            <label className={classes['wrap-likes']}>
              <input
                className={classes['article-info__likes']}
                checked={notLike}
                onChange={checkLike}
                type="checkbox"
              />
              <span className={classes['icon-like']}></span>
              <span className={classes['count-likes']}>{isFavorite.favoritesCount}</span>
            </label>
          </div>
          <div className={classes['open-item-info-tags']}>{tags}</div>
          <div className={classes['open-item-info-text']}>{description}</div>
        </div>
        <div className={classes['open-item-right-info']}>
          <div className={classes['open-item-profile-info']}>
            <div className={classes.profile}>
              <div className={classes['profile-names']}>{author ? author.username : null}</div>
              <div className={classes['date-created']}>{createdAt}</div>
            </div>
            <img width="50" height="50" src={author ? author.image : null} className={classes['avatar']} alt="avatar" />
          </div>
          {btn}
        </div>
      </div>
      <div className={classes['open-item-info-body']}>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default OpenItem;
