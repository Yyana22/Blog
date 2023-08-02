import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { useEffect } from 'react';

import { singInAccount, setErrors } from '../../store/SingIn/SingInActions';

import classes from './SingIn.module.scss';
const SingIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setError } = useForm();

  const error = useSelector((state) => state.singIn.error);
  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    const user = {
      email,
      password,
    };
    dispatch(singInAccount(user));
  });
  console.log(error);
  useEffect(() => {
    if (error == 'Error: email or password') {
      setError('email', { type: 'custom', message: 'Invalid email or password' });
      setError('password', { type: 'custom', message: 'Invalid email or password' });
      message.error('Please check your email or password');
    }
    if (error == 'none') {
      message.success('Signed in successfully!');
      dispatch(setErrors());
    }
  }, [error]);
  return (
    <div className={classes['wrap-login-account']}>
      <p className={classes['title-login-account']}>Sign In</p>
      <form className={classes['form-login-account']} onSubmit={onSubmit}>
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
          ></input>
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
              pattern: {
                value: /^\S*$/,
                message: 'Invalid password! No spaces are allowed!',
              },
            })}
          ></input>
        </div>
        <button type="submit" className={classes['btn-login']}>
          Login
        </button>
      </form>
      <div className={classes['link-sing-up']}>
        Already have an account?<Link to="/create-account"> Sign Up</Link>.
      </div>
    </div>
  );
};

export default SingIn;
