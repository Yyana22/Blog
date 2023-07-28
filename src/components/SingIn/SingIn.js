import classes from './SingIn.module.scss';

const SingIn = () => {
  const changeInput = (e) => {
    console.log(e);
  };
  const onSubmit = (e) => {
    //  e.preventDefault();
    console.log(e);
  };
  return (
    <div className={classes['wrap-login-account']}>
      <p className={classes['title-login-account']}>Sign In</p>
      <form className={classes['form-login-account']} onSubmit={onSubmit()}>
        <div className={classes['wrap-email-address']}>
          <label htmlFor="EmailAddress">Email address</label>
          <input
            required
            id="EmailAddress"
            className={classes['input-email-address']}
            placeholder="Email address"
            onChange={changeInput()}
          ></input>
        </div>
        <div className={classes['wrap-password']}>
          <label htmlFor="Password">Password</label>
          <input
            required
            id="Password"
            className={classes['input-password']}
            placeholder="Password"
            onChange={changeInput()}
          ></input>
        </div>
        <button type="submit" className={classes['btn-login']}>
          Login
        </button>
      </form>
      <div className={classes['link-sing-up']}>
        Already have an account?<a href="#"> Sign Up</a>.
      </div>
    </div>
  );
};

export default SingIn;
