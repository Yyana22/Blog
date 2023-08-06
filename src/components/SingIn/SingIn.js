import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { singInAccount } from '../../store/User/UserActions';

import classes from './SingIn.module.scss';
const SingIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  let info = useSelector((state) => state.selectedUser);
  const error = useSelector((state) => state.selectedUser.error);
  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    const user = {
      email,
      password,
    };
    dispatch(singInAccount(user));
    reset();
  });
  if (info.token) {
    return navigate('/');
  }
  let errDiv = error ? <p style={{ textAlign: 'center', color: 'red' }}>No valid email or password</p> : null;

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
            {...register('email')}
          ></input>
        </div>
        <div className={classes['wrap-password']}>
          <label htmlFor="Password">Password</label>
          <input
            required
            id="Password"
            className={classes['input-password']}
            placeholder="Password"
            {...register('password')}
          ></input>
          {errDiv}
        </div>
        <button type="submit" className={classes['btn-login']}>
          Login
        </button>
      </form>
      <div className={classes['link-sing-up']}>
        Already have an account?<Link to="/sing-up"> Sign Up</Link>.
      </div>
    </div>
  );
};

export default SingIn;
