import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCreateAccount } from '../../store/CreateAccount/CreateAccountActions';

import classes from './CreateAccount.module.scss';
const CreateAccount = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch('password');
  const onSubmit = handleSubmit((data) => {
    const { username, email, password } = data;
    const user = {
      username,
      email,
      password,
    };
    dispatch(setCreateAccount(user));
  });
  if (errors == 'Error: username') {
    console.log(errors);
  }
  if (errors == 'Error: email') {
    console.log(errors);
  }
  return (
    <div className={classes['wrap-create-account']}>
      <p className={classes['title-create-account']}>Create new account</p>
      <form className={classes['form-create-account']} onSubmit={onSubmit}>
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
            <p role="alert" style={{ color: 'red' }}>
              First name is norequired
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
            <p role="alert" style={{ color: 'red' }}>
              Email is required
            </p>
          )}
        </div>
        <div className={classes['wrap-password']}>
          <label htmlFor="Password">Password</label>
          <input
            required
            id="Password"
            className={classes['input-password']}
            placeholder="Password"
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
            <p role="alert" style={{ color: 'red' }}>
              Password is norequired
            </p>
          )}
        </div>
        <div className={classes['wrap-repeat-password']}>
          <label htmlFor="RepeatPassword">Repeat Password</label>
          <input
            required
            id="RepeatPassword"
            className={classes['input-repeat-password']}
            placeholder="Repeat Password"
            {...register('repeat', {
              required: 'This field is required',
              validate: (value) => value === password || 'Passwords must match',
            })}
          ></input>
        </div>
        <div className={classes['wrap-agree']}>
          <input
            required
            type="checkbox"
            id="Agree"
            className={classes['input-agree']}
            {...register('confirmation', {
              required: 'Please confirm your agreement',
            })}
          ></input>
          <label htmlFor="Agree">I agree to the processing of my personal information</label>
        </div>
        <button type="submit" className={classes['btn-create-account']}>
          Create
        </button>
      </form>
      <div className={classes['link-sing-in']}>
        Already have an account?<Link to="/sing-in"> Sign In</Link>.
      </div>
    </div>
  );
};

export default CreateAccount;
