import classes from './CreateAccount.module.scss';

const CreateAccount = () => {
  const changeInput = (e) => {
    console.log(e);
  };
  const onSubmit = (e) => {
    //  e.preventDefault();
    console.log(e);
  };
  return (
    <div className={classes['wrap-create-account']}>
      <p className={classes['title-create-account']}>Create new account</p>
      <form className={classes['form-create-account']} onSubmit={onSubmit()}>
        <div className={classes['wrap-user-name']}>
          <label htmlFor="Username">Username</label>
          <input
            required
            id="Username"
            className={classes['input-user-name']}
            placeholder="Username"
            onChange={changeInput()}
          ></input>
        </div>
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
        <div className={classes['wrap-repeat-password']}>
          <label htmlFor="RepeatPassword">Repeat Password</label>
          <input
            required
            id="RepeatPassword"
            className={classes['input-repeat-password']}
            placeholder="Repeat Password"
            onChange={changeInput()}
          ></input>
        </div>
        <div className={classes['wrap-agree']}>
          <input
            required
            type="checkbox"
            id="Agree"
            className={classes['input-agree']}
            onChange={changeInput()}
          ></input>
          <label htmlFor="Agree">I agree to the processing of my personal information</label>
        </div>
        <button type="submit" className={classes['btn-create-account']}>
          Create
        </button>
      </form>
      <div className={classes['link-sing-in']}>
        Already have an account?<a href="#"> Sign In</a>.
      </div>
    </div>
  );
};

export default CreateAccount;
