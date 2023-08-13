import { useForm, useFieldArray } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { editArticle } from '../../store/Article/ArticleActions';
import classes from '../styles/styleOpenArticle.module.scss';
const EditItem = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, description, body, tagList } = useSelector((state) => state.article.selectedArticle);
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    if (!userToken) {
      navigate('/sign-in');
    }
  }, [userToken]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: title,
      description: description,
      body: body,
      tags: tagList?.map((tag) => {
        return { name: tag };
      }),
    },
  });

  const onSubmit = handleSubmit((data) => {
    const { title, description, tags, body } = data;
    let tagList = tags.map((item) => item.name);
    const article = {
      title,
      description,
      body,
      tagList,
    };
    dispatch(editArticle(article, slug));
    return navigate('/');
  });

  const { fields, append, remove } = useFieldArray({
    name: 'tags',
    control,
  });
  let tags = fields.map((field, index) => (
    <div key={field.id}>
      <div className={classes['item-tag']}>
        <input className={classes.tag} placeholder="Tag" {...register(`tags.${index}.name`)} />
        <button className={classes['delete-tag']} type="button" onClick={() => remove(index)}>
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div className={classes['wrap-item']}>
      <div className={classes['item-title']}>Edit article</div>
      <div className={classes['new-item-info']}>
        <form onSubmit={onSubmit}>
          <div className={classes['new-item-info-title']}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              required
              {...register('title', {
                required: 'This field is required',
                maxLength: {
                  value: 50,
                  message: 'Maximum 50 characters',
                },
                pattern: {
                  value: /^\s*\S.*$/,
                  message: 'Title cannot cannot be empty',
                },
              })}
            ></input>
            <div>{errors?.title && <p style={{ color: 'red' }}>{errors?.title.message}</p>}</div>
          </div>
          <div className={classes['new-item-info-description']}>
            <label>Short description</label>
            <input
              type="text"
              placeholder="Short description"
              required
              {...register('description', {
                required: 'This field is required',
                maxLength: {
                  value: 50,
                  message: 'Maximum 50 characters',
                },
                pattern: {
                  value: /^\s*\S.*$/,
                  message: 'Description cannot be empty',
                },
              })}
            ></input>
          </div>
          <div className={classes['new-item-info-text']}>
            <label>Text</label>
            <textarea
              className={classes['textarea-creation']}
              placeholder="Text"
              {...register('body', {
                required: 'This field is required',
                maxLength: {
                  value: 1000,
                  message: 'Maximum 1000 characters',
                },
              })}
            ></textarea>
            <div>{errors?.body && <p style={{ color: 'red' }}>{errors?.body.message}</p>}</div>
          </div>
          <label>Tags</label>
          <div className={classes['wrap-item-tags']} style={{ marginTop: '10px' }}>
            <div className={classes['list-tags']}>{tags}</div>
            <button
              className={tags.length ? `${classes['btn-add-tag']}` : `${classes['null-tag']}`}
              type="button"
              onClick={() => append({ name: '' })}
            >
              Add tag
            </button>
          </div>
          <button type="submit" className={classes['send-article']} disabled={!isValid}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
