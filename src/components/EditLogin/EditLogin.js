import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setEditAccount } from '../../store/User/UserActions';
import classes from '../styles/styleFormsAccount.module.scss';
const EditLogin = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    const { username, email, password, image } = data;
    const user = {
      username,
      email,
      password,
      image,
    };
    reset();
    dispatch(setEditAccount(user));
  });
  return (
    <div className={classes['wrap-form-account']}>
      <p className={classes['title-form-account']}>Edit Profile</p>
      <form className={classes['form-account']} onSubmit={onSubmit}>
        <div className={classes['wrap-user-name']}>
          <label htmlFor="Username">Username</label>
          <input
            required
            id="Username"
            className={classes['input-user-name']}
            placeholder="Username"
            {...register('username', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Your username needs to be at least 3 characters',
              },
              maxLength: {
                value: 20,
                message: 'Your username needs to be less than 20 characters',
              },
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: 'Your username can only contain letters and numbers',
              },
            })}
            aria-invalid={errors.username ? 'true' : 'false'}
          ></input>
          {errors?.username && (
            <p className={classes['p-error']} role="alert" style={{ color: 'red', margin: '5px 0 0 0' }}>
              {errors.username.message}
            </p>
          )}
        </div>
        <div className={classes['wrap-email-address']}>
          <label htmlFor="EmailAddress">Email address</label>
          <input
            required
            id="EmailAddress"
            className={classes['input-email-address']}
            placeholder="Email address"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          ></input>
          {errors?.email && (
            <p className={classes['p-error']} role="alert" style={{ color: 'red', margin: '5px 0 0 0' }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className={classes['wrap-new-password']}>
          <label htmlFor="NewPassword">New password</label>
          <input
            required
            id="NewPassword"
            className={classes['input-new-password']}
            placeholder="New password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 6,
                message: 'Your password needs to be at least 6 characters',
              },
              maxLength: {
                value: 40,
                message: 'Your password needs to be less than 40 characters',
              },
              pattern: {
                value: /^\S*$/,
                message: 'Invalid password! No spaces are allowed',
              },
            })}
          ></input>
          {errors?.password && (
            <p className={classes['p-error']} role="alert" style={{ color: 'red', margin: '5px 0 0 0' }}>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className={classes['wrap-avatar']}>
          <label htmlFor="Avatar">Avatar image (url)</label>
          <input
            required
            id="Avatar"
            className={classes['input-avatar']}
            placeholder="Avatar image"
            {...register('image')}
          ></input>
        </div>
        <button type="submit" className={classes['btn-form']}>
          Save
        </button>
      </form>
    </div>
  );
};

export default EditLogin;
