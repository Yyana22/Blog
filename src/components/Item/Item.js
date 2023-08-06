import { format } from 'date-fns';
import { Link } from 'react-router-dom';

// import like from '../../img/heartRed.png';
import noLike from '../../img/heartBlack.png';

import classes from './Item.module.scss';
const Item = (props) => {
  const { slug, title, description, createdAt, tagList, favoritesCount, author } = props.props;

  const tags = tagList.map((item) => {
    return (
      <div key={Math.random() * 1000000} className={classes['tags-item']}>
        {item}
      </div>
    );
  });
  //   console.log(slug, body, updatedAt, favorited);
  return (
    <div className={classes['wrap-close-item']}>
      <div className={classes['close-item-info']}>
        <div className={classes['close-item-info-header']}>
          <div className={classes['close-item-info-title']}>
            <Link to={`/articles/${slug}`}>{title}</Link>
          </div>
          <div className={classes['wrap-likes']}>
            <img className={classes['icon-like']} src={noLike} alt="icon-like" />
            <span className={classes['count-likes']}>{favoritesCount}</span>
          </div>
        </div>
        <div className={classes['close-item-info-tags']}>{tags}</div>
        <div className={classes['close-item-info-text']}>{description}</div>
      </div>
      <div className={classes['close-item-profile-info']}>
        <img width="50" height="50" src={author.image} className={classes['avatar']} alt="avatar" />
        <div className={classes.profile}>
          <div className={classes['profile-names']}>{author.username}</div>
          <div className={classes['date-created']}>{format(new Date(createdAt), 'PP')}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
