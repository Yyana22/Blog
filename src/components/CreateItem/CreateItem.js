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
    console.log(tags);
    let tagsArr = tags.map((item) => item.name);
    console.log(tagsArr);
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
  const errorForTags = errors?.tags ? classes['tags__wrapper__error'] : classes['error_hidden'];
  let tags = fields.map((field, index) => (
    <div key={field.id} className={classes['item-tag']}>
      <input
        className={classes.tag}
        placeholder="Tag"
        style={errors.tag ? { border: '1px solid red' } : { border: '1px solid #d9d9d9' }}
        {...register(`tags.${index}.name`, {
          required: 'This field is required',
          maxLength: {
            value: 20,
            message: 'Maximum 20 characters',
          },
          pattern: {
            value: /^\s*\S.*$/,
            message: 'Tags cannot be empty',
          },
        })}
      />
      <div className={errorForTags}>{errors?.tags && <p>{errors?.tags[index]?.name?.message}</p>}</div>
      <button className={classes['delete-tag']} type="button" onClick={() => remove(index)}>
        Delete
      </button>
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
            <input type="text" placeholder="Text" required {...register('body')} className={classes.body}></input>
          </div>
          <label>Tags</label>
          <div className={classes['wrap-item-tags']}>
            <div className={classes['list-tags']}>{tags}</div>
            <button type="button" className={classes['btn-add-tag']} onClick={() => append({ name: '' })}>
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
