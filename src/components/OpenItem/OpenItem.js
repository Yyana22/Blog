import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getNewPost } from '../../store/OpenItem/OpenItemActions';
import like from '../../img/heartRed.png';
import noLike from '../../img/heartBlack.png';

import classes from './OpenItem.module.scss';
const OpenItem = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();
  let propsItem = useSelector((state) => state.openItem.post);

  useEffect(() => {
    dispatch(getNewPost(slug));
  }, []);
  const { title, description, createdAt, favorited, favoritesCount, body, author, tagList } = propsItem;
  console.log(propsItem);
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
  return (
    <div className={classes['wrap-open-item']}>
      <div className={classes['wrap-open-item-info']}>
        <div className={classes['open-item-info']}>
          <div className={classes['open-item-info-header']}>
            <div className={classes['open-item-info-title']}>{title}</div>
            <div>
              <button className={classes['btn-like']} onClick={() => console.log(!favorited)}>
                <img src={favorited ? like : noLike} alt="icon-like" />
              </button>
              <span className={classes['count-likes']}>{favoritesCount}</span>
            </div>
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
          <button className={classes['edit-item']}>
            <Link className={classes['link-btn']} to="/edit-item">
              Edit
            </Link>
          </button>
          <button className={classes['delete-item']}>Delete</button>
        </div>
      </div>
      <div className={classes['open-item-info-body']}>{body}</div>
    </div>
  );
};

export default OpenItem;
