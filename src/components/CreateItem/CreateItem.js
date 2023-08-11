import { useForm, useFieldArray } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createArticle } from '../../store/Article/ArticleActions';

import classes from './CreateItem.module.scss';
const CreateItem = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      body: '',
      tags: [],
    },
  });
  const onSubmit = handleSubmit((data) => {
    const { title, description, tags, body } = data;
    let tagsArr = tags.map((item) => item.name);
    const article = {
      title,
      description,
      body,
      tagsArr,
    };
    dispatch(createArticle(article));
    reset();
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
    <div className={classes['wrap-new-item']}>
      <div className={classes['new-item-title']}>Create new article</div>
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

export default CreateItem;
