import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Popconfirm } from 'antd';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import { likedArticle, unLikedArticle } from '../../store/Likes/LikesActions';
import { getNewPost } from '../../store/OpenItem/OpenItemActions';
import { deleteArticle } from '../../store/Article/ArticleActions';
import Loader from '../Loader/loader';

import classes from './OpenItem.module.scss';
const OpenItem = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [notLike, setNotLike] = useState(false);

  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.openItem.post);
  let isLoading = useSelector((state) => state.openItem.loading);
  let del = useSelector((state) => state.article.delete);
  let selectedUsername = useSelector((state) => state.selectedUser.username);
  useEffect(() => {
    dispatch(getNewPost(slug));
  }, [del]);
  if (isLoading) {
    return <Loader />;
  }
  const deleted = () => {
    dispatch(deleteArticle(slug));
    return navigate('/');
  };
  const { title, description, createdAt, body, author, tagList, favoritesCount } = propsItem;
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
        <Popconfirm description="are you sure you want to delete the article?" onConfirm={deleted}>
          <button className={classes['delete-item']}>Delete</button>
        </Popconfirm>
        <button className={classes['edit-item']}>
          <Link className={classes['link-btn']} to={`/articles/${slug}/edit`}>
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
              <span className={classes['count-likes']}>{favoritesCount}</span>
            </label>
          </div>
          <div className={classes['open-item-info-tags']}>{tags}</div>
          <div className={classes['open-item-info-text']}>{description}</div>
        </div>
        <div className={classes['open-item-right-info']}>
          <div className={classes['open-item-profile-info']}>
            <img width="50" height="50" src={author ? author.image : null} className={classes['avatar']} alt="avatar" />
            <div className={classes.profile}>
              <div className={classes['profile-names']}>{author ? author.username : null}</div>
              <div className={classes['date-created']}>{createdAt ? format(new Date(createdAt), 'PP') : null}</div>
            </div>
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
